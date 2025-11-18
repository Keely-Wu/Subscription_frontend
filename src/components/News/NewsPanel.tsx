"use client";

export default function NewsPanel({
  activeTicker,
}: {
  activeTicker: any;
}) {
  return (
    <div>
      <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
        News & AI Analysis
      </h2>

      {!activeTicker && <p>(Select a ticker to view analysis…)</p>}

      {activeTicker && (
        <p>Showing news for <strong>{activeTicker.symbol}</strong>…</p>
      )}
    </div>
  );
}


