export interface NewsItem {
  news: string;
  date: string;
  link: string;
}

export interface NewsResponse {
  news: NewsItem[];
}

export async function fetchNewsForTicker(ticker: string): Promise<NewsItem[]> {
  try {
    const response = await fetch("http://localhost:8000/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ticker,
        days: 30
      }),
    });

    const data = await response.json();
    return data.news ?? [];
  } catch (err) {
    console.error("Error fetching news:", err);
    return [];
  }
}
