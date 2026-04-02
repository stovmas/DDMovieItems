"use client";

import { useState, useCallback, useMemo } from "react";
import { MoviePuzzle, getRandomPuzzles } from "./puzzles";

export type GamePhase = "menu" | "playing" | "won" | "lost" | "gameover";

export interface GameState {
  phase: GamePhase;
  puzzles: MoviePuzzle[];
  currentPuzzleIndex: number;
  wrongGuesses: number;
  maxWrong: number;
  revealedItems: number[];
  revealedLetters: number[];
  guessHistory: { text: string; correct: boolean }[];
  score: number;
  streak: number;
  totalCorrect: number;
  totalPuzzles: number;
}

const MAX_WRONG = 6;
const PUZZLES_PER_GAME = 10;

function getInitialRevealedItems(puzzle: MoviePuzzle): number[] {
  // Start by showing 2 items
  return [0, 1];
}

function getLettersToReveal(movie: string, wrongGuesses: number): number[] {
  const indices: number[] = [];
  if (wrongGuesses < 3) return indices;

  const chars = movie.split("");
  const letterPositions: number[] = [];
  chars.forEach((ch, i) => {
    if (ch !== " " && ch !== "'" && ch !== "." && ch !== ":" && ch !== "-") {
      letterPositions.push(i);
    }
  });

  // Shuffle letter positions deterministically based on movie name
  const seeded = letterPositions.sort((a, b) => {
    const hashA = movie.charCodeAt(a % movie.length) * 31 + a;
    const hashB = movie.charCodeAt(b % movie.length) * 31 + b;
    return hashA - hashB;
  });

  // Reveal more letters as wrong guesses increase
  const revealCount = Math.min(
    Math.floor((wrongGuesses - 2) * (letterPositions.length / 5)),
    letterPositions.length - 1
  );

  return seeded.slice(0, revealCount);
}

export function useGameState() {
  const [state, setState] = useState<GameState>({
    phase: "menu",
    puzzles: [],
    currentPuzzleIndex: 0,
    wrongGuesses: 0,
    maxWrong: MAX_WRONG,
    revealedItems: [],
    revealedLetters: [],
    guessHistory: [],
    score: 0,
    streak: 0,
    totalCorrect: 0,
    totalPuzzles: PUZZLES_PER_GAME,
  });

  const currentPuzzle = useMemo(
    () => state.puzzles[state.currentPuzzleIndex] ?? null,
    [state.puzzles, state.currentPuzzleIndex]
  );

  const startGame = useCallback(() => {
    const puzzles = getRandomPuzzles(PUZZLES_PER_GAME);
    setState({
      phase: "playing",
      puzzles,
      currentPuzzleIndex: 0,
      wrongGuesses: 0,
      maxWrong: MAX_WRONG,
      revealedItems: getInitialRevealedItems(puzzles[0]),
      revealedLetters: [],
      guessHistory: [],
      score: 0,
      streak: 0,
      totalCorrect: 0,
      totalPuzzles: PUZZLES_PER_GAME,
    });
  }, []);

  const normalizeGuess = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const submitGuess = useCallback(
    (guess: string) => {
      if (!currentPuzzle || state.phase !== "playing") return;

      const normalizedGuess = normalizeGuess(guess);
      const normalizedAnswer = normalizeGuess(currentPuzzle.movie);

      // Check for partial matches too (e.g., "harry potter" matches "Harry Potter")
      const isCorrect =
        normalizedGuess === normalizedAnswer ||
        normalizedAnswer.includes(normalizedGuess) && normalizedGuess.length > 3;

      if (isCorrect) {
        // Won this round
        const bonusPoints = Math.max(0, (MAX_WRONG - state.wrongGuesses) * 100);
        const streakBonus = state.streak * 50;
        const newScore = state.score + 500 + bonusPoints + streakBonus;
        const newStreak = state.streak + 1;
        const newTotalCorrect = state.totalCorrect + 1;

        setState((prev) => ({
          ...prev,
          phase: "won",
          score: newScore,
          streak: newStreak,
          totalCorrect: newTotalCorrect,
          revealedItems: currentPuzzle.items.map((_, i) => i),
          guessHistory: [...prev.guessHistory, { text: guess, correct: true }],
        }));
      } else {
        const newWrong = state.wrongGuesses + 1;

        if (newWrong >= MAX_WRONG) {
          // Lost this round
          setState((prev) => ({
            ...prev,
            phase: "lost",
            wrongGuesses: newWrong,
            streak: 0,
            revealedItems: currentPuzzle.items.map((_, i) => i),
            guessHistory: [...prev.guessHistory, { text: guess, correct: false }],
          }));
        } else {
          // Continue guessing - reveal more clues
          let newRevealedItems = [...state.revealedItems];
          // Every 2 wrong guesses, reveal another item
          if (newWrong % 2 === 0) {
            const hiddenItems = currentPuzzle.items
              .map((_, i) => i)
              .filter((i) => !newRevealedItems.includes(i));
            if (hiddenItems.length > 0) {
              newRevealedItems.push(hiddenItems[0]);
            }
          }

          const newRevealedLetters = getLettersToReveal(currentPuzzle.movie, newWrong);

          setState((prev) => ({
            ...prev,
            wrongGuesses: newWrong,
            revealedItems: newRevealedItems,
            revealedLetters: newRevealedLetters,
            guessHistory: [...prev.guessHistory, { text: guess, correct: false }],
          }));
        }
      }
    },
    [currentPuzzle, state]
  );

  const nextPuzzle = useCallback(() => {
    const nextIndex = state.currentPuzzleIndex + 1;
    if (nextIndex >= state.puzzles.length) {
      setState((prev) => ({ ...prev, phase: "gameover" }));
    } else {
      setState((prev) => ({
        ...prev,
        phase: "playing",
        currentPuzzleIndex: nextIndex,
        wrongGuesses: 0,
        revealedItems: getInitialRevealedItems(prev.puzzles[nextIndex]),
        revealedLetters: [],
        guessHistory: [],
      }));
    }
  }, [state.currentPuzzleIndex, state.puzzles]);

  const goToMenu = useCallback(() => {
    setState((prev) => ({ ...prev, phase: "menu" }));
  }, []);

  return {
    state,
    currentPuzzle,
    startGame,
    submitGuess,
    nextPuzzle,
    goToMenu,
  };
}
