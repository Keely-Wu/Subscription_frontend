"use client";

import { useRouter } from "next/navigation";
import "./TopHeader.css";

export default function TopHeader({
  onConfirm,
}: {
  onConfirm: () => void;
}) {
  const router = useRouter();

  return (
    <header className="top-header">
      <button className="top-header-btn" onClick={() => router.push("/")}>
        ← Change Plan
      </button>

      <button className="top-header-btn confirm" onClick={onConfirm}>
        Confirm Selection →
      </button>
    </header>
  );
}


