"use client";

import React, { useState } from "react";
import { defaultTickers, BasicTicker } from "@/data/tickers";
import TickerList from "./TickerList";
import TrackedTickersSidebar from "./TrackedTickersSidebar";
import SearchBar from "@/components/SearchBar/SearchBar";
import NewsPanel from "@/components/News/NewsPanel";

export default function TickerSelectorPanel() {
  const [search, setSearch] = useState("");
  const [tracked, setTracked] = useState<BasicTicker[]>([]);
  const [activeTicker, setActiveTicker] = useState<BasicTicker | null>(null);

  const filtered = search.trim()
    ? defaultTickers.filter(t =>
        t.symbol.toLowerCase().includes(search.toLowerCase()) ||
        t.name.toLowerCase().includes(search.toLowerCase())
      )
    : defaultTickers;

  const toggleTrack = (ticker: BasicTicker) => {
    const exists = tracked.some(t => t.symbol === ticker.symbol);
    if (exists) {
      setTracked(tracked.filter(t => t.symbol !== ticker.symbol));
    } else {
      setTracked([...tracked, ticker]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        background: "white",
        overflow: "hidden",
      }}
    >
      {/* 🟦 LEFT: SIDEBAR (10%) */}
      <TrackedTickersSidebar
        tracked={tracked}
        onRemove={(symbol) =>
          setTracked(tracked.filter((t) => t.symbol === symbol ? false : true))
        }
      />

      {/* 🟩 CENTER: Tickers Panel (30%) */}
      <div
        style={{
          width: "30%",
          padding: "20px",
          borderRight: "1px solid #e0e0e0",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflowY: "auto",
        }}
      >
        <SearchBar value={search} onChange={setSearch} />

        <TickerList
          tickers={filtered}
          selected={tracked.map((t) => t.symbol)}
          onToggle={toggleTrack}
          onSelectTicker={setActiveTicker}
        />
      </div>

      {/* 🟥 RIGHT: News Panel (60%) */}
      <div style={{ width: "60%", padding: "20px", overflowY: "auto" }}>
        <NewsPanel activeTicker={activeTicker} />
      </div>
    </div>
  );
}





