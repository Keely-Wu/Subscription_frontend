import { SubscriptionPayload, SubscriptionResponse } from "@/types/subscription";

export async function saveSubscription(
  payload: SubscriptionPayload
): Promise<SubscriptionResponse> {
  const response = await fetch("/api/subscription/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to save subscription (status ${response.status})`);
  }

  return (await response.json()) as SubscriptionResponse;
}


