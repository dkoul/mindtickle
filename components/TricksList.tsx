"use client";

import { useMemo, useState } from "react";
import { TrickCard } from "@/components/TrickCard";
import { TrickFilters } from "@/components/TrickFilters";
import { SurpriseMe } from "@/components/SurpriseMe";
import { filterTricks, searchTricks } from "@/lib/trick-engine";
import type { TrickFilters as Filters, TrickGoal } from "@/types/trick";

export function TricksList({ initialGoal }: { initialGoal?: TrickGoal }) {
  const [filters, setFilters] = useState<Filters>({});
  const [search, setSearch] = useState("");

  const tricks = useMemo(() => {
    let result = filterTricks(filters);
    if (initialGoal) {
      result = result.filter((t) => t.goal === initialGoal);
    }
    if (search.trim()) {
      const searched = searchTricks(search);
      const ids = new Set(searched.map((t) => t.id));
      result = result.filter((t) => ids.has(t.id));
    }
    return result;
  }, [filters, search, initialGoal]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <SurpriseMe />
        <p className="text-sm text-zinc-500">
          {tricks.length} trick{tricks.length !== 1 ? "s" : ""}
        </p>
      </div>

      <TrickFilters
        filters={filters}
        onChange={setFilters}
        search={search}
        onSearchChange={setSearch}
      />

      {tricks.length === 0 ? (
        <p className="text-center text-zinc-500">No tricks match your filters.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {tricks.map((trick) => (
            <TrickCard key={trick.id} trick={trick} />
          ))}
        </div>
      )}
    </div>
  );
}
