"use client";

import { useEffect, useState } from "react";
import { BasicTicker } from "@/data/tickers";
import { fetchNewsForTicker, NewsItem } from "@/utils/news";

export default function NewsPanel({ tickers }: { tickers: BasicTicker[] }) {
  const [newsData, setNewsData] = useState<Record<string, NewsItem[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllNews = async () => {
      setLoading(true);

      const results: Record<string, NewsItem[]> = {};

      for (const t of tickers) {
        const news = await fetchNewsForTicker(t.symbol);
        results[t.symbol] = news;
      }

      setNewsData(results);
      setLoading(false);
    };

    loadAllNews();
  }, [tickers]);

  if (loading) {
    return <p>Loading news feed…</p>;
  }

  return (
    <div style={{ overflowY: "auto", height: "100%", paddingRight: "10px" }}>
      <h2 style={{ marginBottom: "20px" }}>News & AI Analysis</h2>

      {tickers.map((t) => (
        <div key={t.symbol} style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
            {t.symbol} — {t.name}
          </h3>

          {(newsData[t.symbol] ?? []).length === 0 ? (
            <p style={{ opacity: 0.6 }}>No news available</p>
          ) : (
            newsData[t.symbol].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#f9f9f9",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  border: "1px solid #eee",
                }}
              >
                <a
                  href={item.link}
                  target="_blank"
                  style={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#0054ff",
                  }}
                >
                  {item.news.slice(0, 100)}...
                </a>

                <div style={{ fontSize: "12px", opacity: 0.7, marginTop: "5px" }}>
                  {item.date}
                </div>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}






