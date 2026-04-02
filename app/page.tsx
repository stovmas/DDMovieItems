"use client";

import { useGameState } from "@/lib/useGameState";
import TheaterFrame from "@/components/TheaterFrame";
import MenuScreen from "@/components/MenuScreen";
import GameScreen from "@/components/GameScreen";
import GameOverScreen from "@/components/GameOverScreen";

export default function Home() {
  const { state, currentPuzzle, startGame, submitGuess, nextPuzzle, goToMenu } = useGameState();

  return (
    <TheaterFrame>
      {state.phase === "menu" && <MenuScreen onStart={startGame} />}

      {(state.phase === "playing" || state.phase === "won" || state.phase === "lost") &&
        currentPuzzle && (
          <GameScreen
            state={state}
            puzzle={currentPuzzle}
            onGuess={submitGuess}
            onNext={nextPuzzle}
          />
        )}

      {state.phase === "gameover" && (
        <GameOverScreen
          score={state.score}
          totalCorrect={state.totalCorrect}
          totalPuzzles={state.totalPuzzles}
          onPlayAgain={startGame}
          onMenu={goToMenu}
        />
      )}
    </TheaterFrame>
  );
}
