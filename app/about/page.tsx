import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Why minds are predictable
      </h1>

      <div className="mt-8 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          Mind Tickle is a collection of interactive tricks — psychological,
          mathematical, and linguistic — that you can perform on friends. Each
          trick is designed to feel like a mini performance, not a tutorial.
        </p>

        <p>
          The core idea is simple: you don&apos;t need to read minds. You just
          need to understand how they work. Every trick on this site has two
          layers — the performance that creates wonder, and the explanation
          that reveals why it worked.
        </p>

        <h2 className="text-xl font-semibold text-white">How to use it</h2>
        <ol className="list-decimal space-y-2 pl-5 text-zinc-400">
          <li>Pick a trick from the collection.</li>
          <li>Hand your phone to your friend.</li>
          <li>Follow the on-screen instructions step by step.</li>
          <li>Reveal the prediction dramatically.</li>
          <li>Switch to Understand mode to learn the psychology.</li>
        </ol>

        <h2 className="text-xl font-semibold text-white">Two modes</h2>
        <p>
          <strong className="text-zinc-200">🎭 Perform mode</strong> hides the
          secrets and shows only what to say and when to continue. It turns
          your phone into a digital mentalism assistant.
        </p>
        <p>
          <strong className="text-zinc-200">🔬 Understand mode</strong> reveals
          the mechanism — cognitive biases, probability, priming, and the math
          behind guaranteed tricks.
        </p>

        <h2 className="text-xl font-semibold text-white">The product principle</h2>
        <blockquote className="border-l-2 border-violet-500/50 pl-4 text-zinc-400 italic">
          Don&apos;t just teach people tricks. Teach them why the tricks work.
        </blockquote>
        <p>
          At first, you come for &ldquo;I want to fool my friend.&rdquo; Then you
          discover &ldquo;Holy shit. My brain is predictable.&rdquo; That&apos;s
          where Mind Tickle gets genuinely interesting.
        </p>
      </div>

      <div className="mt-12">
        <Link
          href="/tricks"
          className="inline-flex rounded-2xl bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-zinc-100"
        >
          Browse all tricks
        </Link>
      </div>
    </div>
  );
}
