"use client";

import React, { useState } from "react";
import {
  UserSubscriptionState,
  SubscriptionPayload,
  PlanId,
} from "@/types/subscription";
import { getPlanById } from "@/utils/plans";
import { PlanSelector } from "./PlanSelector";
import { TickerManager } from "./TickerManager";
import { EmailSettings } from "./EmailSettings";

export const SubscriptionSettingsPage = ({
  initialState,
  onSave,
}: {
  initialState: UserSubscriptionState;
  onSave: (p: SubscriptionPayload) => void | Promise<void>;
}) => {
  const [state, setState] = useState(initialState);
  const [saving, setSaving] = useState(false);

  const plan = getPlanById(state.planId);

  const updatePlan = (p: PlanId) => {
    const newPlan = getPlanById(p);
    setState((prev) => ({
      ...prev,
      planId: p,
      tickers: prev.tickers.slice(0, newPlan.maxTickers),
    }));
  };

  const save = async () => {
    setSaving(true);
    const payload: SubscriptionPayload = {
      name: state.name,
      email: state.email,
      tickers: state.tickers,
      plan: getPlanById(state.planId).label,
      period_start: state.periodStart,
      period_end: state.periodEnd,
      email_subject: state.emailSubject,
    };
    await onSave(payload);
    setSaving(false);
  };

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "800px",
        padding: "40px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "18px",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          textAlign: "center",
          marginBottom: "10px",
          fontWeight: 700,
        }}
      >
        Subscription Settings
      </h1>

      <p
        style={{
          textAlign: "center",
          opacity: 0.8,
          marginBottom: "40px",
        }}
      >
        Manage your plan, email preferences, and tracked tickers.
      </p>

      {/* USER SECTION */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Account</h2>
        <div style={{ opacity: 0.8 }}>Name: {state.name}</div>
        <div style={{ opacity: 0.8 }}>Email: {state.email}</div>
      </div>

      {/* PLAN SELECTOR */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>Choose Plan</h2>
        <PlanSelector currentPlanId={state.planId} onChangePlan={updatePlan} />
      </div>

      {/* TICKER MANAGER */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>Tracked Tickers</h2>
        <div style={{ opacity: 0.7, marginBottom: "6px" }}>
          {state.tickers.length}/{plan.maxTickers} used
        </div>
        <TickerManager
          tickers={state.tickers}
          maxTickers={plan.maxTickers}
          onChange={(tickers) => setState((prev) => ({ ...prev, tickers }))}
        />
      </div>

      {/* EMAIL SETTINGS */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>Email Settings</h2>
        <EmailSettings
          emailSubject={state.emailSubject ?? ""}
          onChangeSubject={(emailSubject) =>
            setState((prev) => ({ ...prev, emailSubject }))
          }
        />
      </div>

      {/* SAVE BUTTON */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={save}
          disabled={saving}
          style={{
            padding: "14px 32px",
            fontSize: "16px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.1)",
            color: "white",
            backdropFilter: "blur(8px)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

