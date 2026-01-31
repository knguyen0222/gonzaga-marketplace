"use client"; // Required for React hooks in App Router

import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "test"));
        setDocs(querySnapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-8">
        Gonzaga Marketplace MVP
      </h1>

      <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
        Firestore Test Data:
      </h2>
      {docs.length === 0 ? (
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Loading data from Firestore...
        </p>
      ) : (
        <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-xl overflow-x-auto">
          {JSON.stringify(docs, null, 2)}
        </pre>
      )}
    </div>
  );
}
