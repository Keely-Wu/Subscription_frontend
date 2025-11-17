import { PlanId } from "@/types/subscription";

export interface PlanDefinition {
  id: PlanId;
  label: "Trial" | "Basic Monthly" | "Pro Monthly";
  description: string;
  price: number;
  maxTickers: number;
  features: string[];
}

export const PLANS: PlanDefinition[] = [
  {
    id: "trial",
    label: "Trial",
    description: "Free 7-day trial. Track 1 ticker.",
    price: 0,
    maxTickers: 1,
    features: ["AI stock narrative", "Research papers", "1 tracked ticker"]
  },
  {
    id: "basic",
    label: "Basic Monthly",
    description: "Up to 20 stocks with AI reasoning.",
    price: 9.99,
    maxTickers: 20,
    features: [
      "20 stocks",
      "AI algorithmic reasoning",
      "Event importance ranking",
      "Narrative analysis",
      "Valuation",
      "Research papers",
      "News ticker UI",
      "Factor library"
    ]
  },
  {
    id: "pro",
    label: "Pro Monthly",
    description: "Up to 50 stocks + Valuation pack.",
    price: 19.99,
    maxTickers: 50,
    features: [
      "50 stocks",
      "All Basic features",
      "Valuation Impact Pack"
    ]
  }
];

export function getPlanById(id: PlanId): PlanDefinition {
  const p = PLANS.find(p => p.id === id);
  if (!p) throw new Error("Unknown plan ID: " + id);
  return p;
}
