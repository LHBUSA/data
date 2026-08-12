type ShieldKind = "data" | "propdata" | "sports" | "secure" | "company";

export function ProductShield({
  kind = "data",
  compact = false,
}: {
  kind?: ShieldKind;
  compact?: boolean;
}) {
  return (
    <span className={`shield shield-${kind}${compact ? " shield-compact" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 64 68" focusable="false">
        <path d="M32 2 58 11v18c0 17-10.1 29.7-26 36.6C16.1 58.7 6 46 6 29V11Z" fill="#fff" stroke="#dce7f4" strokeWidth="2" />
        <path d="M32 6 54 13.6v15c0 14.2-7.8 24.9-22 31.6-14.2-6.7-22-17.4-22-31.6v-15Z" fill="currentColor" stroke="#0a2548" strokeWidth="2.4" />
        <path d="M32 10.2 50 16.4v12.2c0 11.6-6 20.5-18 26.5-12-6-18-14.9-18-26.5V16.4Z" fill="none" stroke="#a9c9ff" strokeWidth="1.4" opacity=".92" />
        {kind === "data" && (
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="20" cy="29" r="4.2" fill="#ef3340" stroke="#fff" strokeWidth="1.7" />
            <circle cx="43.5" cy="23" r="4.2" fill="#75a7ff" stroke="#fff" strokeWidth="1.7" />
            <circle cx="43.5" cy="43" r="4.2" fill="#fff" stroke="#fff" strokeWidth="1.7" />
            <path d="m23.8 27.9 15.5-3.7M23.6 31.1l15.8 9.8" stroke="#fff" strokeWidth="2.4" />
            <path d="M20 33.2v10.5h19.2" stroke="#7db5ff" strokeWidth="2.2" />
          </g>
        )}
        {kind === "propdata" && (
          <g>
            <rect x="18" y="34" width="6" height="12" rx="1.6" fill="#ef3340" />
            <rect x="29" y="27" width="6" height="19" rx="1.6" fill="#fff" />
            <rect x="40" y="20" width="6" height="26" rx="1.6" fill="#7db5ff" />
            <path d="m18 23 14-6 14 6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}
        {kind === "sports" && (
          <g>
            <circle cx="32" cy="33" r="14" fill="#fff" />
            <path d="M18.5 30.5c9 1 18 7 27 5M27 20c4 8 4 18 0 26M38 21c-5 6-7 16-4 25" fill="none" stroke="#2563eb" strokeWidth="2" />
            <path d="M19 38c7-1 17 2 23 7" fill="none" stroke="#ef3340" strokeWidth="2" />
          </g>
        )}
        {kind === "secure" && (
          <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
            <path d="m19 31 13-11 13 11v15H19Z" strokeWidth="3" />
            <path d="m27 37 4 4 8-9" stroke="#58e09b" strokeWidth="3.5" />
          </g>
        )}
        {kind === "company" && (
          <g fill="#fff">
            <circle cx="32" cy="22" r="4" />
            <circle cx="21" cy="41" r="4" />
            <circle cx="43" cy="41" r="4" />
            <path d="M30.5 25.5 23 37m10.5-11.5L41 37M25 41h14" fill="none" stroke="#7db5ff" strokeWidth="2.5" />
          </g>
        )}
      </svg>
    </span>
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand">
      <ProductShield kind="data" compact={compact} />
      <span className="brand-copy">
        <strong>PropTech<span>USA</span></strong>
        <small>CUSTOM DATA SOLUTIONS</small>
      </span>
    </span>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4.5 10.5 3.2 3.2L15.5 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
