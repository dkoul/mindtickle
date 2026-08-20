import type { Trick } from "@/types/trick";

export const tricks: Trick[] = [
  {
    id: "elephant",
    title: "The Elephant",
    emoji: "🐘",
    shortDescription: "Make them think of Elephant.",
    category: "psychology",
    difficulty: "easy",
    reliability: 85,
    duration: "under-1",
    participants: 1,
    tags: ["psychology", "word-association", "force"],
    goal: "think-of-something",
    popular: true,
    steps: [
      {
        instruction: "Ask them to think of the name of a female friend.",
        performerNote: "Almost any female name ends in A — Anna, Emma, Sarah, etc.",
        actionLabel: "They've done it",
      },
      {
        instruction: "Ask them for the last letter of that name.",
        performerNote: "You'll almost certainly get A.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask them to think of a country beginning with that letter.",
        performerNote: "Austria, Australia, America — all funnel to A again.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask for the last letter of the country.",
        performerNote: "Again, almost always A.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask them to think of a fruit beginning with that letter.",
        performerNote: "Apple is the overwhelming choice.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask for the last letter of the fruit.",
        performerNote: "Apple ends in E.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask them to think of an animal beginning with that letter.",
        performerNote: "Elephant is the classic association for E.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "You thought of...",
      emoji: "🐘",
      answer: "ELEPHANT",
      subtitle: "You probably thought of an elephant.",
    },
    explanation: {
      whatHappened:
        "The chain deliberately funnels people toward A → A → Apple → E → Elephant.",
      chain: [
        { label: "Female name" },
        { label: "A", highlight: true },
        { label: "Country" },
        { label: "A", highlight: true },
        { label: "Apple", highlight: true },
        { label: "E", highlight: true },
        { label: "🐘 Elephant", highlight: true },
      ],
      details:
        "The trick doesn't actually predict the first choice. It narrows the possible choices at every step until the final answer becomes highly likely.",
      failureCases:
        "If they pick a name ending in E (like Sophie), the chain shifts — but Elephant still appears often.",
      tips: "Speak slowly and confidently. Don't rush the steps.",
    },
  },
  {
    id: "green-hammer",
    title: "Green Hammer",
    emoji: "🔨",
    shortDescription: "Prime them to think of a green hammer.",
    category: "psychology",
    difficulty: "easy",
    reliability: 75,
    duration: "under-1",
    participants: 1,
    tags: ["psychology", "priming", "color"],
    goal: "cognitive-bias",
    popular: true,
    steps: [
      {
        instruction: "Tell them you'll ask a few quick questions. They should answer as fast as possible.",
        performerNote: "Speed reduces deliberate thinking.",
        actionLabel: "Start questions",
      },
      {
        instruction: "Ask quickly: What color is grass?",
        performerNote: "They'll say green.",
        actionLabel: "Next",
      },
      {
        instruction: "Ask: What color is the sky on a clear day?",
        performerNote: "Blue — sets a color-answer rhythm.",
        actionLabel: "Next",
      },
      {
        instruction: "Ask: What do you use to hit a nail?",
        performerNote: "Hammer — the tool is now primed.",
        actionLabel: "Next",
      },
      {
        instruction: "Ask: What color is an apple?",
        performerNote: "Red or green — green is common here.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "You thought of...",
      emoji: "🔨",
      answer: "GREEN HAMMER",
      subtitle: "A green hammer, right?",
    },
    explanation: {
      whatHappened: "You were influenced by priming.",
      details:
        "The words and pace of the interaction increased the probability of certain associations. Green (from grass and apple) and hammer (from the nail question) combine in memory.",
      failureCases: "Some people say red hammer or just hammer. Acknowledge close guesses.",
      tips: "Maintain a brisk, playful pace. Don't give them time to overthink.",
    },
  },
  {
    id: "number-7",
    title: "The Number 7",
    emoji: "7️⃣",
    shortDescription: "They'll pick 7 from 1–10.",
    category: "psychology",
    difficulty: "easy",
    reliability: 70,
    duration: "under-1",
    participants: 1,
    tags: ["psychology", "numbers", "bias"],
    goal: "predict-number",
    steps: [
      {
        instruction: "Ask them to think of a number between 1 and 10.",
        performerNote: "Don't say 'random' — it invites overthinking.",
        actionLabel: "They've picked",
      },
      {
        instruction: "Tell them to hold that number in their mind.",
        performerNote: "A moment of focus increases commitment to the choice.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "You're thinking of...",
      emoji: "7️⃣",
      answer: "7",
      subtitle: "The most 'random' number people choose.",
    },
    explanation: {
      whatHappened: "Seven feels random but isn't.",
      details:
        "Studies show 7 is the most common answer when people are asked for a 'random' number between 1 and 10. It sits in the middle, feels special, and avoids the obvious 5.",
      failureCases: "3 and 5 are also common. This trick is a gamble, not a guarantee.",
      tips: "If wrong, pivot: 'Interesting — you're less predictable than most people.'",
    },
  },
  {
    id: "number-37",
    title: "The Number 37",
    emoji: "🎯",
    shortDescription: "Force them toward 37.",
    category: "psychology",
    difficulty: "medium",
    reliability: 72,
    duration: "1-3",
    participants: 1,
    tags: ["psychology", "numbers", "force"],
    goal: "predict-number",
    popular: true,
    steps: [
      {
        instruction: "Ask them to think of a two-digit number where both digits are odd and not equal.",
        performerNote: "This eliminates most pairs — leaves 13, 15, 17, 19, 35, 37, 39, etc.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask them to add the two digits together.",
        performerNote: "For 37: 3+7=10. For 35: 3+5=8.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask them to subtract that sum from the original number.",
        performerNote: "37 - 10 = 27. This step is misdirection — you're building engagement.",
        actionLabel: "Continue",
      },
      {
        instruction: "Tell them to think of the original number they chose.",
        performerNote: "Re-focusing on the first choice strengthens it.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "Your number is...",
      emoji: "🎯",
      answer: "37",
      subtitle: "Odd digits, feels random — but it's the crowd favorite.",
    },
    explanation: {
      whatHappened: "People choose numbers that feel random rather than genuinely random.",
      details:
        "37 is often called the most random two-digit number. It's odd, not on a clock face, and avoids round numbers. The math steps are misdirection — they don't change the number they first thought of.",
      failureCases: "35, 39, and 13 are runners-up. Know your backup lines.",
      tips: "The math steps make the trick feel more legitimate. Perform them confidently.",
    },
  },
  {
    id: "psychological-force",
    title: "Red Hammer",
    emoji: "🔴",
    shortDescription: "A rapid-fire force to red hammer.",
    category: "psychology",
    difficulty: "easy",
    reliability: 78,
    duration: "under-1",
    participants: 1,
    tags: ["psychology", "force", "speed"],
    goal: "cognitive-bias",
    steps: [
      {
        instruction: "Tell them to answer your next questions instantly — no thinking.",
        performerNote: "Speed is the entire mechanism.",
        actionLabel: "Begin",
      },
      {
        instruction: "What day comes after Monday?",
        actionLabel: "Next",
      },
      {
        instruction: "What month comes after June?",
        actionLabel: "Next",
      },
      {
        instruction: "What number comes after five?",
        actionLabel: "Next",
      },
      {
        instruction: "What color is a fire truck?",
        actionLabel: "Next",
      },
      {
        instruction: "Quick — think of a tool and a color. Say them together.",
        performerNote: "Red + hammer is primed from fire truck and nail associations.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "You thought of...",
      emoji: "🔴",
      answer: "RED HAMMER",
      subtitle: "Red hammer — am I right?",
    },
    explanation: {
      whatHappened: "Rapid questioning bypasses deliberate choice.",
      details:
        "When forced to answer quickly, the brain retrieves the most accessible association. Red (fire truck) and hammer (common tool) surface together.",
      tips: "Increase pace with each question. The final prompt should feel urgent.",
    },
  },
  {
    id: "priming-trick",
    title: "The Priming Trick",
    emoji: "💭",
    shortDescription: "Words you say shape what they think.",
    category: "psychology",
    difficulty: "medium",
    reliability: 68,
    duration: "1-3",
    participants: 1,
    tags: ["psychology", "priming", "language"],
    goal: "cognitive-bias",
    steps: [
      {
        instruction: "Read these words aloud, one at a time. They just listen.",
        performerNote: "Doctor, nurse, hospital, bed, sick, medicine, patient, heal.",
        actionLabel: "Words read",
      },
      {
        instruction: "Ask them to complete this word: S O _ P",
        performerNote: "Most will say SOAP, not SOUP — primed by medical words.",
        actionLabel: "Continue",
      },
      {
        instruction: "Now ask them to think of a profession.",
        performerNote: "Doctor or nurse are highly likely.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "You're thinking of...",
      emoji: "👨‍⚕️",
      answer: "DOCTOR",
      subtitle: "Or maybe nurse — something medical?",
    },
    explanation: {
      whatHappened: "Priming activated a medical schema in their mind.",
      details:
        "Exposure to related words makes certain concepts more accessible. This is a well-studied phenomenon in cognitive psychology — priming affects perception and recall without conscious awareness.",
      failureCases: "If they weren't paying attention to the word list, results weaken.",
      tips: "Read the words with neutral tone — don't emphasize medical context.",
    },
  },
  {
    id: "1089",
    title: "1089",
    emoji: "🔢",
    shortDescription: "Math always leads to 1089.",
    category: "mathematics",
    difficulty: "medium",
    reliability: 100,
    duration: "1-3",
    participants: 1,
    tags: ["mathematics", "guaranteed", "numbers"],
    goal: "mathematical",
    popular: true,
    steps: [
      {
        instruction: "Ask them to pick any 3-digit number where the first and last digits differ by at least 2.",
        performerNote: "Example: 421 or 853. Not 121.",
        actionLabel: "Continue",
      },
      {
        instruction: "Have them reverse the digits and subtract the smaller from the larger.",
        performerNote: "421 - 124 = 297.",
        actionLabel: "Continue",
      },
      {
        instruction: "Reverse that result and add it to itself.",
        performerNote: "297 + 792 = 1089. Always.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "Your answer is...",
      emoji: "🔢",
      answer: "1089",
      subtitle: "Every time. Pure mathematics.",
    },
    explanation: {
      whatHappened: "This isn't psychology — it's algebra.",
      details:
        "For any valid starting number, the reverse-and-subtract step always yields a multiple of 99. Reversing and adding always produces 1089. It's mathematically guaranteed.",
      tips: "Let them use a calculator. The math is the spectacle.",
    },
  },
  {
    id: "birthday-calculator",
    title: "Birthday Calculator",
    emoji: "🎂",
    shortDescription: "Reveal their birthday with math.",
    category: "mathematics",
    difficulty: "advanced",
    reliability: 100,
    duration: "3-plus",
    participants: 1,
    tags: ["mathematics", "birthday", "calculation"],
    goal: "mathematical",
    steps: [
      {
        instruction: "Ask for the number of the month they were born (January = 1).",
        actionLabel: "Continue",
      },
      {
        instruction: "Multiply that by 5.",
        actionLabel: "Continue",
      },
      {
        instruction: "Add 6 to the result.",
        actionLabel: "Continue",
      },
      {
        instruction: "Multiply by 4.",
        actionLabel: "Continue",
      },
      {
        instruction: "Subtract 7 from the result.",
        actionLabel: "Continue",
      },
      {
        instruction: "Multiply by 5.",
        actionLabel: "Continue",
      },
      {
        instruction: "Add the day of their birth.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask for their final number and subtract 165.",
        performerNote: "The result encodes month and day: first digit(s) = month, last two = day.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "Your birthday is...",
      emoji: "🎂",
      answer: "THEIR BIRTHDAY",
      subtitle: "Decode the number: month + day.",
    },
    explanation: {
      whatHappened: "The operations encode their birthday into a single number.",
      details:
        "After subtracting 165, the remaining number reveals the birthday. For example, 723 means July 23rd. The algebra is designed to pack month and day into one value.",
      tips: "Practice decoding a few numbers before performing. Write down their final number.",
    },
  },
  {
    id: "magic-number",
    title: "Magic Number",
    emoji: "✨",
    shortDescription: "Everyone arrives at the same number.",
    category: "mathematics",
    difficulty: "easy",
    reliability: 100,
    duration: "1-3",
    participants: 1,
    tags: ["mathematics", "guaranteed"],
    goal: "mathematical",
    steps: [
      {
        instruction: "Ask them to think of any number.",
        actionLabel: "Continue",
      },
      {
        instruction: "Multiply it by 2.",
        actionLabel: "Continue",
      },
      {
        instruction: "Add 8.",
        actionLabel: "Continue",
      },
      {
        instruction: "Divide by 2.",
        actionLabel: "Continue",
      },
      {
        instruction: "Subtract the original number.",
        performerNote: "The original number cancels out — everyone gets 4.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "Your answer is...",
      emoji: "4️⃣",
      answer: "4",
      subtitle: "No matter what number they started with.",
    },
    explanation: {
      whatHappened: "The original number cancels itself out algebraically.",
      details:
        "If x is the starting number: (2x + 8) / 2 - x = x + 4 - x = 4. The trick works for any starting value.",
      tips: "Perform this quickly — the math feels more magical when it flows.",
    },
  },
  {
    id: "age-prediction",
    title: "Age Prediction",
    emoji: "🎭",
    shortDescription: "Guess their age with a formula.",
    category: "mathematics",
    difficulty: "medium",
    reliability: 100,
    duration: "1-3",
    participants: 1,
    tags: ["mathematics", "age"],
    goal: "predict-number",
    steps: [
      {
        instruction: "Ask them to multiply the first digit of their age by 5.",
        performerNote: "For age 25, first digit is 2.",
        actionLabel: "Continue",
      },
      {
        instruction: "Add 3 to the result.",
        actionLabel: "Continue",
      },
      {
        instruction: "Multiply by 2.",
        actionLabel: "Continue",
      },
      {
        instruction: "Add the second digit of their age.",
        performerNote: "For 25, add 5.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask for the final number.",
        performerNote: "Subtract 6, then divide by 10 to get their age.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "You are...",
      emoji: "🎭",
      answer: "THEIR AGE",
      subtitle: "Years old — calculated from your number.",
    },
    explanation: {
      whatHappened: "The formula encodes both digits of their age.",
      details:
        "After they give you the final number, subtract 6 and divide by 10. The result is their age. The operations separate and recombine the two digits.",
      failureCases: "Works best for ages 10–99. Single-digit ages need adjustment.",
      tips: "Do the mental math before revealing. Pause as if you're 'reading' them.",
    },
  },
  {
    id: "digit-prediction",
    title: "Digit Prediction",
    emoji: "📱",
    shortDescription: "Predict a digit from their phone number.",
    category: "mathematics",
    difficulty: "medium",
    reliability: 100,
    duration: "1-3",
    participants: 1,
    tags: ["mathematics", "digits"],
    goal: "predict-number",
    steps: [
      {
        instruction: "Ask them to write down their phone number (or imagine it).",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask them to pick any digit from the number and remember it.",
        actionLabel: "Continue",
      },
      {
        instruction: "Have them add all the digits of the phone number together.",
        performerNote: "Phone digits sum to a multiple of 9 (for valid numbers).",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask them to subtract their chosen digit from that sum.",
        performerNote: "Result is still a multiple of 9.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "Your digit is...",
      emoji: "9️⃣",
      answer: "A MULTIPLE OF 9",
      subtitle: "The remaining sum reveals the missing digit.",
    },
    explanation: {
      whatHappened: "Digit sums of phone numbers follow modular arithmetic.",
      details:
        "If the digit sum minus their digit equals X, their digit is (original sum mod 9) or can be calculated from what's 'missing' to reach the nearest multiple of 9.",
      tips: "This works with any long number. Practice with your own phone number first.",
    },
  },
  {
    id: "21-cards",
    title: "21 Cards",
    emoji: "🃏",
    shortDescription: "Find their card in three piles.",
    category: "cards",
    difficulty: "medium",
    reliability: 100,
    duration: "3-plus",
    participants: 1,
    tags: ["cards", "mentalism", "classic"],
    goal: "mathematical",
    popular: true,
    steps: [
      {
        instruction: "Deal 21 cards face-up into 3 columns of 7.",
        performerNote: "They pick a card mentally — don't say which.",
        actionLabel: "Cards dealt",
      },
      {
        instruction: "Ask which column their card is in. Gather piles with their column in the middle.",
        actionLabel: "Round 1 done",
      },
      {
        instruction: "Deal into 3 columns again. Ask which column. Gather with their column in the middle.",
        actionLabel: "Round 2 done",
      },
      {
        instruction: "Deal one more time. Ask which column. Gather with their column in the middle.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "Your card is...",
      emoji: "🃏",
      answer: "THE 11TH CARD",
      subtitle: "The middle card of the deck — every time.",
    },
    explanation: {
      whatHappened: "Three rounds of column selection pinpoint one card.",
      details:
        "Each round narrows 7 cards to 1. After 3 rounds, the chosen card is always at position 11 in the final deck. It's a classic mathematical card trick.",
      tips: "Practice the dealing and gathering smoothly. Misplacing a column breaks the trick.",
    },
  },
  {
    id: "which-object",
    title: "Which Object?",
    emoji: "👁️",
    shortDescription: "Sense which object they're thinking of.",
    category: "cards",
    difficulty: "medium",
    reliability: 65,
    duration: "1-3",
    participants: 1,
    tags: ["mentalism", "objects", "cold-reading"],
    goal: "think-of-something",
    steps: [
      {
        instruction: "Place 5 different objects on the table (pen, coin, key, etc.).",
        actionLabel: "Ready",
      },
      {
        instruction: "Ask them to point at two objects.",
        actionLabel: "Continue",
      },
      {
        instruction: "Remove the two they pointed at.",
        performerNote: "Now 3 remain.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask them to point at one of the remaining three.",
        actionLabel: "Continue",
      },
      {
        instruction: "Remove that object and one other (not the one they might be thinking of).",
        performerNote: "Use misdirection — watch their eyes and hesitation.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "You're thinking of...",
      emoji: "👁️",
      answer: "THE REMAINING OBJECT",
      subtitle: "The one left on the table.",
    },
    explanation: {
      whatHappened: "Elimination plus subtle body language cues.",
      details:
        "Each pointing round narrows choices. Watch for micro-reactions when removing objects — hesitation, glances, and relief reveal the chosen item.",
      failureCases: "Without reading body language, this is ~33% after the last step.",
      tips: "Combine the math of elimination with genuine observation skills.",
    },
  },
  {
    id: "think-of-number",
    title: "Think of a Number",
    emoji: "🔮",
    shortDescription: "Classic number mind-reading setup.",
    category: "cards",
    difficulty: "easy",
    reliability: 70,
    duration: "1-3",
    participants: 1,
    tags: ["mentalism", "numbers"],
    goal: "predict-number",
    steps: [
      {
        instruction: "Ask them to think of a number between 1 and 100.",
        performerNote: "Most pick between 1 and 20, with 17 and 37 as favorites.",
        actionLabel: "Continue",
      },
      {
        instruction: "Tell them to double it.",
        actionLabel: "Continue",
      },
      {
        instruction: "Add 10.",
        actionLabel: "Continue",
      },
      {
        instruction: "Divide by 2.",
        actionLabel: "Continue",
      },
      {
        instruction: "Subtract the original number.",
        performerNote: "Everyone gets 5. Reveal 5, then pivot to their original number.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "The answer is...",
      emoji: "5️⃣",
      answer: "5",
      subtitle: "And your original number was... 17? Or 37?",
    },
    explanation: {
      whatHappened: "The math forces 5, then you cold-read the original.",
      details:
        "The algebraic trick always yields 5. Use that moment of surprise to guess their original number — 17, 37, and 7 are the most common choices.",
      tips: "If your guess is wrong, the math trick still succeeded. Pivot gracefully.",
    },
  },
  {
    id: "hidden-prediction",
    title: "Hidden Prediction",
    emoji: "📝",
    shortDescription: "A prediction written before the trick.",
    category: "cards",
    difficulty: "easy",
    reliability: 80,
    duration: "1-3",
    participants: 1,
    tags: ["mentalism", "prediction", "classic"],
    goal: "think-of-something",
    steps: [
      {
        instruction: "Before starting, secretly write 'ELEPHANT' on a hidden note.",
        performerNote: "Or use the Elephant trick's chain to justify the prediction.",
        actionLabel: "Prediction hidden",
      },
      {
        instruction: "Run the Elephant word chain (name → country → fruit → animal).",
        performerNote: "See The Elephant trick for the full sequence.",
        actionLabel: "Continue",
      },
      {
        instruction: "Dramatically reveal your written prediction.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "I wrote this before we started...",
      emoji: "📝",
      answer: "ELEPHANT",
      subtitle: "Written before you even began thinking.",
    },
    explanation: {
      whatHappened: "The prediction exploits the same psychological forces as the Elephant trick.",
      details:
        "Writing the prediction in advance creates a powerful illusion of foresight. Combined with a force chain, the written word matches their mental image.",
      tips: "Fold the note tightly. Reveal it only after they've committed to their answer.",
    },
  },
  {
    id: "country-fruit-animal",
    title: "Country → Fruit → Animal",
    emoji: "🌍",
    shortDescription: "The classic association chain.",
    category: "words",
    difficulty: "easy",
    reliability: 82,
    duration: "under-1",
    participants: 1,
    tags: ["words", "association", "chain"],
    goal: "think-of-something",
    steps: [
      {
        instruction: "Ask them to name a country.",
        performerNote: "Turkey, France, or Denmark are common — watch the last letter.",
        actionLabel: "Continue",
      },
      {
        instruction: "Take the last letter. Ask for a fruit starting with that letter.",
        performerNote: "Many countries end in E → Elderberry or... they often skip to Apple mentally.",
        actionLabel: "Continue",
      },
      {
        instruction: "Take the last letter of the fruit. Ask for an animal.",
        performerNote: "Apple → E → Elephant. Kiwi → I → Ibis.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "Your animal is...",
      emoji: "🐘",
      answer: "ELEPHANT",
      subtitle: "If they went Apple, it's almost always Elephant.",
    },
    explanation: {
      whatHappened: "Letter chains funnel choices through common associations.",
      details:
        "Each step reduces freedom. Countries ending in A lead to Apple, which leads to Elephant. The performer guides without restricting openly.",
      tips: "If they pick Denmark (ends in K), suggest Kiwi → I → Ibis as your backup reveal.",
    },
  },
  {
    id: "letter-forces",
    title: "Letter Forces",
    emoji: "🔤",
    shortDescription: "Steer them to a specific letter.",
    category: "words",
    difficulty: "medium",
    reliability: 75,
    duration: "1-3",
    participants: 1,
    tags: ["words", "letters", "force"],
    goal: "think-of-something",
    steps: [
      {
        instruction: "Ask them to think of a word with exactly 5 letters.",
        performerNote: "APPLE, HOUSE, WATER are common.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask for the third letter of their word.",
        performerNote: "For APPLE it's P. For HOUSE it's U. For WATER it's T.",
        actionLabel: "Continue",
      },
      {
        instruction: "Ask them to think of an animal starting with that letter.",
        performerNote: "Guide with energy — 'something strong, something wild.'",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "You're thinking of...",
      emoji: "🐘",
      answer: "ELEPHANT",
      subtitle: "If they had APPLE — P → Panda? Or did you steer to E?",
    },
    explanation: {
      whatHappened: "Word choice plus suggestion narrows the outcome.",
      details:
        "By suggesting common 5-letter words subtly ('think of something you'd find in a kitchen'), you increase the chance of APPLE, leading to P or steering toward E through mishearing.",
      tips: "Advanced performers combine this with verbal misdirection.",
    },
  },
  {
    id: "word-association",
    title: "Word Association",
    emoji: "🔗",
    shortDescription: "Predict their free association.",
    category: "words",
    difficulty: "easy",
    reliability: 68,
    duration: "under-1",
    participants: 1,
    tags: ["words", "association"],
    goal: "cognitive-bias",
    steps: [
      {
        instruction: "Say a word: 'Ocean.' Ask them to say the first word that comes to mind.",
        performerNote: "Common: wave, blue, water, beach.",
        actionLabel: "Continue",
      },
      {
        instruction: "Take their word. Say it back. Ask for another association.",
        performerNote: "Water → drink, blue → sky, beach → sand.",
        actionLabel: "Continue",
      },
      {
        instruction: "One more round of association.",
        performerNote: "By now you're deep in a semantic neighborhood.",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "Your mind went to...",
      emoji: "🏖️",
      answer: "BEACH / SAND / WATER",
      subtitle: "Somewhere in that chain.",
    },
    explanation: {
      whatHappened: "Associations cluster in semantic neighborhoods.",
      details:
        "Words don't trigger random connections — they activate related concepts in a network. Ocean leads to water-adjacent ideas within 2-3 steps.",
      tips: "Listen carefully each round. Your reveal can match any word in the chain.",
    },
  },
  {
    id: "last-letter-prediction",
    title: "Last Letter Prediction",
    emoji: "🔮",
    shortDescription: "Predict the last letter they'll land on.",
    category: "words",
    difficulty: "medium",
    reliability: 80,
    duration: "1-3",
    participants: 1,
    tags: ["words", "letters", "chain"],
    goal: "think-of-something",
    steps: [
      {
        instruction: "Ask them to name any animal.",
        performerNote: "Dog (G), Cat (T), Lion (N) — note the last letter.",
        actionLabel: "Continue",
      },
      {
        instruction: "Think of a country starting with that last letter.",
        performerNote: "G → Germany, T → Thailand, N → Norway.",
        actionLabel: "Continue",
      },
      {
        instruction: "Take the last letter of the country. Name a fruit with that letter.",
        performerNote: "Germany → Y is hard, so they may pick Grape. Norway → Y → Yellow fruit?",
        actionLabel: "Reveal",
      },
    ],
    reveal: {
      prefix: "You ended up at...",
      emoji: "🍇",
      answer: "GRAPE",
      subtitle: "Or a word in the G/Y cluster.",
    },
    explanation: {
      whatHappened: "Starting with common animals funnels toward predictable letter paths.",
      details:
        "Dog → Germany → Grape is a frequent chain. The performer can steer by suggesting 'a common pet' to start.",
      tips: "If they pick Cat → Thailand → Tomato, reveal Tomato instead. Flexibility is key.",
    },
  },
];
