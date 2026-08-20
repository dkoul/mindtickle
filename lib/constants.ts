import type {
  TrickCategory,
  TrickDifficulty,
  TrickDuration,
  TrickGoal,
  ReliabilityTier,
} from "@/types/trick";

export const CATEGORY_LABELS: Record<TrickCategory, string> = {
  psychology: "Psychology",
  mathematics: "Mathematics",
  cards: "Cards",
  words: "Words",
};

export const CATEGORY_EMOJI: Record<TrickCategory, string> = {
  psychology: "🧠",
  mathematics: "🔢",
  cards: "🃏",
  words: "🔤",
};

export const DIFFICULTY_LABELS: Record<TrickDifficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  advanced: "Advanced",
};

export const DURATION_LABELS: Record<TrickDuration, string> = {
  "under-1": "< 1 min",
  "1-3": "1–3 min",
  "3-plus": "3+ min",
};

export const RELIABILITY_LABELS: Record<ReliabilityTier, string> = {
  guaranteed: "Almost guaranteed",
  usually: "Usually works",
  gamble: "Psychological gamble",
};

export const GOAL_LABELS: Record<TrickGoal, string> = {
  "think-of-something": "Make them think of something",
  "predict-number": "Predict a number",
  "cognitive-bias": "Exploit a cognitive bias",
  mathematical: "Guaranteed mathematical trick",
};

export function reliabilityTier(reliability: number): ReliabilityTier {
  if (reliability >= 85) return "guaranteed";
  if (reliability >= 65) return "usually";
  return "gamble";
}

export function reliabilityLabel(reliability: number): string {
  if (reliability >= 85) return "High";
  if (reliability >= 65) return "Medium";
  return "Low";
}

export function difficultyStars(difficulty: TrickDifficulty): string {
  if (difficulty === "easy") return "⭐";
  if (difficulty === "medium") return "⭐⭐";
  return "⭐⭐⭐";
}
