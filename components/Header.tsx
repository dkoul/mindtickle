import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-white">
            Mind Tickle
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/tricks"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            All Tricks
          </Link>
          <Link
            href="/about"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
