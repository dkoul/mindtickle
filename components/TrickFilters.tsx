"use client";

import type { TrickFilters as Filters, TrickCategory, TrickDifficulty, TrickDuration, ReliabilityTier } from "@/types/trick";
import {
  CATEGORY_LABELS,
  DIFFICULTY_LABELS,
  DURATION_LABELS,
  RELIABILITY_LABELS,
} from "@/lib/constants";

interface TrickFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

const categories: TrickCategory[] = ["psychology", "mathematics", "cards", "words"];
const difficulties: TrickDifficulty[] = ["easy", "medium", "advanced"];
const durations: TrickDuration[] = ["under-1", "1-3", "3-plus"];
const reliabilities: ReliabilityTier[] = ["guaranteed", "usually", "gamble"];

function toggle<T>(list: T[] | undefined, value: T): T[] {
  const current = list ?? [];
  return current.includes(value)
    ? current.filter((v) => v !== value)
    : [...current, value];
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "bg-white text-black"
          : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

export function TrickFilters({
  filters,
  onChange,
  search,
  onSearchChange,
}: TrickFiltersProps) {
  return (
    <div className="space-y-5">
      <input
        type="search"
        placeholder="Search tricks..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-white/20 focus:outline-none"
      />

      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Difficulty
        </p>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((d) => (
            <FilterChip
              key={d}
              label={DIFFICULTY_LABELS[d]}
              active={filters.difficulty?.includes(d) ?? false}
              onClick={() =>
                onChange({
                  ...filters,
                  difficulty: toggle(filters.difficulty, d),
                })
              }
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Type
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <FilterChip
              key={c}
              label={CATEGORY_LABELS[c]}
              active={filters.category?.includes(c) ?? false}
              onClick={() =>
                onChange({
                  ...filters,
                  category: toggle(filters.category, c),
                })
              }
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Performance time
        </p>
        <div className="flex flex-wrap gap-2">
          {durations.map((d) => (
            <FilterChip
              key={d}
              label={DURATION_LABELS[d]}
              active={filters.duration?.includes(d) ?? false}
              onClick={() =>
                onChange({
                  ...filters,
                  duration: toggle(filters.duration, d),
                })
              }
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Reliability
        </p>
        <div className="flex flex-wrap gap-2">
          {reliabilities.map((r) => (
            <FilterChip
              key={r}
              label={RELIABILITY_LABELS[r]}
              active={filters.reliability?.includes(r) ?? false}
              onClick={() =>
                onChange({
                  ...filters,
                  reliability: toggle(filters.reliability, r),
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
