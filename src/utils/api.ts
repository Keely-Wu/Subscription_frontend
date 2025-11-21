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

export interface ImpactRequest {
  ticker: string;
  news_list: Array<{
    news: string;
    date: string;
    link: string;
  }>;
}

export interface ImpactChain {
  news: string;
  date: string;
  impact: number;
  reasoning: string;
  factors: string[];
}

export interface FactorData {
  factor: string;
  impact: number;
  abs_impact: number;
  timeRanges: Array<{
    start: string;
    end: string;
    value: number;
  }> | null;
}

export interface AnalysisResponse {
  impact_chains: ImpactChain[];
  macro_data: FactorData[];
  micro_data: FactorData[];
  ticker: string;
}

export async function analyzeImpact(
  payload: ImpactRequest
): Promise<AnalysisResponse> {
  const response = await fetch("/api/analyze-impact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to analyze impact (status ${response.status})`);
  }

  return (await response.json()) as AnalysisResponse;
}


