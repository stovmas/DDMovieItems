"use client";

interface GameOverScreenProps {
  score: number;
  totalCorrect: number;
  totalPuzzles: number;
  onPlayAgain: () => void;
  onMenu: () => void;
}

function getGrade(correct: number, total: number) {
  const pct = correct / total;
  if (pct >= 0.9) return { label: "Movie Master 🏆", color: "text-theater-gold" };
  if (pct >= 0.7) return { label: "Film Buff 🎬", color: "text-green-400" };
  if (pct >= 0.5) return { label: "Casual Viewer 🍿", color: "text-blue-400" };
  if (pct >= 0.3) return { label: "Channel Surfer 📺", color: "text-yellow-400" };
  return { label: "Needs More Popcorn 🫠", color: "text-doordash-red" };
}

export default function GameOverScreen({
  score,
  totalCorrect,
  totalPuzzles,
  onPlayAgain,
  onMenu,
}: GameOverScreenProps) {
  const grade = getGrade(totalCorrect, totalPuzzles);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in">
      <div className="mb-8">
        <p className="text-theater-gold/50 font-marquee text-sm uppercase tracking-widest mb-2">
          Final Score
        </p>
        <p className="font-marquee text-6xl md:text-8xl font-black text-white animate-pulse-gold">
          {score.toLocaleString()}
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className={`font-marquee text-2xl md:text-3xl font-bold ${grade.color}`}>
          {grade.label}
        </p>
        <p className="text-gray-400 text-base font-body">
          {totalCorrect} out of {totalPuzzles} movies guessed correctly
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-10 max-w-xs w-full">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="text-2xl font-bold text-white">{totalCorrect}</p>
          <p className="text-xs text-gray-500">Correct</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="text-2xl font-bold text-white">{totalPuzzles - totalCorrect}</p>
          <p className="text-xs text-gray-500">Missed</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onPlayAgain}
          className="px-8 py-3 bg-doordash-red hover:bg-doordash-darkRed text-white font-bold
            rounded-full transition-all duration-200 active:scale-95 text-base
            shadow-lg shadow-doordash-red/20 hover:scale-105"
        >
          Play Again 🎬
        </button>
        <button
          onClick={onMenu}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold
            rounded-full transition-all duration-200 active:scale-95 text-base border border-white/20"
        >
          Menu
        </button>
      </div>
    </div>
  );
}
