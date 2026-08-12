# PropTechUSA Custom Data Solutions

Production landing page for `data.proptechusa.ai`, covering custom real-estate and sports data solutions.

## Local development

```bash
npm install
npm run dev
```

## Lead routing

The project brief posts to `/api/intake`. Configure `SLACK_LEAD_WEBHOOK_URL` in Vercel for Production, Preview, and Development. The webhook is server-only and is never exposed to the browser.

If the webhook is not configured, the page transparently offers direct email and Calendly fallbacks rather than reporting a false success.

## Production

- Canonical domain: `https://data.proptechusa.ai`
- Calendly: `https://calendly.com/proptechusa/new-meeting-1`
- Lead email: `sales@proptechusa.ai`
