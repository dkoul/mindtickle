import Link from "next/link";
import type { Trick } from "@/types/trick";
import {
  CATEGORY_EMOJI,
  CATEGORY_LABELS,
  difficultyStars,
  reliabilityLabel,
} from "@/lib/constants";

export function TrickCard({ trick }: { trick: Trick }) {
  return (
    <Link
      href={`/tricks/${trick.id}`}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
    >
      <span className="text-3xl">{trick.emoji}</span>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-white group-hover:text-white">
        {trick.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {trick.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
        <span>
          {CATEGORY_EMOJI[trick.category]} {CATEGORY_LABELS[trick.category]}
        </span>
        <span>{difficultyStars(trick.difficulty)}</span>
        <span>🔥 {reliabilityLabel(trick.reliability)}</span>
      </div>
      <span className="mt-5 inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-white/15">
        Perform Trick
      </span>
    </Link>
  );
}
