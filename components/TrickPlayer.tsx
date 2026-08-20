"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import type { Trick } from "@/types/trick";
import { Reveal } from "./Reveal";
import { SecretExplanation } from "./SecretExplanation";
import {
  CATEGORY_EMOJI,
  CATEGORY_LABELS,
  difficultyStars,
  reliabilityLabel,
} from "@/lib/constants";

type PlayerPhase = "ready" | "steps" | "reveal" | "explain" | "done";

interface TrickPlayerProps {
  trick: Trick;
  surprise?: boolean;
}

export function TrickPlayer({ trick, surprise = false }: TrickPlayerProps) {
  const [phase, setPhase] = useState<PlayerPhase>(surprise ? "ready" : "ready");
  const [stepIndex, setStepIndex] = useState(0);
  const [performMode, setPerformMode] = useState(true);
  const [understandMode, setUnderstandMode] = useState(false);
  const [feedback, setFeedback] = useState<boolean | null>(null);

  const currentStep = trick.steps[stepIndex];
  const isLastStep = stepIndex === trick.steps.length - 1;

  const handleStart = () => setPhase("steps");

  const handleStepAction = () => {
    if (isLastStep) {
      setPhase("reveal");
    } else {
      setStepIndex((i) => i + 1);
    }
  };

  const handleFeedback = useCallback((success: boolean) => {
    setFeedback(success);
    setPhase("explain");
  }, []);

  const handleDone = () => setPhase("done");

  const toggleUnderstand = () => {
    setUnderstandMode((u) => !u);
    if (!understandMode) setPerformMode(false);
  };

  const showSecrets = understandMode && !performMode;

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      {/* Mode toggle */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span>{trick.emoji}</span>
          <span>{trick.title}</span>
        </div>
        <button
          type="button"
          onClick={toggleUnderstand}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
            understandMode
              ? "bg-violet-500/20 text-violet-300"
              : "bg-white/5 text-zinc-400 hover:text-white"
          }`}
          title={understandMode ? "Understand mode" : "Perform mode"}
        >
          {understandMode ? "🔬 Understand" : "🎭 Perform"}
        </button>
      </div>

      {surprise && phase === "ready" && (
        <p className="mb-6 text-center text-violet-300 animate-fade-in">
          You&apos;ve got 60 seconds. Try this one.
        </p>
      )}

      {/* Ready screen */}
      {phase === "ready" && (
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h2 className="text-2xl font-semibold text-white">Get ready</h2>
          <p className="mt-4 max-w-sm text-lg leading-relaxed text-zinc-400">
            Put your phone in front of your friend.
          </p>
          {showSecrets && (
            <div className="mt-6 w-full rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 text-left text-sm text-zinc-300">
              <p className="font-medium text-violet-300">Performer notes</p>
              <p className="mt-2">{trick.shortDescription}</p>
              <p className="mt-2 text-zinc-500">
                {CATEGORY_EMOJI[trick.category]} {CATEGORY_LABELS[trick.category]} ·{" "}
                {difficultyStars(trick.difficulty)} · 🔥 {reliabilityLabel(trick.reliability)}
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={handleStart}
            className="mt-10 w-full max-w-xs rounded-2xl bg-white py-4 text-lg font-semibold text-black transition-transform active:scale-[0.98]"
          >
            Start
          </button>
        </div>
      )}

      {/* Step screens */}
      {phase === "steps" && currentStep && (
        <div className="flex flex-col items-center text-center animate-fade-in">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Step {stepIndex + 1} of {trick.steps.length}
          </p>
          <p className="mt-8 text-2xl font-medium leading-snug text-white sm:text-3xl">
            {performMode ? (
              <>
                {stepIndex === 0 ? "Say this:" : stepIndex < trick.steps.length - 1 ? "Ask this:" : "Finally:"}
              </>
            ) : null}
          </p>
          <p className="mt-4 text-xl leading-relaxed text-zinc-300 sm:text-2xl">
            {currentStep.instruction}
          </p>

          {showSecrets && currentStep.performerNote && (
            <div className="mt-6 w-full rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-left text-sm text-amber-200/80">
              <span className="font-medium">Secret: </span>
              {currentStep.performerNote}
            </div>
          )}

          {!performMode && !understandMode && (
            <p className="mt-4 text-sm text-zinc-500">Tap Continue when they&apos;ve done it</p>
          )}

          <button
            type="button"
            onClick={handleStepAction}
            className="mt-10 w-full max-w-xs rounded-2xl bg-white py-4 text-lg font-semibold text-black transition-transform active:scale-[0.98]"
          >
            {isLastStep ? "Reveal" : currentStep.actionLabel}
          </button>
        </div>
      )}

      {/* Reveal */}
      {phase === "reveal" && (
        <Reveal
          prefix={trick.reveal.prefix}
          emoji={trick.reveal.emoji}
          answer={trick.reveal.answer}
          subtitle={trick.reveal.subtitle}
          onFeedback={handleFeedback}
        />
      )}

      {/* Explanation */}
      {phase === "explain" && (
        <div className="animate-fade-in">
          <div className="mb-6 text-center">
            {feedback === true && (
              <p className="text-lg text-emerald-400">That worked? 😈</p>
            )}
            {feedback === false && (
              <p className="text-lg text-zinc-400">
                Not this time — but the psychology is still real.
              </p>
            )}
          </div>

          <h2 className="text-xl font-semibold text-white">How did it work?</h2>

          <div className="mt-6">
            <SecretExplanation
              whatHappened={trick.explanation.whatHappened}
              chain={trick.explanation.chain}
              details={trick.explanation.details}
              failureCases={trick.explanation.failureCases}
              tips={trick.explanation.tips}
            />
          </div>

          <button
            type="button"
            onClick={handleDone}
            className="mt-10 w-full rounded-2xl bg-white/10 py-4 font-medium text-white transition-colors hover:bg-white/15"
          >
            Continue
          </button>
        </div>
      )}

      {/* Done / share */}
      {phase === "done" && (
        <div className="flex flex-col items-center text-center animate-fade-in">
          <p className="text-2xl font-semibold text-white">Nice performance.</p>
          <p className="mt-2 text-zinc-400">Want to try another mind?</p>

          <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                const url = `${window.location.origin}/tricks/${trick.id}`;
                if (navigator.share) {
                  navigator.share({
                    title: trick.title,
                    text: trick.shortDescription,
                    url,
                  });
                } else {
                  navigator.clipboard.writeText(url);
                  alert("Link copied!");
                }
              }}
              className="rounded-2xl bg-white py-4 font-semibold text-black"
            >
              Share this trick
            </button>
            <Link
              href="/tricks"
              className="rounded-2xl bg-white/10 py-4 font-medium text-white transition-colors hover:bg-white/15"
            >
              Try another
            </Link>
          </div>
        </div>
      )}

      {/* Performance mode quick toggle during steps */}
      {phase === "steps" && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setPerformMode((p) => !p)}
            className="text-xs text-zinc-600 hover:text-zinc-400"
          >
            {performMode ? "🎭 Performance mode on" : "Show full instructions"}
          </button>
        </div>
      )}
    </div>
  );
}
