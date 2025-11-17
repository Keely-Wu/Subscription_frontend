# 🌌 AI Stock Intelligence Dashboard & Subscription System

## 1. Overview

A modern, dark-themed web application built with **Next.js**, featuring:

- A dynamic Aurora background (WebGL + OGL)
- Real-time stock subscription management
- A fully typed API contract between frontend and backend

This project enables:

- Beautiful dark UI powered by a custom Aurora shader background  
- User subscription management  
- Plan selection (Trial / Basic / Pro)  
- Ticker tracking with plan-based limits  
- Email alert customization  
- Fully typed API communication  
- Consistent design across dashboard & subscription settings  

---

## 2. Tech Stack

### 2.1 Frontend

- **Next.js 14+** (App Router, Turbopack)  
- **React**  
- **TypeScript**  
- **OGL** (WebGL shader rendering)  
- Styled components using inline CSS + minimal classes  

### 2.2 API Communication

- Custom `SubscriptionPayload` / `SubscriptionResponse` TypeScript interfaces  
- REST API `POST` endpoint  

---

## 3. UI Highlights

### 3.1 Dark, Glassmorphism Design

- Frosted card containers  
- Hover animations  
- Soft borders with transparency  
- Clean typography using **Inter**  

### 3.2 Animated Aurora Background

- Fullscreen WebGL shader  
- Customizable color stops, amplitude, speed  
- Runs efficiently inside Next.js client components  

---

## 4. Subscription Update API Documentation

This section defines the **official payload contract** between the Next.js frontend and the backend service.

### 4.1 Endpoint

**POST** `/api/subscription/update`

**Headers:**
Content-Type: application/json

### 4.2 Request Body — SubscriptionPayload
Request Body — SubscriptionPayload
```text
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
```
### 4.3 Example Request Payload
```text
{
  "name": "John Doe",
  "email": "john@example.com",
  "tickers": ["AAPL", "NVDA", "MSFT"],
  "plan": "Pro Monthly",
  "period_start": "2025-11-12T00:00:00",
  "period_end": "2025-11-26T00:00:00",
  "email_subject": "Your Daily AI Market Digest"
}
```

### 4.4 Response — SubscriptionResponse
```text
export interface SubscriptionResponse {
  success: boolean;
  message?: string;

  /** The updated subscription record */
  subscription: SubscriptionPayload;
}
```
