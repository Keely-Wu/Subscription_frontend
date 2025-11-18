"use client";

import { useState } from "react";
import { defaultTickers, BasicTicker } from "@/data/tickers";
import SearchBar from "@/components/SearchBar/SearchBar";
import SelectedTickersSidebar from "@/components/tickers/TrackedTickersSidebar";
import TickerList from "@/components/tickers/TickerList";
import TopHeader from "@/components/Layout/TopHeader";

export default function ChooseTickersPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  // ---------- Filtering ----------
  const filteredTickers = query
    ? defaultTickers.filter(
        (t) =>
          t.symbol.toLowerCase().includes(query.toLowerCase()) ||
          t.name.toLowerCase().includes(query.toLowerCase())
      )
    : defaultTickers;

  const selectedTickers: BasicTicker[] = defaultTickers.filter((t) =>
    selected.includes(t.symbol)
  );

  // ---------- Selection toggle ----------
  const toggleSelect = (symbol: string) => {
    setSelected((cur) =>
      cur.includes(symbol)
        ? cur.filter((s) => s !== symbol)
        : [...cur, symbol]
    );
  };

  // ---------- Confirm ----------
  const handleConfirm = () => {
    if (selected.length === 0) {
      alert("Please select at least one ticker");
      return;
    }
    localStorage.setItem("selectedTickers", JSON.stringify(selected));
    window.location.href = "/confirm-subscription";
  };

  return (
    <>
      {/* FIXED TOP HEADER */}
      <TopHeader onConfirm={handleConfirm} />

      {/* MAIN DASHBOARD LAYOUT */}
      <main
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "#ffffff",
          paddingTop: "56px", // offset for fixed header
        }}
      >
        {/* ---------------- SIDEBAR 10% ---------------- */}
        <div style={{ width: "10%", minWidth: "130px" }}>
          <SelectedTickersSidebar
            tracked={selectedTickers}
            onRemove={toggleSelect}
          />
        </div>

        {/* ---------------- TICKER LIST 30% ---------------- */}
        <div
          style={{
            width: "30%",
            padding: "20px",
            paddingLeft: "40px",
            borderRight: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Search bar fixed at top of panel */}
          <div style={{ flexShrink: 0 }}>
            <SearchBar value={query} onChange={setQuery} />
          </div>

          {/* Scrollable ticker list */}
          <div
            style={{
              flexGrow: 1,
              overflowY: "auto",
              marginTop: "12px",
              paddingRight: "6px",
            }}
          >
            <TickerList
              tickers={filteredTickers}
              selected={selected}
              onToggle={(ticker) => toggleSelect(ticker.symbol)}
              onSelectTicker={() => {}}
            />
          </div>
        </div>

        {/* ---------------- NEWS PANEL 60% ---------------- */}
        <div style={{ width: "60%", padding: "30px" }}>
          <h2>News & AI Analysis</h2>
          <p>(Coming soon…)</p>
        </div>
      </main>
    </>
  );
}












