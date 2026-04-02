"use client";

import { useState, useRef, useEffect } from "react";

interface GuessInputProps {
  onSubmit: (guess: string) => void;
  disabled: boolean;
  wrongGuesses: number;
  maxWrong: number;
}

export default function GuessInput({ onSubmit, disabled, wrongGuesses, maxWrong }: GuessInputProps) {
  const [value, setValue] = useState("");
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevWrong = useRef(wrongGuesses);

  useEffect(() => {
    if (wrongGuesses > prevWrong.current) {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
    prevWrong.current = wrongGuesses;
  }, [wrongGuesses]);

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSubmit(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${shaking ? "animate-shake" : ""}`}>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
          placeholder="Type your movie guess..."
          className="guess-input flex-1 px-4 py-3 rounded-lg text-base md:text-lg"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="px-6 py-3 bg-doordash-red hover:bg-doordash-darkRed text-white font-bold rounded-lg
            transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed
            active:scale-95 text-sm md:text-base"
        >
          Guess
        </button>
      </div>

      {/* Wrong guess tracker */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-1">
          {Array.from({ length: maxWrong }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                i < wrongGuesses
                  ? "bg-doordash-red scale-110"
                  : "bg-gray-700 border border-gray-600"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500 font-body">
          {maxWrong - wrongGuesses} guesses left
        </span>
      </div>
    </form>
  );
}
