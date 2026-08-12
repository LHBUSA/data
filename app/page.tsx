import Image from "next/image";
import heroImage from "../public/images/data-hero.webp";
import integrationTeamImage from "../public/images/integration-team.webp";
import propertyImage from "../public/images/property-intelligence.webp";
import sportsImage from "../public/images/sports-intelligence.webp";
import { ArrowIcon, Brand, CheckIcon, ProductShield } from "./components/Brand";
import Header from "./components/Header";
import IntakeForm from "./components/IntakeForm";
import SolutionLab from "./components/SolutionLab";

const links = {
  company: "https://www.proptechusa.ai",
  propdata: "https://propdata.proptechusa.ai",
  workspace: "https://propdata.proptechusa.ai/dashboard",
  docs: "https://propdata.proptechusa.ai/docs",
  pricing: "https://propdata.proptechusa.ai/#pricing",
  propsecure: "https://propsecure.proptechusa.ai",
  propsports: "https://propsports.proptechusa.ai",
  autocomplete: "https://autocomplete.proptechusa.ai",
  calendly: "https://calendly.com/proptechusa/new-meeting-1",
  status: "https://www.proptechusa.ai/status",
  terms: "https://www.proptechusa.ai/terms",
  billing: "https://billing.stripe.com/p/login/cNi3cv2vY7em3lr4oj7wA00",
};

const propertyCapabilities = [
  ["Property identity", "Resolve an address, coordinate, or parcel into one durable record."],
  ["Ownership + public record", "Normalize assessor, recorder, deed, tax, and ownership context."],
  ["Valuation + economics", "Attach values, comps, rent, equity context, and customer rules."],
  ["Risk + geometry", "Deliver flood, hazard, neighborhood, parcel, and spatial intelligence."],
];

const sportsCapabilities = [
  ["Live event data", "Normalize schedules, scores, status, play-by-play, and game context."],
  ["Players + performance", "Shape rosters, splits, Statcast, history, and projections for your use case."],
  ["Odds + player markets", "Unify books, lines, props, movement, and consensus into one contract."],
  ["Derived intelligence", "Turn raw feeds into alerts, rankings, confidence, and decision signals."],
];

const deliveryCards = [
  {
    number: "01",
    title: "Custom APIs",
    label: "THE EXACT RESPONSE",
    body: "Purpose-built endpoints, stable schemas, customer-specific joins, and the fields your application actually needs.",
    tags: ["REST", "GraphQL-ready", "MCP", "Versioned"],
  },
  {
    number: "02",
    title: "Data feeds",
    label: "THE RIGHT FRESHNESS",
    body: "Live streams, webhooks, scheduled snapshots, bulk files, and delta delivery aligned to your operating rhythm.",
    tags: ["Real time", "Webhooks", "S3", "Bulk + delta"],
  },
  {
    number: "03",
    title: "Embedded intelligence",
    label: "THE COMPLETE EXPERIENCE",
    body: "White-label widgets, internal workspaces, scoring interfaces, and decision tools powered by the same contract.",
    tags: ["White label", "React", "Dashboards", "Workflow"],
  },
  {
    number: "04",
    title: "Data licensing",
    label: "THE FOUNDATION",
    body: "Licensed records, historical archives, custom coverage, and source-aware data foundations for products at scale.",
    tags: ["National", "Historical", "Custom scope", "QA"],
  },
];

const process = [
  ["01", "Define the decision", "We start with the product outcome, required response, refresh rate, and acceptance criteria."],
  ["02", "Design the contract", "We map sources, identity, normalization, joins, edge cases, and delivery into one testable spec."],
  ["03", "Build + validate", "Pipelines, endpoints, QA checks, provenance, observability, and sample payloads move together."],
  ["04", "Launch + evolve", "We integrate, monitor, improve coverage, and version the product without breaking your workflow."],
];

