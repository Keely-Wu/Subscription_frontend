"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./AnalysisPage.css";

interface ImpactChain {
  news: string;
  date: string;
  impact: number;
  reasoning: string;
  factors: string[];
}

interface FactorData {
  factor: string;
  impact: number;
  abs_impact: number;
  timeRanges: Array<{
    start: string;
    end: string;
    value: number;
  }> | null;
}

interface AnalysisResponse {
  impact_chains: ImpactChain[];
  macro_data: FactorData[];
  micro_data: FactorData[];
  ticker: string;
}

// Hardcoded mock data matching backend format
function getMockAnalysisData(ticker: string): AnalysisResponse {
  return {
    ticker: ticker,
    impact_chains: [
      {
        news: "Company announces breakthrough in AI chip technology, expects 40% revenue growth",
        date: "2025-01-15",
        impact: 0.15,
        reasoning: "Positive news about AI chip technology aligns with current market trends. The 40% revenue growth projection significantly exceeds analyst expectations, indicating strong future performance potential.",
        factors: ["Revenue Growth", "Technology Innovation", "Market Sentiment"]
      },
      {
        news: "Regulatory approval granted for new product line in European markets",
        date: "2025-01-14",
        impact: 0.08,
        reasoning: "Regulatory approval opens new revenue streams in European markets. This expansion opportunity is expected to contribute positively to long-term growth.",
        factors: ["Market Expansion", "Regulatory Environment", "Revenue Diversification"]
      },
      {
        news: "Supply chain disruptions reported in key manufacturing regions",
        date: "2025-01-13",
        impact: -0.05,
        reasoning: "Supply chain issues may lead to production delays and increased costs. However, the impact is mitigated by diversified supplier base.",
        factors: ["Supply Chain", "Production Costs", "Operational Risk"]
      }
    ],
    macro_data: [
      {
        factor: "Interest Rates",
        impact: -0.12,
        abs_impact: 0.12,
        timeRanges: [
          { start: "2025-01-01", end: "2025-01-15", value: -0.12 }
        ]
      },
      {
        factor: "Inflation Trends",
        impact: 0.08,
        abs_impact: 0.08,
        timeRanges: [
          { start: "2025-01-01", end: "2025-01-15", value: 0.08 }
        ]
      },
      {
        factor: "GDP Growth",
        impact: 0.15,
        abs_impact: 0.15,
        timeRanges: [
          { start: "2025-01-01", end: "2025-01-15", value: 0.15 }
        ]
      },
      {
        factor: "Currency Exchange",
        impact: -0.03,
        abs_impact: 0.03,
        timeRanges: [
          { start: "2025-01-01", end: "2025-01-15", value: -0.03 }
        ]
      }
    ],
    micro_data: [
      {
        factor: "Revenue Growth",
        impact: 0.22,
        abs_impact: 0.22,
        timeRanges: [
          { start: "2025-01-01", end: "2025-01-15", value: 0.22 }
        ]
      },
      {
        factor: "Profit Margins",
        impact: 0.18,
        abs_impact: 0.18,
        timeRanges: [
          { start: "2025-01-01", end: "2025-01-15", value: 0.18 }
        ]
      },
      {
        factor: "Market Share",
        impact: 0.10,
        abs_impact: 0.10,
        timeRanges: [
          { start: "2025-01-01", end: "2025-01-15", value: 0.10 }
        ]
      },
      {
        factor: "Competitive Position",
        impact: 0.14,
        abs_impact: 0.14,
        timeRanges: [
          { start: "2025-01-01", end: "2025-01-15", value: 0.14 }
        ]
      },
      {
        factor: "R&D Investment",
        impact: 0.09,
        abs_impact: 0.09,
        timeRanges: [
          { start: "2025-01-01", end: "2025-01-15", value: 0.09 }
        ]
      }
    ]
  };
}

