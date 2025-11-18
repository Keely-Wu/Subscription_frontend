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

  // filtering
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

  const toggleSelect = (symbol: string) => {
    setSelected((cur) =>
      cur.includes(symbol)
        ? cur.filter((s) => s !== symbol)
        : [...cur, symbol]
    );
  };

  // confirm handler
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
          background: "white",
          paddingTop: "56px", // <<< IMPORTANT
        }}
      >
        {/* SIDEBAR 10% */}
        <div style={{ width: "10%", minWidth: "130px" }}>
          <SelectedTickersSidebar tracked={selectedTickers} onRemove={toggleSelect} />
        </div>

        {/* TICKER LIST 30% */}
{/* TICKER LIST 30% */}
<div
  style={{
    width: "30%",
    padding: "20px",
    paddingLeft: "35px", 
    borderRight: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  }}
>


          <SearchBar value={query} onChange={setQuery} />

          <TickerList
            tickers={filteredTickers}
            selected={selected}
            onToggle={(ticker) => toggleSelect(ticker.symbol)}
            onSelectTicker={() => {}}
          />
        </div>

        {/* NEWS 60% */}
        <div style={{ width: "60%", padding: "30px" }}>
          <h2>News & AI Analysis</h2>
          <p>(Coming soon…)</p>
        </div>
      </main>
    </>
  );
}