function Footer() {
  return (
    <footer className="site-footer" id="resources">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a href="#top" aria-label="Back to top"><Brand compact /></a>
          <p>Independent data infrastructure for real estate and sports. Direct product access. Custom delivery. No black box.</p>
          <div className="footer-contact">
            <a href="mailto:sales@proptechusa.ai">sales@proptechusa.ai</a>
            <a href="tel:+18887843881">1-888-784-3881</a>
          </div>
        </div>
        <div className="footer-column">
          <b>SOLUTIONS</b>
          <a href="#real-estate">Real estate data</a>
          <a href="#sports">Sports data</a>
          <a href="#delivery">Custom APIs</a>
          <a href="#delivery">Data feeds</a>
          <a href="#delivery">Embedded tools</a>
        </div>
        <div className="footer-column">
          <b>PROPData</b>
          <a href={links.propdata}>Platform</a>
          <a href={links.workspace}>API Workspace</a>
          <a href={links.docs}>Documentation</a>
          <a href={links.pricing}>Pricing</a>
          <a href={links.autocomplete}>Instant value demo</a>
        </div>
        <div className="footer-column">
          <b>SHIELD NETWORK</b>
          <a href={links.propsports}>PropSports</a>
          <a href={links.propsecure}>PropSecure</a>
          <a href={links.company}>PropTechUSA.ai</a>
          <a href={links.status}>System status</a>
          <a href={links.billing}>Manage billing</a>
        </div>
        <div className="footer-column">
          <b>CONNECT</b>
          <a href="#contact">Send a project brief</a>
          <a href={links.calendly}>Book an integration</a>
          <a href="mailto:sales@proptechusa.ai">Email sales</a>
          <a href={links.terms}>Terms of service</a>
        </div>
      </div>
      <div className="footer-shields" aria-label="PropTechUSA Shield Network">
        <span>THE PROPTECHUSA.AI SHIELD NETWORK</span>
        <div>
          <a href={links.propdata} aria-label="PropData"><ProductShield kind="propdata" compact /></a>
          <a href={links.propsports} aria-label="PropSports"><ProductShield kind="sports" compact /></a>
          <a href={links.propsecure} aria-label="PropSecure"><ProductShield kind="secure" compact /></a>
          <a href={links.company} aria-label="PropTechUSA"><ProductShield kind="company" compact /></a>
          <a href="#top" aria-label="Custom Data Solutions"><ProductShield kind="data" compact /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PropTechUSA.ai · Independent data infrastructure.</span>
        <span>BUILT IN THE USA · DELIVERED GLOBALLY</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      <div className="signal-strip">
        <span>CUSTOM DATA SOLUTIONS</span><i />
        <span>REAL ESTATE + SPORTS</span><i />
        <span>API · FEED · LICENSE · EMBED</span><i />
        <span>DIRECT INFRASTRUCTURE</span>
      </div>

      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src={heroImage}
          alt="A blue-hour American city, residential neighborhoods, and an illuminated baseball stadium"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-copy">
          <div className="hero-kicker"><span><i /> CUSTOM DATA, BUILT DIRECT</span> REAL ESTATE + SPORTS</div>
          <h1 id="hero-title">Hard-to-source data,<em>engineered into</em><strong>your advantage.</strong></h1>
          <div className="hero-thesis">
            <p>Bring us the decision. <strong>We engineer the data product behind it.</strong></p>
            <div className="hero-value-chain" aria-label="Source, resolve, and ship the data contract">
              <span><small>01</small>Source the hard records</span><i aria-hidden="true" />
              <span><small>02</small>Resolve the identity</span><i aria-hidden="true" />
              <span><small>03</small>Ship your contract</span>
            </div>
          </div>
          <div className="hero-actions">
            <a className="button button-red button-large" href="#contact">Design the solution <ArrowIcon /></a>
            <a className="button button-ghost button-large" href={links.calendly}>Book a working session <span>↗</span></a>
          </div>
          <div className="hero-assurance">
            <span><CheckIcon /> Senior technical discovery</span>
            <span><CheckIcon /> Source-aware contracts</span>
            <span><CheckIcon /> Production ownership</span>
          </div>
        </div>
        <div className="hero-lab">
          <div className="hero-lab-heading"><span><i /> LIVE SOLUTION ARCHITECT</span><b>INTERACTIVE / 01</b></div>
          <SolutionLab />
        </div>
        <div className="hero-proof-rail">
          <div><strong>166M+</strong><span>INDEXED U.S. PARCELS</span></div>
          <div><strong>50</strong><span>STATE PROPERTY COVERAGE</span></div>
          <div><strong>LIVE</strong><span>SPORTS + MARKET SIGNALS</span></div>
          <div><strong>ONE</strong><span>ACCOUNTABLE DATA CONTRACT</span></div>
          <div className="hero-proof-note"><i /> DIRECT INFRASTRUCTURE · BUILT IN THE USA</div>
        </div>
      </section>

      <section className="studio-section" id="solutions" aria-labelledby="studio-title">
        <div className="studio-image">
          <Image
            src={integrationTeamImage}
            alt="A senior data product team collaborating on property and sports data systems"
            fill
            placeholder="blur"
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className="studio-image-shade" aria-hidden="true" />
          <div className="studio-caption">
            <span><i /> DELIVERY ROOM</span>
            <b>Source plan → data contract → production system</b>
          </div>
          <div className="studio-status"><i /> SENIOR TEAM ENGAGED</div>
        </div>
        <div className="studio-copy">
          <div className="statement-index"><span>PROPTECHUSA.AI</span><b>DATA SOLUTIONS / 001</b></div>
          <span className="section-kicker red"><i /> MORE THAN AN ENDPOINT</span>
          <h2 id="studio-title">Not another catalog. <em>Your data engineering partner.</em></h2>
          <p>One accountable team works backward from the customer experience you need to ship. We own the fragmented sources, hard identity problems, edge cases, QA, and delivery contract between the idea and the decision.</p>
          <div className="studio-proof-grid">
            <div><strong>DIRECT</strong><span>Infrastructure and engineering access</span></div>
            <div><strong>EXACT</strong><span>Customer-specific response contracts</span></div>
            <div><strong>VISIBLE</strong><span>Lineage, coverage, and validation</span></div>
            <div><strong>OWNED</strong><span>Launch support and versioned evolution</span></div>
          </div>
          <div className="studio-foot">
            <p>“Start with the JSON, workflow, or customer promise you wish existed. We will engineer backward from there.”</p>
            <a href="#architecture">See how we build it <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="verticals-section">
        <article className="vertical-card property-card" id="real-estate" aria-labelledby="real-estate-title">
          <div className="vertical-card-top">
            <div><ProductShield kind="propdata" /><span>01 / REAL ESTATE</span></div>
            <a href={links.propdata}>Explore PropData <span>↗</span></a>
          </div>
          <div className="vertical-visual property-visual" aria-hidden="true">
            <Image src={propertyImage} alt="" fill placeholder="blur" sizes="(max-width: 1050px) 50vw, 50vw" />
            <div className="visual-vignette" />
            <span className="parcel-outline parcel-outline-one" />
            <span className="parcel-outline parcel-outline-two" />
            <span className="parcel-outline parcel-outline-active" />
            <div className="photo-index"><span><i /> IDENTITY RESOLVED</span><b>98.4%</b></div>
            <div className="map-card"><small>CANONICAL PROPERTY</small><b>10548 KENTUCKY AVE S</b><span>Parcel · owner · value · risk · geometry</span></div>
          </div>
          <div className="vertical-card-copy">
            <span className="section-kicker"><i /> PROPERTY INTELLIGENCE</span>
            <h2 id="real-estate-title">From one property to the intelligence around it.</h2>
            <p>Build on a durable identity, then add the public record, economics, risk, and spatial layers your workflow actually uses.</p>
            <div className="capability-list">
              {propertyCapabilities.map(([title, body], index) => (
                <div key={title}><span>0{index + 1}</span><p><b>{title}</b><small>{body}</small></p></div>
              ))}
            </div>
          </div>
        </article>

        <article className="vertical-card sports-card" id="sports" aria-labelledby="sports-title">
          <div className="vertical-card-top">
            <div><ProductShield kind="sports" /><span>02 / SPORTS</span></div>
            <a href={links.propsports}>Explore PropSports <span>↗</span></a>
          </div>
          <div className="vertical-visual sports-visual" aria-hidden="true">
            <Image src={sportsImage} alt="" fill placeholder="blur" sizes="(max-width: 1050px) 50vw, 50vw" />
            <div className="visual-vignette" />
            <div className="sports-live-panel">
              <div className="score-header"><span><i /> LIVE / MLB</span><b>MIN <em>4</em></b><small>TOP 7</small><b>CLE <em>3</em></b></div>
              <div className="market-tape"><span>PLAYER TOTAL BASES <b>1.5</b></span><span>CONSENSUS <b>-112</b></span><span>SIGNAL <b>+8.4%</b></span></div>
            </div>
          </div>
          <div className="vertical-card-copy">
            <span className="section-kicker"><i /> SPORTS INTELLIGENCE</span>
            <h2 id="sports-title">From a live event to a product-ready signal.</h2>
            <p>Unify event, player, performance, market, and context data into a stable feed your application can trust at game speed.</p>
            <div className="capability-list">
              {sportsCapabilities.map(([title, body], index) => (
                <div key={title}><span>0{index + 1}</span><p><b>{title}</b><small>{body}</small></p></div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="architecture-section" id="architecture" aria-labelledby="architecture-title">
        <div className="section-heading section-heading-split light">
          <div>
            <span className="section-kicker"><i /> THE OPERATING MODEL</span>
            <h2 id="architecture-title">One pipeline. Every hard part owned.</h2>
          </div>
          <p>Your team gets one accountable contract. We handle the fragmented source systems, identity work, normalization, enrichment, QA, and delivery behind it.</p>
        </div>
        <div className="pipeline">
          <div className="pipeline-row">
            <article><span>01</span><b>SOURCE</b><small>Government records<br />Licensed feeds<br />Live event data<br />Customer systems</small></article>
            <i>→</i>
            <article><span>02</span><b>RESOLVE</b><small>Identity<br />Entity matching<br />Deduplication<br />Lineage</small></article>
            <i>→</i>
            <article className="pipeline-core"><span>03</span><b>ENGINEER</b><small>Normalize<br />Join + enrich<br />Business rules<br />Derived signals</small></article>
            <i>→</i>
            <article><span>04</span><b>VALIDATE</b><small>Coverage tests<br />Freshness checks<br />Schema QA<br />Observability</small></article>
            <i>→</i>
            <article><span>05</span><b>DELIVER</b><small>API<br />Webhook<br />Bulk + delta<br />Embedded UI</small></article>
          </div>
          <div className="pipeline-contract"><span><i /> YOUR CONTRACT</span><code>source → identity → intelligence → decision</code><b>VERSIONED · OBSERVABLE · PRODUCTION READY</b></div>
        </div>
        <div className="architecture-proof">
          <div><strong>No reseller dependency.</strong><span>Direct infrastructure and source-aware products.</span></div>
          <div><strong>No black box.</strong><span>Defined contracts, provenance, and validation.</span></div>
          <div><strong>No roadmap compromise.</strong><span>Delivery shaped around the product outcome.</span></div>
        </div>
      </section>

      <section className="delivery-section" id="delivery" aria-labelledby="delivery-title">
        <div className="section-heading section-heading-split">
          <div>
            <span className="section-kicker red"><i /> WHAT WE BUILD</span>
            <h2 id="delivery-title">Infrastructure where you need it. Invisible where you don&apos;t.</h2>
          </div>
          <p>Start with an endpoint, a feed, a licensed foundation, or a complete customer experience. Every engagement is designed to survive production.</p>
        </div>
        <div className="delivery-grid">
          {deliveryCards.map((card) => (
            <article key={card.number}>
              <div className="delivery-number"><span>{card.number}</span><i /></div>
              <small>{card.label}</small>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <div>{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="contract-banner" aria-label="Start from your desired response contract">
        <span>THE BRIEF CAN START THIS SIMPLE</span>
        <blockquote>“Here is the <em>JSON</em> we wish existed.”</blockquote>
        <a className="button button-white button-large" href="#contact">Send us the shape <ArrowIcon /></a>
      </section>

      <section className="partnership-section" aria-labelledby="partnership-title">
        <div className="partnership-heading">
          <span className="section-kicker red"><i /> THE WORKING RELATIONSHIP</span>
          <h2 id="partnership-title">Senior data people, in the room with your product.</h2>
        </div>
        <div className="partnership-body">
          <p>This is not a ticket queue or a handoff to a generic implementation layer. Product, data engineering, identity resolution, and delivery design stay connected from first brief through production.</p>
          <a className="button button-outline button-large" href={links.calendly}>Meet the integration team <ArrowIcon /></a>
        </div>
        <div className="partnership-cards">
          <article><span>01</span><b>WORKING DISCOVERY</b><p>Map the decision, consumer, fields, latency, failure modes, and acceptance test.</p></article>
          <article><span>02</span><b>VISIBLE CONTRACT</b><p>Review sample payloads, source lineage, coverage realities, and edge-case behavior before build.</p></article>
          <article><span>03</span><b>PRODUCTION OWNERSHIP</b><p>Launch with observability, version discipline, change communication, and an accountable path forward.</p></article>
        </div>
      </section>

      <section className="outcomes-section" aria-labelledby="outcomes-title">
        <div className="section-heading centered">
          <span className="section-kicker"><i /> BUILT AROUND THE OUTCOME</span>
          <h2 id="outcomes-title">Data your product can act on.</h2>
          <p>Not a raw feed dropped at your door. A reliable input to the next customer, operational, or investment decision.</p>
        </div>
        <div className="outcome-grid">
          <article><span>ACQUISITION</span><h3>Property in. Decision out.</h3><p>Resolve identity, attach value and risk, apply customer rules, and return the next action.</p><div className="mini-flow"><b>ADDRESS</b><i>→</i><b>PARCEL</b><i>→</i><b>SCORE</b></div></article>
          <article><span>AI + AUTOMATION</span><h3>Ground agents in facts.</h3><p>Give AI systems stable entities, trusted context, defined tools, and response contracts they can reason over.</p><div className="mini-flow"><b>ENTITY</b><i>→</i><b>CONTEXT</b><i>→</i><b>ACTION</b></div></article>
          <article><span>SPORTS PRODUCTS</span><h3>Events into intelligence.</h3><p>Combine live state, player performance, market context, and custom logic without stitching vendors in the client.</p><div className="mini-flow"><b>EVENT</b><i>→</i><b>MARKET</b><i>→</i><b>SIGNAL</b></div></article>
        </div>
      </section>

      <section className="process-section" id="process" aria-labelledby="process-title">
        <div className="process-copy">
          <span className="section-kicker red"><i /> HOW WE ENGAGE</span>
          <h2 id="process-title">From messy requirement to dependable product.</h2>
          <p>We keep the path concrete: the decision, the contract, the acceptance test, then the infrastructure.</p>
          <a href={links.calendly} className="button button-outline button-large">Book a solution design call <ArrowIcon /></a>
        </div>
        <div className="process-list">
          {process.map(([number, title, body]) => (
            <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div><i /></article>
          ))}
        </div>
      </section>

      <section className="network-section" id="network" aria-labelledby="network-title">
        <div className="network-intro">
          <span className="section-kicker"><i /> THE SHIELD NETWORK</span>
          <h2 id="network-title">Custom work backed by products already in motion.</h2>
          <p>Build on proven property and sports infrastructure, then add the customer-specific intelligence, coverage, delivery, and interface your roadmap requires.</p>
        </div>
        <div className="network-grid">
          <a href={links.propdata} className="network-card"><ProductShield kind="propdata" /><span><small>PROPERTY INFRASTRUCTURE</small><b>PropData</b><p>166M+ parcel foundation, enrichment, APIs, and developer workspace.</p></span><i>↗</i></a>
          <a href={links.propsports} className="network-card"><ProductShield kind="sports" /><span><small>SPORTS INFRASTRUCTURE</small><b>PropSports</b><p>Live sports, player, odds, and performance data built for products.</p></span><i>↗</i></a>
          <a href={links.propsecure} className="network-card"><ProductShield kind="secure" /><span><small>RISK INTELLIGENCE</small><b>PropSecure</b><p>Property monitoring, surveillance, and actionable change signals.</p></span><i>↗</i></a>
          <a href={links.company} className="network-card"><ProductShield kind="company" /><span><small>INDEPENDENT STUDIO</small><b>PropTechUSA.ai</b><p>The company building direct-access real estate and sports infrastructure.</p></span><i>↗</i></a>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <span className="section-kicker"><i /> START THE DATA BRIEF</span>
          <h2 id="contact-title">Tell us the decision. We&apos;ll design the data behind it.</h2>
          <p>Send an email to start asynchronously, or book an integration call when you&apos;re ready to map sources, scope, and delivery live.</p>
          <div className="contact-paths">
            <a href="mailto:sales@proptechusa.ai?subject=Custom%20data%20solution"><span>01</span><div><small>START WITH EMAIL</small><b>sales@proptechusa.ai</b></div><i>↗</i></a>
            <a href={links.calendly}><span>02</span><div><small>MAP THE INTEGRATION</small><b>Book a solution design call</b></div><i>↗</i></a>
          </div>
          <div className="contact-proof"><span><CheckIcon /> Direct access</span><span><CheckIcon /> Technical discovery</span><span><CheckIcon /> Clear next step</span></div>
        </div>
        <IntakeForm />
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div className="faq-heading">
          <span className="section-kicker red"><i /> FREQUENTLY ASKED</span>
          <h2 id="faq-title">The questions before the first call.</h2>
          <p>Have a requirement that does not fit the catalog? That is exactly what this page is for.</p>
        </div>
        <div className="faq-list">
          <details open><summary>What counts as a custom data solution?<span>+</span></summary><p>A purpose-built API, joined dataset, licensed feed, embedded experience, customer-specific coverage, derived score, AI tool, or workflow that requires more than an off-the-shelf endpoint.</p></details>
          <details><summary>Can you work from a response schema or sample JSON?<span>+</span></summary><p>Yes. A target response is often the fastest starting point. We can work backward into sources, identity, freshness, validation, and delivery requirements.</p></details>
          <details><summary>Do you support both real estate and sports projects?<span>+</span></summary><p>Yes. PropData anchors property intelligence; PropSports anchors sports, odds, and performance intelligence. Custom contracts can extend either foundation.</p></details>
          <details><summary>Can the data be delivered inside our product?<span>+</span></summary><p>Yes. Delivery can be a versioned API, webhook, bulk or delta feed, MCP tool, white-label component, internal dashboard, or a combination.</p></details>
          <details><summary>How does a project begin?<span>+</span></summary><p>Start with your email and the decision the data needs to support. We then define the response contract, source plan, acceptance criteria, delivery surface, and implementation path.</p></details>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div><ProductShield kind="data" /></div>
        <span>PROPTECHUSA.AI CUSTOM DATA SOLUTIONS</span>
        <h2 id="final-cta-title">The data product your roadmap has been waiting for.</h2>
        <p>Real estate or sports. One exact contract. Built for the decision—and the production system behind it.</p>
        <div><a className="button button-red button-large" href="#contact">Start the brief <ArrowIcon /></a><a className="button button-outline button-large" href={links.calendly}>Book an integration <span>↗</span></a></div>
      </section>

      <Footer />
    </main>
  );
}
