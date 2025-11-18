"use client";

import { useRouter } from "next/navigation";
import GridDistortion from "@/components/GridDistortion/GridDistortion";
import LandingPlanSelector from "@/components/subscription/LandingPlanSelector";
import { PlanId } from "@/types/subscription";

export default function HomePage() {
  const router = useRouter();

  const handlePlanSelect = (plan: PlanId) => {
    localStorage.setItem("selectedPlan", plan);
    router.push("/choose-tickers");
  };

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        background: "#000",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* BACKGROUND - Mouse interactive */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "auto", // background needs mouse events
        }}
      >
        <GridDistortion
          imageSrc="/images/landing_bg.jpg"
          grid={22}
          mouse={0.25}
          strength={0.2}
          relaxation={0.92}
        />
      </div>

      {/* FOREGROUND - allow pass-through except for interactive elements */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          paddingTop: "110px",
          color: "white",
          pointerEvents: "none", // 🟢 allow background to receive hover events
        }}
      >
        {/* Titles */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
            marginBottom: "10px",
            pointerEvents: "none",
          }}
        >
          Q&Q.AI Dashboard
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.85,
            marginBottom: "40px",
            pointerEvents: "none",
          }}
        >
          Quantitative & Qualitative AI Investment Analysis System
        </p>

        <h2
          style={{
            marginTop: "20px",
            fontSize: "26px",
            fontWeight: 700,
            pointerEvents: "none",
          }}
        >
          Choose Your Plan
        </h2>

        {/* ENABLE pointer events for plan cards only */}
        <div style={{ pointerEvents: "auto" }}>
          <LandingPlanSelector onSelectPlan={handlePlanSelect} />
        </div>
      </div>
    </main>
  );
}
