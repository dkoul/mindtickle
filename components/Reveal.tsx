"use client";

import { useEffect, useState } from "react";

interface RevealProps {
  prefix?: string;
  emoji: string;
  answer: string;
  subtitle?: string;
  onFeedback: (success: boolean) => void;
}

export function Reveal({
  prefix = "You thought of...",
  emoji,
  answer,
  subtitle,
  onFeedback,
}: RevealProps) {
  const [phase, setPhase] = useState<"building" | "shown" | "feedback">("building");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("shown"), 600);
    const t2 = setTimeout(() => setPhase("feedback"), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-sm text-zinc-400 animate-fade-in">{prefix}</p>

      <div
        className={`mt-8 transition-all duration-700 ${
          phase !== "building" ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <span className="text-7xl sm:text-8xl">{emoji}</span>
      </div>

      <h2
        className={`mt-6 text-3xl font-bold tracking-tight text-white transition-all duration-700 delay-200 sm:text-4xl ${
          phase !== "building" ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {answer}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 max-w-sm text-zinc-400 transition-all duration-700 delay-300 ${
            phase === "shown" || phase === "feedback" ? "opacity-100" : "opacity-0"
          }`}
        >
          {subtitle}
        </p>
      )}

      {phase === "feedback" && (
        <div className="mt-10 w-full max-w-xs space-y-3 animate-fade-in">
          <p className="text-lg font-medium text-white">Did I get it?</p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onFeedback(true)}
              className="flex-1 rounded-xl bg-emerald-500/20 py-3 font-medium text-emerald-300 transition-colors hover:bg-emerald-500/30"
            >
              YES 😱
            </button>
            <button
              type="button"
              onClick={() => onFeedback(false)}
              className="flex-1 rounded-xl bg-white/10 py-3 font-medium text-zinc-300 transition-colors hover:bg-white/15"
            >
              NO 🤔
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
