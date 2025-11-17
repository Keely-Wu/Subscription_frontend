import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("📩 RECEIVED PAYLOAD:", body);

  return NextResponse.json({
    success: true,
    subscription: body,
  });
}
