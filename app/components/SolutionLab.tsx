"use client";

import { useMemo, useState } from "react";
import { CheckIcon } from "./Brand";

type Vertical = "property" | "sports";
type Delivery = "REST API" | "Webhooks" | "Bulk feed" | "Embedded UI";

const verticals = {
  property: {
    eyebrow: "PROPERTY INTELLIGENCE",
    title: "Property identity to decision-ready intelligence.",
    input: "10548 Kentucky Ave S, Bloomington, MN 55438",
    endpoint: "/v1/custom/property-decision",
    layers: [
      "Canonical identity",
      "Ownership + tax",
      "Valuation",
      "Comps + rent",
      "Risk + hazard",
      "Parcel geometry",
    ],
    response: {
      match: "canonical",
      parcel_id: "1008350041",
      confidence: 0.98,
      valuation: 512400,
      decision: "review_ready",
    },
  },
  sports: {
    eyebrow: "SPORTS INTELLIGENCE",
    title: "Live events to a signal your product can use.",
    input: "MLB · MIN @ CLE · player market context",
    endpoint: "/v1/custom/player-signal",
    layers: [
      "Schedules + scores",
      "Player data",
      "Odds + props",
      "Statcast context",
      "Weather + venue",
      "Derived signals",
    ],
    response: {
      event_status: "scheduled",
      market: "player_total_bases",
      consensus_line: 1.5,
      signal_confidence: 0.87,
      decision: "edge_detected",
    },
  },
} as const;

const deliveries: Delivery[] = ["REST API", "Webhooks", "Bulk feed", "Embedded UI"];

export default function SolutionLab() {
  const [vertical, setVertical] = useState<Vertical>("property");
  const [delivery, setDelivery] = useState<Delivery>("REST API");
  const [selectedLayers, setSelectedLayers] = useState<string[]>([
    "Canonical identity",
    "Ownership + tax",
    "Valuation",
    "Risk + hazard",
  ]);
  const [view, setView] = useState<"contract" | "request">("contract");

  const active = verticals[vertical];

  function switchVertical(next: Vertical) {
    setVertical(next);
    setSelectedLayers(next === "property"
      ? ["Canonical identity", "Ownership + tax", "Valuation", "Risk + hazard"]
      : ["Schedules + scores", "Player data", "Odds + props", "Derived signals"]);
  }

  function toggleLayer(layer: string) {
    setSelectedLayers((current) =>
      current.includes(layer)
        ? current.length === 1 ? current : current.filter((item) => item !== layer)
        : [...current, layer],
    );
  }

  const payload = useMemo(() => {
    const base = active.response;
    return {
      data: base,
      included: selectedLayers.map((layer) =>
        layer.toLowerCase().replaceAll(" + ", "_").replaceAll(" ", "_")
      ),
      delivery: delivery.toLowerCase().replaceAll(" ", "_"),
      meta: {
        contract: vertical === "property" ? "pds_property_decision_v1" : "pds_sports_signal_v1",
        freshness: vertical === "property" ? "source-aware" : "live",
      },
    };
  }, [active.response, delivery, selectedLayers, vertical]);

  const request = `curl --request POST \\\n+  https://api.proptechusa.ai${active.endpoint} \\\n+  --header 'Authorization: Bearer $API_KEY' \\\n+  --header 'Content-Type: application/json' \\\n+  --data '${JSON.stringify({ input: active.input, include: selectedLayers }, null, 2)}'`;

  return (
    <div className="solution-console" aria-label="Interactive custom data solution architect">
      <div className="console-topbar">
        <div>
          <span className="window-dot red-dot" />
          <span className="window-dot amber-dot" />
          <span className="window-dot green-dot" />
          <b>SOLUTION ARCHITECT</b>
        </div>
        <span><i /> CONTRACT READY</span>
      </div>

      <div className="console-tabs" role="tablist" aria-label="Choose a data vertical">
        <button
          className={vertical === "property" ? "active" : ""}
          onClick={() => switchVertical("property")}
          type="button"
          role="tab"
          aria-selected={vertical === "property"}
        >
          <span>01</span> Real estate
        </button>
        <button
          className={vertical === "sports" ? "active" : ""}
          onClick={() => switchVertical("sports")}
          type="button"
          role="tab"
          aria-selected={vertical === "sports"}
        >
          <span>02</span> Sports
        </button>
      </div>

      <div className="console-grid">
        <div className="console-config">
          <div className="config-heading">
            <small>{active.eyebrow}</small>
            <strong>{active.title}</strong>
          </div>

          <label className="console-label">SOURCE INPUT</label>
          <div className="source-input">
            <span>{vertical === "property" ? "⌖" : "◉"}</span>
            <b>{active.input}</b>
            <em>VERIFIED</em>
          </div>

          <div className="config-row-label">
            <label className="console-label">INTELLIGENCE LAYERS</label>
            <small>{selectedLayers.length} SELECTED</small>
          </div>
          <div className="layer-grid">
            {active.layers.map((layer) => {
              const selected = selectedLayers.includes(layer);
              return (
                <button
                  type="button"
                  className={selected ? "selected" : ""}
                  key={layer}
                  onClick={() => toggleLayer(layer)}
                  aria-pressed={selected}
                >
                  <span>{selected && <CheckIcon />}</span>
                  {layer}
                </button>
              );
            })}
          </div>

          <div className="config-row-label delivery-label">
            <label className="console-label">DELIVERY</label>
            <small>YOUR CONTRACT</small>
          </div>
          <div className="delivery-switch">
            {deliveries.map((item) => (
              <button
                type="button"
                key={item}
                className={delivery === item ? "active" : ""}
                onClick={() => setDelivery(item)}
              >{item}</button>
            ))}
          </div>
        </div>

        <div className="console-response">
          <div className="response-heading">
            <div>
              <span className="method-badge">POST</span>
              <code>{active.endpoint}</code>
            </div>
            <div className="view-switch">
              <button className={view === "contract" ? "active" : ""} onClick={() => setView("contract")} type="button">RESPONSE</button>
              <button className={view === "request" ? "active" : ""} onClick={() => setView("request")} type="button">cURL</button>
            </div>
          </div>
          <pre aria-live="polite">
            <code>{view === "contract" ? JSON.stringify(payload, null, 2) : request}</code>
          </pre>
          <div className="response-footer">
            <span><i /> VALIDATED CONTRACT</span>
            <span>{selectedLayers.length} SOURCES · {delivery.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
