"use client";

import Aurora from "@/components/Aurora/Aurora";

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0a0a0a",           // Dark background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",            // Center vertically
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* 🔥 Aurora Background */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* 🔵 Centered Dashboard Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",         // Center text horizontally
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: 700, marginBottom: "20px" }}>
          Q&Q.AI  Dashboard
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.8, marginBottom: "40px" }}>
          Quantitative & Qualitative AI Investment Analysis System.
        </p>

        <a
          href="/subscription-settings"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
            color: "white",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(8px)",
            transition: "all 0.2s",
            fontWeight: 500,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget.style.background = "rgba(255,255,255,0.2)");
            (e.currentTarget.style.transform = "scale(1.03)");
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.style.background = "rgba(255,255,255,0.1)");
            (e.currentTarget.style.transform = "scale(1)");
          }}
        >
          Manage Subscription →
        </a>
      </div>
    </main>
  );
}



