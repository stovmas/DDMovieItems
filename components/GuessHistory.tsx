"use client";

interface GuessHistoryProps {
  guesses: { text: string; correct: boolean }[];
}

export default function GuessHistory({ guesses }: GuessHistoryProps) {
  if (guesses.length === 0) return null;

  return (
    <div className="mt-3">
      <p className="text-xs text-gray-500 mb-1 font-body">Previous guesses:</p>
      <div className="flex flex-wrap gap-2">
        {guesses.map((guess, i) => (
          <span
            key={i}
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all ${
              guess.correct
                ? "bg-green-900/50 text-green-400 border border-green-700"
                : "bg-red-900/30 text-red-400 border border-red-800/50"
            }`}
          >
            {guess.correct ? "✓" : "✗"} {guess.text}
          </span>
        ))}
      </div>
    </div>
  );
}
