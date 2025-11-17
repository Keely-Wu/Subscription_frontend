"use client";

import React, { useState } from "react";

export function TickerManager({
  tickers,
  maxTickers,
  onChange,
}: {
  tickers: string[];
  maxTickers: number;
  onChange: (tickers: string[]) => void;
}) {
  const [input, setInput] = useState("");

  const add = () => {
    const v = input.trim().toUpperCase();
    if (!v || tickers.includes(v) || tickers.length >= maxTickers) return;
    onChange([...tickers, v]);
    setInput("");
  };

  return (
    <div>
      {/* Input */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Ticker (AAPL)"
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.05)",
            color: "white",
          }}
        />
        <button
          onClick={add}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* Ticker Pills */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {tickers.map((t) => (
          <div
            key={t}
            style={{
              padding: "4px 10px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>{t}</span>
            <button
              onClick={() => onChange(tickers.filter((x) => x !== t))}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

