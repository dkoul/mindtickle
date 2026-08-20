import { TricksList } from "@/components/TricksList";
import type { TrickGoal } from "@/types/trick";

const VALID_GOALS: TrickGoal[] = [
  "think-of-something",
  "predict-number",
  "cognitive-bias",
  "mathematical",
];

export default async function TricksPage({
  searchParams,
}: {
  searchParams: Promise<{ goal?: string }>;
}) {
  const params = await searchParams;
  const goal = VALID_GOALS.includes(params.goal as TrickGoal)
    ? (params.goal as TrickGoal)
    : undefined;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        All Tricks
      </h1>
      <p className="mt-3 text-zinc-400">
        Pick a trick, hand your phone to a friend, and perform.
      </p>

      <div className="mt-10">
        <TricksList initialGoal={goal} />
      </div>
    </div>
  );
}
