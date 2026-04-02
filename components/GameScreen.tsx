"use client";

import { MoviePuzzle } from "@/lib/puzzles";
import { GameState } from "@/lib/useGameState";
import DoorDashCart from "./DoorDashCart";
import MovieTitle from "./MovieTitle";
import GuessInput from "./GuessInput";
import GuessHistory from "./GuessHistory";
import ScoreBoard from "./ScoreBoard";
import Confetti from "./Confetti";

interface GameScreenProps {
  state: GameState;
  puzzle: MoviePuzzle;
  onGuess: (guess: string) => void;
  onNext: () => void;
}

export default function GameScreen({ state, puzzle, onGuess, onNext }: GameScreenProps) {
  const isRoundOver = state.phase === "won" || state.phase === "lost";

  return (
    <div className="animate-fade-in">
      <Confetti active={state.phase === "won"} />

      {/* Scoreboard */}
      <ScoreBoard
        score={state.score}
        streak={state.streak}
        currentPuzzle={state.currentPuzzleIndex}
        totalPuzzles={state.totalPuzzles}
      />

      <div className="mt-4 md:mt-6 space-y-5 md:space-y-6">
        {/* Prompt */}
        <div className="text-center">
          <p className="text-theater-gold/70 font-marquee text-sm md:text-base italic">
            What movie is this DoorDash order for?
          </p>
        </div>

        {/* Cart */}
        <DoorDashCart
          items={puzzle.items}
          revealedIndices={state.revealedItems}
          allRevealed={isRoundOver}
        />

        {/* Movie title blanks / reveal */}
        <MovieTitle
          movie={puzzle.movie}
          revealedLetters={state.revealedLetters}
          fullyRevealed={isRoundOver}
        />

        {/* Hint - shows after 4 wrong */}
        {state.wrongGuesses >= 4 && !isRoundOver && (
          <p className="text-center text-sm text-theater-gold/60 font-marquee italic animate-fade-in">
            💡 &ldquo;{puzzle.hint}&rdquo;
          </p>
        )}

        {/* Input or result */}
        {!isRoundOver ? (
          <>
            <GuessInput
              onSubmit={onGuess}
              disabled={false}
              wrongGuesses={state.wrongGuesses}
              maxWrong={state.maxWrong}
            />
            <GuessHistory guesses={state.guessHistory} />
          </>
        ) : (
          <div className="text-center space-y-4 animate-slide-up">
            {state.phase === "won" ? (
              <div>
                <p className="text-green-400 font-marquee text-xl md:text-2xl font-bold">
                  🎬 Correct!
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {puzzle.movie} ({puzzle.year})
                </p>
                {state.streak > 1 && (
                  <p className="text-doordash-red text-sm font-bold mt-1">
                    🔥 {state.streak} streak bonus!
                  </p>
                )}
              </div>
            ) : (
              <div>
                <p className="text-doordash-red font-marquee text-xl md:text-2xl font-bold">
                  Not quite!
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  The answer was <span className="text-theater-gold font-bold">{puzzle.movie}</span>{" "}
                  ({puzzle.year})
                </p>
              </div>
            )}

            <button
              onClick={onNext}
              className="px-8 py-3 bg-doordash-red hover:bg-doordash-darkRed text-white font-bold
                rounded-full transition-all duration-200 active:scale-95 text-base md:text-lg
                shadow-lg shadow-doordash-red/20"
            >
              {state.currentPuzzleIndex < state.totalPuzzles - 1 ? "Next Order →" : "See Results"}
            </button>

            <GuessHistory guesses={state.guessHistory} />
          </div>
        )}
      </div>
    </div>
  );
}
