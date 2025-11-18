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
          height: "100%",
          overflow: "hidden",
          background: "#000",
        }}
      >
        {children}
      </body>
    </html>
  );
}



