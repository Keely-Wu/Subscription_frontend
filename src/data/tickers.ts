// src/data/tickers.ts

export interface BasicTicker {
  symbol: string;
  name: string;
  price: number;
  logo: string;
}

export const defaultTickers: BasicTicker[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 203.56, logo: "https://logo.clearbit.com/apple.com" },
  { symbol: "MSFT", name: "Microsoft", price: 410.12, logo: "https://logo.clearbit.com/microsoft.com" },
  { symbol: "NVDA", name: "NVIDIA", price: 906.54, logo: "https://logo.clearbit.com/nvidia.com" },
  { symbol: "GOOGL", name: "Alphabet", price: 144.23, logo: "https://logo.clearbit.com/google.com" },
  { symbol: "AMZN", name: "Amazon", price: 172.15, logo: "https://logo.clearbit.com/amazon.com" },
  { symbol: "META", name: "Meta", price: 485.33, logo: "https://logo.clearbit.com/meta.com" },
  { symbol: "TSLA", name: "Tesla", price: 190.88, logo: "https://logo.clearbit.com/tesla.com" },
  { symbol: "BRK.A", name: "Berkshire Hathaway", price: 620000, logo: "https://logo.clearbit.com/berkshirehathaway.com" },
  { symbol: "JPM", name: "JPMorgan", price: 172.22, logo: "https://logo.clearbit.com/jpmorganchase.com" },
  { symbol: "V", name: "Visa", price: 267.14, logo: "https://logo.clearbit.com/visa.com" },
  { symbol: "MA", name: "Mastercard", price: 412.23, logo: "https://logo.clearbit.com/mastercard.com" },
  { symbol: "NFLX", name: "Netflix", price: 598.40, logo: "https://logo.clearbit.com/netflix.com" },
  { symbol: "ADBE", name: "Adobe", price: 532.12, logo: "https://logo.clearbit.com/adobe.com" },
  { symbol: "AMD", name: "AMD", price: 168.88, logo: "https://logo.clearbit.com/amd.com" },
  { symbol: "INTC", name: "Intel", price: 43.22, logo: "https://logo.clearbit.com/intel.com" },
  { symbol: "PYPL", name: "PayPal", price: 62.55, logo: "https://logo.clearbit.com/paypal.com" },
  { symbol: "UBER", name: "Uber", price: 69.31, logo: "https://logo.clearbit.com/uber.com" },
  { symbol: "DIS", name: "Disney", price: 101.45, logo: "https://logo.clearbit.com/disney.com" },
  { symbol: "KO", name: "Coca-Cola", price: 59.22, logo: "https://logo.clearbit.com/coca-cola.com" },
  { symbol: "PFE", name: "Pfizer", price: 28.44, logo: "https://logo.clearbit.com/pfizer.com" }
];

