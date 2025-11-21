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
      <button className="learn-more" onClick={() => router.push("/")}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow arrow-left"></span>
        </span>
        <span className="button-text">Change Plan</span>
      </button>

      <button className="learn-more confirm" onClick={onConfirm}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow arrow-right"></span>
        </span>
        <span className="button-text">Subscribe</span>
      </button>
    </header>
  );
}


