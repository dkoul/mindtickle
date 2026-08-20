import Link from "next/link";
import type { TrickGoal } from "@/types/trick";
import { GOAL_LABELS } from "@/lib/constants";

export function GoalButton({ goal }: { goal: TrickGoal }) {
  return (
    <Link
      href={`/tricks?goal=${goal}`}
      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {GOAL_LABELS[goal]}
    </Link>
  );
}
