import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const requests = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

type Lead = {
  email: string;
  name: string;
  company: string;
  vertical: string;
  timeline: string;
  brief: string;
  website: string;
};

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function escapeSlack(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 160;
}

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = requests.get(ip);
  if (!current || current.resetAt < now) {
    requests.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  current.count += 1;
  requests.set(ip, current);
  return current.count > MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "Too many submissions. Please try again in a few minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const lead: Lead = {
    email: clean(body.email, 160),
    name: clean(body.name, 100),
    company: clean(body.company, 120),
    vertical: clean(body.vertical, 80) || "Not specified",
    timeline: clean(body.timeline, 80) || "Not specified",
    brief: clean(body.brief, 3000),
    website: clean(body.website, 200),
  };

  if (lead.website) {
    return NextResponse.json({ ok: true });
  }

  if (!isValidEmail(lead.email)) {
    return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
  }

  const webhook = process.env.SLACK_LEAD_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      {
        error: "Lead routing is not configured.",
        code: "INTAKE_NOT_CONFIGURED",
        email: process.env.LEAD_NOTIFICATION_EMAIL || "sales@proptechusa.ai",
      },
      { status: 503 },
    );
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `New custom data inquiry from ${escapeSlack(lead.email)}`,
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "New custom data solution inquiry", emoji: true },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Email*\n${escapeSlack(lead.email)}` },
            { type: "mrkdwn", text: `*Name*\n${escapeSlack(lead.name || "Not provided")}` },
            { type: "mrkdwn", text: `*Company*\n${escapeSlack(lead.company || "Not provided")}` },
            { type: "mrkdwn", text: `*Vertical*\n${escapeSlack(lead.vertical)}` },
            { type: "mrkdwn", text: `*Timeline*\n${escapeSlack(lead.timeline)}` },
            { type: "mrkdwn", text: "*Source*\ndata.proptechusa.ai" },
          ],
        },
        ...(lead.brief
          ? [{ type: "section", text: { type: "mrkdwn", text: `*What should the data do?*\n${escapeSlack(lead.brief)}` } }]
          : []),
        {
          type: "context",
          elements: [{ type: "mrkdwn", text: `Submitted ${new Date().toISOString()} · Custom Data Solutions` }],
        },
      ],
    }),
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    console.error("Slack lead delivery failed", { status: response.status });
    return NextResponse.json({ error: "We could not route your brief. Please email sales@proptechusa.ai." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
