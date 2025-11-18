"use client";

import React from "react";
import { PlanId } from "@/types/subscription";
import { getPlanById } from "@/utils/plans";

export default function LandingPlanSelector({
  onSelectPlan,
}: {
  onSelectPlan: (p: PlanId) => void;
}) {
  const plans: PlanId[] = ["trial", "basic", "pro"];

  const detailedInfo: Record<PlanId, string[]> = {
    trial: [
      "Track 1 stock ticker for 7 days",
      "Daily AI Stock Narrative Analysis",
      "Daily Research-Backed Insights",
    ],
    basic: [
      "Track up to 20 stock tickers",
      "Daily AI Algorithmic Reasoning",
      "Event Importance Ranking (Email)",
      "Stock Narrative Analysis (Email)",
      "Valuation Commentary",
      "Research Summaries",
      "News Ticker Subscription Interface",
      "Factor Library Access",
    ],
    pro: [
      "Track up to 50 stock tickers",
      "Advanced AI Algorithmic Reasoning",
      "Event Importance Ranking (Email)",
      "Stock Narrative Analysis (Email)",
      "Full Valuation Metrics",
      "Research Summaries",
      "Factor Library Access",
      "Valuation Impact Pack",
    ],
  };

  return (
    <div
      style={{
        marginTop: "20px",   // ⬆ moved higher
        display: "flex",
        justifyContent: "center",
        gap: "18px",
        flexWrap: "wrap",
      }}
    >
      {plans.map((p) => {
        const plan = getPlanById(p);
        const details = detailedInfo[p];

        return (
          <div
            key={p}
            style={{
              width: "260px",
              height: "330px", // 🔥 fits screen
              padding: "16px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "0.25s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.background = "rgba(255,255,255,0.20)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            }}
          >
            {/* TOP SECTION */}
            <div>
              <h3
                style={{
                  fontSize: "18px",  // ⬇ slightly smaller
                  fontWeight: 700,
                  marginBottom: "6px",
                  textAlign: "center",
                }}
              >
                {plan.label}
              </h3>

              <div
                style={{
                  fontSize: "16px", // ⬇ smaller
                  fontWeight: 600,
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                {plan.price}
              </div>

              {/* SCROLLABLE FEATURES */}
              <div
                style={{
                  maxHeight: "170px", // 🔥 reduced so box fits
                  overflowY: "auto",
                  paddingRight: "4px",
                }}
              >
                <ul
                  style={{
                    textAlign: "left",
                    fontSize: "12.5px",
                    opacity: 0.9,
                    lineHeight: 1.35,
                    paddingLeft: "16px",
                  }}
                >
                  {details.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: "6px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BOTTOM BUTTON */}
            <div
              style={{
                padding: "8px 12px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.20)",
                textAlign: "center",
                fontSize: "13px",
                fontWeight: 600,
                transition: "0.2s",
              }}
              onClick={() => onSelectPlan(p)}
            >
              Select Plan →
            </div>
          </div>
        );
      })}
    </div>
  );
}




