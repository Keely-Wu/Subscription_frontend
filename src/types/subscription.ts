export type PlanId = "trial" | "basic" | "pro";

export interface SubscriptionPayload {
  name: string;
  email: string;
  tickers: string[];
  plan: "Trial" | "Basic Monthly" | "Pro Monthly";
  period_start: string;
  period_end: string;
  email_subject?: string;
}

export interface UserSubscriptionState {
  name: string;
  email: string;
  tickers: string[];
  planId: PlanId;
  periodStart: string;
  periodEnd: string;
  emailSubject?: string;
}

export interface SubscriptionResponse {
  success: boolean;
  subscription: SubscriptionPayload;
}

