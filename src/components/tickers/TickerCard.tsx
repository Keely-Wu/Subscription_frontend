import "./TickerCard.css";
import { BasicTicker } from "@/data/tickers";

export default function TickerCard({
  ticker,
  isSelected,
  onToggle,
  onSelect,
}: {
  ticker: BasicTicker;
  isSelected: boolean;
  onToggle: () => void;
  onSelect: () => void;
}) {
  return (
    <div className="ticker-card" onClick={onSelect}>
      <div className="ticker-logo">
        <img src={ticker.logo} alt={ticker.symbol} />
      </div>

      <div className="ticker-info">
        <div className="ticker-symbol">{ticker.symbol}</div>
        <div className="ticker-name">{ticker.name}</div>
        <div className="ticker-price">${ticker.price}</div>

        <a className="ticker-news-link">View QandQ AI Analysis →</a>
      </div>

      <button
        className={`track-btn ${isSelected ? "tracked" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        {isSelected ? "✓ Tracked" : "+ Track"}
      </button>
    </div>
  );
}





