"use client";

interface ScoreBoardProps {
  score: number;
  streak: number;
  currentPuzzle: number;
  totalPuzzles: number;
}

export default function ScoreBoard({ score, streak, currentPuzzle, totalPuzzles }: ScoreBoardProps) {
  return (
    <div className="flex items-center justify-between text-sm font-body">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span className="text-theater-gold text-xs">SCORE</span>
          <span className="text-white font-bold text-lg tabular-nums">{score.toLocaleString()}</span>
        </div>
        {streak > 1 && (
          <div className="flex items-center gap-1 animate-fade-in">
            <span className="text-doordash-red text-xs">STREAK</span>
            <span className="text-doordash-red font-bold text-lg">🔥{streak}</span>
          </div>
        )}
      </div>
      <div className="text-gray-400 text-xs">
        Round <span className="text-white font-bold">{currentPuzzle + 1}</span> / {totalPuzzles}
      </div>
    </div>
  );
}
