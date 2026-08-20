import Link from "next/link";
import { TrickCard } from "@/components/TrickCard";
import { GoalButton } from "@/components/GoalButton";
import { SurpriseMe } from "@/components/SurpriseMe";
import { getPopularTricks } from "@/lib/trick-engine";

export default function HomePage() {
  const popular = getPopularTricks();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-tight">
          Can you read a mind?
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-zinc-400">
          Probably not.
          <br />
          But you can learn why minds behave predictably.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/tricks"
            className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black transition-transform hover:bg-zinc-100 active:scale-[0.98]"
          >
            🎭 Perform a Trick
          </Link>
          <Link
            href="/about"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
          >
            🔬 Explore the Psychology
          </Link>
        </div>

        <div className="mt-8">
          <SurpriseMe className="text-base" />
        </div>
      </section>

      {/* Popular tricks */}
      <section className="mt-20">
        <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Popular Tricks
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((trick) => (
            <TrickCard key={trick.id} trick={trick} />
          ))}
        </div>
      </section>

      {/* Goal filters */}
      <section className="mt-20">
        <h2 className="text-lg font-semibold text-white">
          What kind of trick are you looking for?
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <GoalButton goal="think-of-something" />
          <GoalButton goal="predict-number" />
          <GoalButton goal="cognitive-bias" />
          <GoalButton goal="mathematical" />
        </div>
      </section>

      {/* Tagline */}
      <section className="mt-20 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
        <p className="text-xl font-medium text-zinc-300 italic">
          &ldquo;Wait... how did you know that?&rdquo;
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          You don&apos;t need to read minds. You just need to understand them.
        </p>
      </section>
    </div>
  );
}
