"use client";

import { useRouter } from "next/navigation";
import { getRandomTrick } from "@/lib/trick-engine";

export function SurpriseMe({ className = "" }: { className?: string }) {
  const router = useRouter();

  function handleSurprise() {
    const trick = getRandomTrick();
    router.push(`/tricks/${trick.id}?surprise=1`);
  }

  return (
    <button
      type="button"
      onClick={handleSurprise}
      className={`rounded-2xl border border-violet-500/30 bg-violet-500/10 px-8 py-4 text-lg font-semibold text-violet-200 transition-all hover:border-violet-500/50 hover:bg-violet-500/20 active:scale-[0.98] ${className}`}
    >
      🎲 Surprise Me
    </button>
  );
}
