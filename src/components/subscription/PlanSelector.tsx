"use client";

import { PLANS } from "@/utils/plans";
import { PlanId } from "@/types/subscription";

export function PlanSelector({
  currentPlanId,
  onChangePlan,
}: {
  currentPlanId: PlanId;
  onChangePlan: (p: PlanId) => void;
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "20px",
        flexWrap: "nowrap",          // 🔥 force one row
        overflowX: "auto",           // 🔥 allow horizontal scroll on very small screens
        paddingBottom: "10px",
      }}
    >
      {PLANS.map((plan) => {
        const active = plan.id === currentPlanId;

        return (
          <div
            key={plan.id}
            onClick={() => onChangePlan(plan.id)}
            style={{
              cursor: "pointer",
              flex: "1 1 0",                 // 🔥 allow all three to share the row evenly
              minWidth: "200px",
              maxWidth: "280px",

              padding: "20px",
              borderRadius: "14px",
              border: active
                ? "1px solid rgba(255,255,255,0.6)"
                : "1px solid rgba(255,255,255,0.2)",
              background: active
                ? "rgba(255,255,255,0.15)"
                : "rgba(255,255,255,0.05)",

              backdropFilter: "blur(10px)",
              transition: "all 0.25s ease",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: 600, marginBottom: "6px" }}>
              {plan.label}
            </div>
            <div style={{ opacity: 0.9, marginBottom: "12px" }}>
              ${plan.price}/month
            </div>
            <div style={{ fontSize: "14px", opacity: 0.7, lineHeight: 1.4 }}>
              {plan.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}

