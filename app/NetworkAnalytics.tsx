"use client";

import { useEffect } from "react";

const GA_ID = "G-HBC3D3JWX0";

function isProductionHost(host: string) {
  const h = String(host || "").toLowerCase();
  return (
    (h === "proptechusa.ai" || h === "www.proptechusa.ai" || h.endsWith(".proptechusa.ai")) &&
    !h.endsWith(".vercel.app") &&
    !h.endsWith(".workers.dev") &&
    !h.endsWith(".pages.dev") &&
    h !== "localhost" &&
    h !== "127.0.0.1"
  );
}

export function NetworkAnalytics({ surface }: { surface: string }) {
  useEffect(() => {
    if (!isProductionHost(window.location.hostname)) return;

    const w = window as typeof window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
      __proptechGaInitialized?: boolean;
    };
    if (w.__proptechGaInitialized) return;
    w.__proptechGaInitialized = true;

    w.dataLayer = w.dataLayer || [];
    w.gtag = w.gtag || function (...args: unknown[]) {
      w.dataLayer!.push(args);
    };

    w.gtag("js", new Date());
    w.gtag("set", { proptech_surface: surface });
    w.gtag("config", GA_ID, {
      cookie_domain: ".proptechusa.ai",
      cookie_flags: "SameSite=Lax;Secure",
    });

    if (!document.querySelector('script[data-proptech-ga4="1"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.proptechGa4 = "1";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
      document.head.appendChild(script);
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      try {
        const url = new URL(target.href, window.location.href);
        const host = window.location.hostname.toLowerCase();
        if (
          url.hostname !== host &&
          (url.hostname === "proptechusa.ai" ||
            url.hostname === "www.proptechusa.ai" ||
            url.hostname.endsWith(".proptechusa.ai"))
        ) {
          w.gtag?.("event", "proptech_network_click", {
            proptech_surface: surface,
            source_host: host,
            target_host: url.hostname,
            link_url: url.href,
          });
        }
      } catch {}
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [surface]);

  return null;
}
