"use client";

interface MovieTitleProps {
  movie: string;
  revealedLetters: number[];
  fullyRevealed: boolean;
}

export default function MovieTitle({ movie, revealedLetters, fullyRevealed }: MovieTitleProps) {
  if (fullyRevealed) {
    return (
      <div className="text-center animate-fade-in">
        <h2 className="font-marquee text-2xl md:text-4xl font-bold text-theater-gold animate-pulse-gold">
          {movie}
        </h2>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center gap-1 md:gap-2">
        {movie.split("").map((char, i) => {
          const isSpace = char === " ";
          const isPunctuation = ["'", ".", ":", "-", "!"].includes(char);
          const isRevealed = revealedLetters.includes(i) || isPunctuation;

          if (isSpace) {
            return <span key={i} className="w-3 md:w-4" />;
          }

          return (
            <span
              key={i}
              className={`
                inline-block w-6 h-8 md:w-8 md:h-10 text-center font-marquee text-lg md:text-2xl font-bold
                leading-8 md:leading-10
                ${isRevealed ? "letter-revealed" : "letter-blank"}
                transition-all duration-300
              `}
            >
              {isRevealed ? char : "_"}
            </span>
          );
        })}
      </div>
      <p className="text-xs text-theater-gold/40 mt-2 font-body">
        {movie.replace(/[^ ]/g, "_").split("").join("")}
        {" "}({movie.replace(/[^a-zA-Z]/g, "").length} letters)
      </p>
    </div>
  );
}