export default function AnalysisPage() {
  const params = useParams();
  const router = useRouter();
  const ticker = params.ticker as string;
  const [analysisData, setAnalysisData] = useState<AnalysisResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, use hardcoded data
    // TODO: Replace with actual API call when backend is ready
    // const fetchAnalysis = async () => {
    //   try {
    //     const response = await fetch("/api/analyze-impact", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ ticker, news_list: [] }),
    //     });
    //     const data = await response.json();
    //     setAnalysisData(data);
    //   } catch (error) {
    //     console.error("Failed to fetch analysis:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchAnalysis();

    // Using hardcoded data for now
    setTimeout(() => {
      setAnalysisData(getMockAnalysisData(ticker));
      setLoading(false);
    }, 500);
  }, [ticker]);

  const handleBack = () => {
    router.push("/choose-tickers");
  };

  if (loading) {
    return (
      <>
        <header className="analysis-header-bar">
          <button className="learn-more" onClick={handleBack}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow arrow-left"></span>
            </span>
            <span className="button-text">Back to Tickers</span>
          </button>
        </header>
        <main className="analysis-page">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Analyzing {ticker}...</p>
          </div>
        </main>
      </>
    );
  }

  if (!analysisData) {
    return (
      <>
        <header className="analysis-header-bar">
          <button className="learn-more" onClick={handleBack}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow arrow-left"></span>
            </span>
            <span className="button-text">Back to Tickers</span>
          </button>
        </header>
        <main className="analysis-page">
          <div className="error-container">
            <p>Failed to load analysis data</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <header className="analysis-header-bar">
        <button className="learn-more" onClick={handleBack}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow arrow-left"></span>
          </span>
          <span className="button-text">Back to Tickers</span>
        </button>
      </header>
      <main className="analysis-page">
        <div className="analysis-container">
          <div className="analysis-header">
            <h1>QandQ AI Analysis: {analysisData.ticker}</h1>
            <p className="analysis-subtitle">Comprehensive impact analysis and factor breakdown</p>
          </div>

          {/* Impact Chains Section */}
          <section className="analysis-section">
            <h2 className="section-title">Impact Chains</h2>
            <div className="impact-chains">
              {analysisData.impact_chains.map((chain, idx) => (
                <div key={idx} className="impact-chain-card">
                  <div className="chain-header">
                    <span className="chain-date">{chain.date}</span>
                    <span className={`chain-impact ${chain.impact >= 0 ? 'positive' : 'negative'}`}>
                      {chain.impact >= 0 ? '+' : ''}{(chain.impact * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="chain-news">{chain.news}</div>
                  <div className="chain-reasoning">{chain.reasoning}</div>
                  <div className="chain-factors">
                    {chain.factors.map((factor, fIdx) => (
                      <span key={fIdx} className="factor-tag">{factor}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Macro Factors Section */}
          <section className="analysis-section">
            <h2 className="section-title">Macro Factors</h2>
            <div className="factors-grid">
              {analysisData.macro_data.map((factor, idx) => (
                <div key={idx} className="factor-card">
                  <div className="factor-name">{factor.factor}</div>
                  <div className={`factor-impact ${factor.impact >= 0 ? 'positive' : 'negative'}`}>
                    {factor.impact >= 0 ? '+' : ''}{(factor.impact * 100).toFixed(2)}%
                  </div>
                  {factor.timeRanges && (
                    <div className="factor-timeranges">
                      <span className="timerange-label">Time Range:</span>
                      {factor.timeRanges.map((tr, trIdx) => (
                        <span key={trIdx} className="timerange-item">
                          {tr.start} to {tr.end}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Micro Factors Section */}
          <section className="analysis-section">
            <h2 className="section-title">Micro Factors</h2>
            <div className="factors-grid">
              {analysisData.micro_data.map((factor, idx) => (
                <div key={idx} className="factor-card">
                  <div className="factor-name">{factor.factor}</div>
                  <div className={`factor-impact ${factor.impact >= 0 ? 'positive' : 'negative'}`}>
                    {factor.impact >= 0 ? '+' : ''}{(factor.impact * 100).toFixed(2)}%
                  </div>
                  {factor.timeRanges && (
                    <div className="factor-timeranges">
                      <span className="timerange-label">Time Range:</span>
                      {factor.timeRanges.map((tr, trIdx) => (
                        <span key={trIdx} className="timerange-item">
                          {tr.start} to {tr.end}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

