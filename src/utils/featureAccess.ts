import { PlanId } from "@/types/subscription";

export type Feature =
  | "news_ticker_ui"
  | "factor_library"
  | "valuation_impact_pack";

export const PLAN_ORDER: PlanId[] = ["trial", "basic", "pro"];

export const FEATURE_MIN_PLAN: Record<Feature, PlanId> = {
  news_ticker_ui: "basic",
  factor_library: "basic",
  valuation_impact_pack: "pro"
};

export function hasFeature(planId: PlanId, feature: Feature): boolean {
  return (
    PLAN_ORDER.indexOf(planId) >=
    PLAN_ORDER.indexOf(FEATURE_MIN_PLAN[feature])
  );
}
