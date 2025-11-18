"use client";

import { useEffect, useState } from "react";
import { BasicTicker } from "@/data/tickers";
import NewsCard from "./NewsCard";

export interface NewsItem {
  news: string;
  date: string;
  link: string;
}

export default function NewsPanel({
  tickers,
  mostRecent,
}: {
  tickers: BasicTicker[];
  mostRecent: BasicTicker | null;
}) {
  const [newsData, setNewsData] = useState<Record<string, NewsItem[]>>({});
  const [loading, setLoading] = useState(true);

  const fetchNewsForTicker = async (symbol: string): Promise<NewsItem[]> => {
    try {
      const res = await fetch("http://localhost:8000/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticker: symbol, days: 30 }),
      });

      const data = await res.json();
      return data.news || [];
    } catch {
      return [];
    }
  };

  useEffect(() => {
    const loadNews = async () => {
      // 🟢 FIX: If no tickers selected, clear panel immediately
      if (tickers.length === 0) {
        setNewsData({});
        setLoading(false);
        return;
      }

      setLoading(true);

      const result: Record<string, NewsItem[]> = {};

      // Load most recent ticker first
      if (mostRecent) {
        result[mostRecent.symbol] = await fetchNewsForTicker(
          mostRecent.symbol
        );
      }

      // Load remaining tickers
      for (const t of tickers) {
        if (mostRecent && t.symbol === mostRecent.symbol) continue;

        result[t.symbol] = await fetchNewsForTicker(t.symbol);
      }

      setNewsData(result);
      setLoading(false);
    };

    loadNews();
  }, [tickers, mostRecent]);

  // Ensure newest selected ticker is at the top
  const orderedSymbols = mostRecent
    ? [
        mostRecent.symbol,
        ...Object.keys(newsData).filter((s) => s !== mostRecent.symbol),
      ]
    : Object.keys(newsData);

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        padding: "15px 10px 10px 5px",
      }}
    >
      <h2 style={{ margin: "0 0 12px 0", color: "black", fontSize: "22px" }}>
        Select Tickers to See Related News Here!
      </h2>

      {loading && (
        <div>
          <div className="skeleton-line"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
        </div>
      )}

      <div className={loading ? "fade-hidden" : "fade-in"}>
        {orderedSymbols.map((symbol) => (
          <div key={symbol} style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "6px", color: "#58a6ff" }}>{symbol}</h3>

            {newsData[symbol]?.map((n, i) => (
              <NewsCard key={i} title={n.news} date={n.date} link={n.link} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}



