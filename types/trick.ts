export type TrickCategory = "psychology" | "mathematics" | "cards" | "words";

export type TrickDifficulty = "easy" | "medium" | "advanced";

export type TrickDuration = "under-1" | "1-3" | "3-plus";

export type TrickGoal =
  | "think-of-something"
  | "predict-number"
  | "cognitive-bias"
  | "mathematical";

export type ReliabilityTier = "guaranteed" | "usually" | "gamble";

export interface TrickStep {
  instruction: string;
  performerNote?: string;
  actionLabel: string;
}

export interface TrickChainItem {
  label: string;
  highlight?: boolean;
}

export interface Trick {
  id: string;
  title: string;
  emoji: string;
  shortDescription: string;
  category: TrickCategory;
  difficulty: TrickDifficulty;
  reliability: number;
  duration: TrickDuration;
  participants: number;
  tags: string[];
  goal: TrickGoal;
  popular?: boolean;
  steps: TrickStep[];
  reveal: {
    prefix?: string;
    emoji: string;
    answer: string;
    subtitle?: string;
  };
  explanation: {
    whatHappened: string;
    chain?: TrickChainItem[];
    details: string;
    failureCases?: string;
    tips?: string;
  };
}

export interface TrickFilters {
  difficulty?: TrickDifficulty[];
  category?: TrickCategory[];
  duration?: TrickDuration[];
  reliability?: ReliabilityTier[];
}
