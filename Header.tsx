"use client";

import { useState } from "react";
import { ArrowIcon, Brand, ProductShield } from "./Brand";

const links = {
  company: "https://www.proptechusa.ai",
  propdata: "https://propdata.proptechusa.ai",
  workspace: "https://propdata.proptechusa.ai/dashboard",
  docs: "https://propdata.proptechusa.ai/docs",
  propsecure: "https://propsecure.proptechusa.ai",
  propsports: "https://propsports.proptechusa.ai",
  status: "https://www.proptechusa.ai/status",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="brand-rail" aria-hidden="true"><span /><span /></div>
      <header className="site-header">
        <a href="#top" aria-label="PropTechUSA Custom Data Solutions home" onClick={close}><Brand /></a>
        <nav className={`main-nav${open ? " nav-open" : ""}`} aria-label="Primary navigation">
          <div className="nav-group">
            <a className="nav-link" href="#solutions" onClick={close}>Solutions <span>⌄</span></a>
            <div className="nav-menu nav-menu-wide">
              <a href="#real-estate" onClick={close}><ProductShield kind="propdata" compact /><span><b>Real estate intelligence</b><small>Identity, public record, valuation, risk, and spatial data.</small></span></a>
              <a href="#sports" onClick={close}><ProductShield kind="sports" compact /><span><b>Sports intelligence</b><small>Live events, players, odds, performance, and custom signals.</small></span></a>
              <a href="#delivery" onClick={close}><ProductShield kind="data" compact /><span><b>Custom data products</b><small>APIs, feeds, licensing, embedded tools, and AI grounding.</small></span></a>
            </div>
          </div>
          <div className="nav-group">
            <a className="nav-link" href="#delivery" onClick={close}>What we build <span>⌄</span></a>
            <div className="nav-menu">
              <a href="#delivery" onClick={close}><span><b>Custom APIs + endpoints</b><small>One clean contract around your exact workflow.</small></span></a>
              <a href="#delivery" onClick={close}><span><b>Feeds + webhooks</b><small>Live, scheduled, bulk, and event-driven delivery.</small></span></a>
              <a href="#delivery" onClick={close}><span><b>Embedded intelligence</b><small>White-label tools and internal decision systems.</small></span></a>
              <a href="#architecture" onClick={close}><span><b>Data engineering</b><small>Source, normalize, resolve, validate, and observe.</small></span></a>
            </div>
          </div>
          <a className="nav-link" href="#process" onClick={close}>Process</a>
          <div className="nav-group">
            <a className="nav-link" href="#network" onClick={close}>Shield Network <span>⌄</span></a>
            <div className="nav-menu nav-menu-wide network-menu">
              <a href={links.propdata}><ProductShield kind="propdata" compact /><span><b>PropData</b><small>166M+ U.S. parcels and property intelligence.</small></span></a>
              <a href={links.propsports}><ProductShield kind="sports" compact /><span><b>PropSports</b><small>Sports data, odds, Statcast, and live infrastructure.</small></span></a>
              <a href={links.propsecure}><ProductShield kind="secure" compact /><span><b>PropSecure</b><small>Property surveillance, monitoring, and risk signals.</small></span></a>
              <a href={links.company}><ProductShield kind="company" compact /><span><b>PropTechUSA.ai</b><small>The independent data infrastructure company.</small></span></a>
            </div>
          </div>
          <div className="nav-group resources-nav">
            <a className="nav-link" href="#resources" onClick={close}>Resources <span>⌄</span></a>
            <div className="nav-menu">
              <a href={links.workspace}><span><b>API Workspace</b><small>Build and inspect real PropData requests.</small></span></a>
              <a href={links.docs}><span><b>Developer docs</b><small>Explore endpoints, schemas, and integrations.</small></span></a>
              <a href={links.status}><span><b>Platform status</b><small>Check current service availability.</small></span></a>
              <a href="#faq" onClick={close}><span><b>Frequently asked questions</b><small>Scope, delivery, sources, and engagement.</small></span></a>
            </div>
          </div>
        </nav>
        <div className="header-actions">
          <a className="status-pill" href={links.status}><i /> INFRASTRUCTURE ONLINE</a>
          <a className="button button-blue header-cta" href="#contact">Design my solution <ArrowIcon /></a>
          <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((current) => !current)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  );
}
