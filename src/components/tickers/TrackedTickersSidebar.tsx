"use client";

import { BasicTicker } from "@/data/tickers";
import "./TrackedTickersSidebar.css";

export default function TrackedTickersSidebar({
  tracked,
  onRemove,
}: {
  tracked: BasicTicker[];
  onRemove: (symbol: string) => void;
}) {
  return (
    <div className="sidebar-container">
      <h3 className="sidebar-title">Selected Tickers</h3>

      {tracked.length === 0 && (
        <p className="sidebar-empty">None selected</p>
      )}

      {tracked.map((t) => (
        <div key={t.symbol} className="ticker-row">
          <img src={t.logo} className="ticker-logo" alt={t.symbol} />

          <span className="ticker-symbol">{t.symbol}</span>

          <span className="ticker-remove" onClick={() => onRemove(t.symbol)}>
            ×
          </span>
        </div>
      ))}
    </div>
  );
}





 







 























