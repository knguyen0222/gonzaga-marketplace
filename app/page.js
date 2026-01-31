"use client"; // required if using client-side Firebase or hooks

import { db } from "../firebase"; // keep this if you want Firestore later

export default function Home() {
  return (
    <div style={{ padding: "2rem", minHeight: "100vh", backgroundColor: "#f0f0f0" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Gonzaga Marketplace MVP
      </h1>
      <p>
        If you see this, your Next.js App Router site is deployed correctly!
      </p>
    </div>
  );
}
