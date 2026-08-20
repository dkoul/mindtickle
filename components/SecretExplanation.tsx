import type { TrickChainItem } from "@/types/trick";

export function SecretExplanation({
  whatHappened,
  chain,
  details,
  failureCases,
  tips,
}: {
  whatHappened: string;
  chain?: TrickChainItem[];
  details: string;
  failureCases?: string;
  tips?: string;
}) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          What happened?
        </h3>
        <p className="mt-2 text-lg text-white">{whatHappened}</p>
      </div>

      {chain && chain.length > 0 && (
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            How did it work?
          </h3>
          <div className="mt-4 flex flex-col items-center gap-1">
            {chain.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className={`rounded-lg px-4 py-2 text-sm ${
                    item.highlight
                      ? "bg-violet-500/20 font-semibold text-violet-200"
                      : "text-zinc-300"
                  }`}
                >
                  {item.label}
                </span>
                {i < chain.length - 1 && (
                  <span className="my-1 text-zinc-600">↓</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Why it works
        </h3>
        <p className="mt-2 leading-relaxed text-zinc-300">{details}</p>
      </div>

      {failureCases && (
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            When it fails
          </h3>
          <p className="mt-2 leading-relaxed text-zinc-400">{failureCases}</p>
        </div>
      )}

      {tips && (
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Performance tips
          </h3>
          <p className="mt-2 leading-relaxed text-zinc-400">{tips}</p>
        </div>
      )}
    </div>
  );
}
