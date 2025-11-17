"use client";

export function EmailSettings({
  emailSubject,
  onChangeSubject,
}: {
  emailSubject: string;
  onChangeSubject: (v: string) => void;
}) {
  return (
    <div>
      <input
        value={emailSubject}
        onChange={(e) => onChangeSubject(e.target.value)}
        placeholder="Custom email subject"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "white",
        }}
      />
    </div>
  );
}

