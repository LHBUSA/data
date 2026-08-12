import { ImageResponse } from "next/og";

export const alt = "PropTechUSA Custom Data Solutions for real estate and sports";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", color: "white", background: "linear-gradient(135deg,#06162b,#0b315c)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", opacity: .2, backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)", backgroundSize: "42px 42px" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "32%", height: 7, background: "#d32837" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: "62%", height: 7, background: "#2563eb" }} />
      <div style={{ display: "flex", width: "100%", alignItems: "center", padding: "72px 78px", gap: 60 }}>
        <div style={{ width: 160, height: 174, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #456b95", borderRadius: 32, background: "rgba(255,255,255,.055)" }}>
          <svg viewBox="0 0 64 68" width="116" height="126">
            <path d="M32 2 58 11v18c0 17-10.1 29.7-26 36.6C16.1 58.7 6 46 6 29V11Z" fill="#fff" stroke="#dce7f4" strokeWidth="2" />
            <path d="M32 6 54 13.6v15c0 14.2-7.8 24.9-22 31.6-14.2-6.7-22-17.4-22-31.6v-15Z" fill="#17488f" stroke="#0a2548" strokeWidth="2.4" />
            <circle cx="20" cy="29" r="4.2" fill="#ef3340" stroke="#fff" strokeWidth="1.7" />
            <circle cx="43.5" cy="23" r="4.2" fill="#75a7ff" stroke="#fff" strokeWidth="1.7" />
            <circle cx="43.5" cy="43" r="4.2" fill="#fff" stroke="#fff" strokeWidth="1.7" />
            <path d="m23.8 27.9 15.5-3.7M23.6 31.1l15.8 9.8M20 33.2v10.5h19.2" fill="none" stroke="#fff" strokeWidth="2.3" />
          </svg>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 5, color: "#8fb5df", fontWeight: 700 }}>PROPTECHUSA.AI · CUSTOM DATA SOLUTIONS</div>
          <div style={{ display: "flex", marginTop: 28, fontFamily: "Georgia, serif", fontSize: 70, lineHeight: .98, letterSpacing: -3 }}>Your data product,</div>
          <div style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 70, lineHeight: .98, letterSpacing: -3, color: "#ef4653" }}>engineered around</div>
          <div style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 70, lineHeight: .98, letterSpacing: -3, color: "#76a6ff" }}>the outcome.</div>
          <div style={{ display: "flex", marginTop: 31, fontSize: 19, color: "#a6bdd4" }}>Real estate + sports · API · feed · license · embedded intelligence</div>
        </div>
      </div>
    </div>,
    size,
  );
}
