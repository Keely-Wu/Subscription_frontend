import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Q&Q.AI Dashboard",
  description: "AI Investment Analysis System",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          minHeight: "100%",
          overflow: "auto",
          background: "#000",
        }}
      >
        {children}
      </body>
    </html>
  );
}



