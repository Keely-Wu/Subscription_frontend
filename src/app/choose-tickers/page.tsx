"use client";

import { useState } from "react";
import { defaultTickers, BasicTicker } from "@/data/tickers";
import SearchBar from "@/components/SearchBar/SearchBar";
import SelectedTickersSidebar from "@/components/tickers/TrackedTickersSidebar";
import TickerList from "@/components/tickers/TickerList";
import TopHeader from "@/components/Layout/TopHeader";
import NewsPanel from "@/components/News/NewsPanel";

export default function ChooseTickersPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

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
    setSelected((cur) => {
      if (cur.includes(symbol)) {
        return cur.filter((s) => s !== symbol);
      }
      return [...cur, symbol]; // newest at end
    });
  };

  const mostRecent = selectedTickers.length
    ? selectedTickers[selectedTickers.length - 1]
    : null;

  const handleConfirm = () => {
    if (selected.length === 0) {
      alert("Select at least one ticker");
      return;
    }
    localStorage.setItem("selectedTickers", JSON.stringify(selected));
    window.location.href = "/confirm-subscription";
  };

  return (
    <>
      <TopHeader onConfirm={handleConfirm} />

      <main
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "white",
          paddingTop: "56px",
        }}
      >
        {/* SIDEBAR */}
        <div style={{ width: "10%", minWidth: "130px" }}>
          <SelectedTickersSidebar
            tracked={selectedTickers}
            onRemove={toggleSelect}
          />
        </div>

        {/* TICKER LIST */}
        <div
          style={{
            width: "30%",
            padding: "20px",
            paddingLeft: "35px",
            borderRight: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            overflowY: "auto",
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

        {/* NEWS PANEL */}
        <div style={{ width: "60%", padding: "30px", overflowY: "auto" }}>
          <NewsPanel tickers={selectedTickers} mostRecent={mostRecent} />
        </div>
      </main>
    </>
  );
}














