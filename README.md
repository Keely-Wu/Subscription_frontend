🌌 AI Stock Intelligence Dashboard & Subscription System

A modern, dark-themed web application built with Next.js, featuring a dynamic Aurora background (WebGL + OGL), real-time stock subscription management, and a fully typed API contract between frontend and backend.

This project enables:

Beautiful dark UI powered by a custom Aurora shader background

User subscription management

Plan selection (Trial / Basic / Pro)

Ticker tracking with plan-based limits

Email alert customization

Fully typed API communication

Consistent design across dashboard & subscription settings

🚀 Tech Stack
Frontend

Next.js 14+ (App Router, Turbopack)

React

TypeScript

OGL (WebGL shader rendering)

Styled components using inline CSS + minimal classes

API Communication

Custom SubscriptionPayload / SubscriptionResponse interfaces

REST API POST endpoint

🎨 UI Highlights
🌙 Dark, glassmorphism design

Frosted card containers

Hover animations

Soft borders with transparency

Clean typography using Inter

🌌 Animated Aurora Background

Fullscreen WebGL shader

Customizable color stops, amplitude, speed

Runs efficiently under Next.js client components

🧩 Subscription Update API Documentation

This section defines the official payload contract between the Next.js frontend and the backend service.

📡 POST /api/subscription/update

The frontend sends the user’s updated subscription settings to this endpoint.

Content-Type: application/json
📘 Request Body — SubscriptionPayload
export interface SubscriptionPayload {
  /** Full name of the user */
  name: string;

  /** Email used for login + email push */
  email: string;

  /** List of stock tickers tracked by user */
  tickers: string[];

  /** Human-readable plan name */
  plan: "Trial" | "Basic Monthly" | "Pro Monthly";

  /** Subscription period start time (ISO 8601) */
  period_start: string;

  /** Subscription period end time (ISO 8601) */
  period_end: string;

  /** Optional custom subject for email reports */
  email_subject?: string;
}

📦 Example Request Payload
{
  "name": "John Doe",
  "email": "john@example.com",
  "tickers": ["AAPL", "NVDA", "MSFT"],
  "plan": "Pro Monthly",
  "period_start": "2025-11-12T00:00:00",
  "period_end": "2025-11-26T00:00:00",
  "email_subject": "Your Daily AI Market Digest"
}

🔁 Response — SubscriptionResponse
export interface SubscriptionResponse {
  success: boolean;
  message?: string;

  /** The updated subscription record */
  subscription: SubscriptionPayload;
}

