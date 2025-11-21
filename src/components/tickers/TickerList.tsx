import React from "react";
import { BasicTicker } from "@/data/tickers";
import TickerCard from "./TickerCard";

export default function TickerList({
  tickers,
  selected,
  onToggle,
  onSelectTicker,
}: {
  tickers: BasicTicker[];
  selected: string[];
  onToggle: (ticker: BasicTicker) => void;
  onSelectTicker: (ticker: BasicTicker) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "100%" }}>
      {tickers.map((t) => (
        <TickerCard
          key={t.symbol}
          ticker={t}
          isSelected={selected.includes(t.symbol)}
          onToggle={() => onToggle(t)}
          onSelect={() => onSelectTicker(t)}
        />
      ))}
    </div>
  );
}




