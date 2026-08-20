import { tricks } from "@/data/tricks";
import { reliabilityTier } from "@/lib/constants";
import type { Trick, TrickFilters } from "@/types/trick";

export function getAllTricks(): Trick[] {
  return tricks;
}

export function getTrickById(id: string): Trick | undefined {
  return tricks.find((t) => t.id === id);
}

export function getPopularTricks(): Trick[] {
  return tricks.filter((t) => t.popular);
}

export function filterTricks(filters: TrickFilters): Trick[] {
  return tricks.filter((trick) => {
    if (filters.difficulty?.length && !filters.difficulty.includes(trick.difficulty)) {
      return false;
    }
    if (filters.category?.length && !filters.category.includes(trick.category)) {
      return false;
    }
    if (filters.duration?.length && !filters.duration.includes(trick.duration)) {
      return false;
    }
    if (filters.reliability?.length) {
      const tier = reliabilityTier(trick.reliability);
      if (!filters.reliability.includes(tier)) return false;
    }
    return true;
  });
}

export function getRandomTrick(excludeId?: string): Trick {
  const pool = excludeId
    ? tricks.filter((t) => t.id !== excludeId)
    : tricks;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getTricksByGoal(goal: Trick["goal"]): Trick[] {
  return tricks.filter((t) => t.goal === goal);
}

export function searchTricks(query: string): Trick[] {
  const q = query.toLowerCase().trim();
  if (!q) return tricks;
  return tricks.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.shortDescription.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.includes(q))
  );
}
