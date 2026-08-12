"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "./Brand";

type SubmitState = "idle" | "loading" | "success" | "error" | "unconfigured";

export default function IntakeForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 503 && result.code === "INTAKE_NOT_CONFIGURED") {
          setState("unconfigured");
          setMessage("Direct routing is being connected. Email us or book an integration now.");
          return;
        }
        throw new Error(result.error || "We could not send your brief. Please try again.");
      }

      setState("success");
      setMessage("Brief received. We’ll review the fit and reply directly.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not send your brief. Please try again.");
    }
  }

  return (
    <form className="intake-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <span>PROJECT INTAKE / 01</span>
        <b>Tell us where the data breaks.</b>
        <p>An email is enough to start. Add the brief now if you already know the shape.</p>
      </div>

      <div className="form-grid">
        <label className="field field-wide">
          <span>WORK EMAIL <em>REQUIRED</em></span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={160} />
        </label>
        <label className="field">
          <span>YOUR NAME</span>
          <input name="name" type="text" autoComplete="name" placeholder="Name" maxLength={100} />
        </label>
        <label className="field">
          <span>COMPANY</span>
          <input name="company" type="text" autoComplete="organization" placeholder="Company" maxLength={120} />
        </label>
        <label className="field">
          <span>DATA VERTICAL</span>
          <select name="vertical" defaultValue="Real estate">
            <option>Real estate</option>
            <option>Sports</option>
            <option>Both</option>
            <option>Another data product</option>
          </select>
        </label>
        <label className="field">
          <span>TIMELINE</span>
          <select name="timeline" defaultValue="Exploring">
            <option>Exploring</option>
            <option>0–30 days</option>
            <option>30–90 days</option>
            <option>90+ days</option>
          </select>
        </label>
        <label className="field field-wide">
          <span>WHAT SHOULD THE DATA DO?</span>
          <textarea name="brief" rows={5} placeholder="The source, endpoint, response, workflow, or decision you wish existed…" maxLength={3000} />
        </label>
        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-submit-row">
        <button className="button button-red button-large" type="submit" disabled={state === "loading"}>
          {state === "loading" ? "Sending brief…" : "Send project brief"}
          {state !== "loading" && <ArrowIcon />}
        </button>
        <p>By submitting, you agree that PropTechUSA.ai may contact you about this request.</p>
      </div>

      {message && (
        <div className={`form-message ${state}`} role="status" aria-live="polite">
          <span>{state === "success" ? "✓" : state === "unconfigured" ? "↗" : "!"}</span>
          <p>{message}</p>
          {state === "unconfigured" && (
            <div>
              <a href="mailto:sales@proptechusa.ai?subject=Custom%20data%20solution">Email sales</a>
              <a href="https://calendly.com/proptechusa/new-meeting-1">Book integration</a>
            </div>
          )}
        </div>
      )}
    </form>
  );
}
