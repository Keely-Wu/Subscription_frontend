"use client";

import Aurora from "@/components/Aurora/Aurora";
import { SubscriptionSettingsPage } from "@/components/subscription/SubscriptionSettingsPage";
import { SubscriptionPayload, UserSubscriptionState } from "@/types/subscription";
import { saveSubscription } from "@/utils/api";
export default function SubscriptionSettingsRoute() {
  const mockInitial: UserSubscriptionState = {
    name: "John Doe",
    email: "john@example.com",
    tickers: ["AAPL", "NVDA", "MSFT"],
    planId: "pro",
    periodStart: "2025-11-12T00:00:00",
    periodEnd: "2025-11-26T00:00:00",
    emailSubject: "Custom Subject",
  };

  const handleSave = async (payload: SubscriptionPayload) => {
  try {
    const result = await saveSubscription(payload);
    console.log("Subscription updated:", result);
    alert("Subscription saved!");
  } catch (err) {
    console.error(err);
    alert("Failed to save subscription.");
  }
};

  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        background: "#0a0a0a",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        amplitude={1.0}
        blend={0.5}
        speed={0.5}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <SubscriptionSettingsPage initialState={mockInitial} onSave={handleSave} />
      </div>
    </main>
  );
}

