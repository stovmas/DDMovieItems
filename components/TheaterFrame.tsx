"use client";

import { useEffect, useState } from "react";

function LightBulb({ delay }: { delay: number }) {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setOn((prev) => !prev);
    }, 1200 + delay * 200);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <span
      className={`light-bulb ${on ? "light-bulb-on" : "light-bulb-off"}`}
      style={{
        animationDelay: `${delay * 0.15}s`,
        transition: "all 0.3s ease",
      }}
    />
  );
}

function LightStrip({ count, className }: { count: number; className?: string }) {
  return (
    <div className={`flex justify-between items-center ${className ?? ""}`}>
      {Array.from({ length: count }).map((_, i) => (
        <LightBulb key={i} delay={i} />
      ))}
    </div>
  );
}

function CurtainPanel({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div
      className={`relative flex-shrink-0 w-12 md:w-24 lg:w-36 xl:w-44 ${
        isLeft ? "curtain-left" : "curtain-right"
      }`}
    >
      {/* Fabric folds */}
      <div className={`absolute inset-0 ${isLeft ? "curtain-folds-left" : "curtain-folds-right"}`} />

      {/* Top valance / swag drape */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <div className="curtain-swag" style={{ height: "80px" }}>
          <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id={`swag-${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A0404" />
                <stop offset="40%" stopColor="#8B0000" />
                <stop offset="100%" stopColor={isLeft ? "#6B0000" : "#6B0000"} />
              </linearGradient>
            </defs>
            <path
              d={
                isLeft
                  ? "M0,0 L200,0 L200,10 Q150,70 100,50 Q50,30 0,60 Z"
                  : "M0,0 L200,0 L200,60 Q150,30 100,50 Q50,70 0,10 Z"
              }
              fill={`url(#swag-${side})`}
            />
            {/* Gold fringe along the swag edge */}
            <path
              d={
                isLeft
                  ? "M200,10 Q150,70 100,50 Q50,30 0,60"
                  : "M200,60 Q150,30 100,50 Q50,70 0,10"
              }
              fill="none"
              stroke="#DAA520"
              strokeWidth="2"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      {/* Gold rope / tassel accent */}
      <div
        className={`absolute top-16 md:top-20 ${
          isLeft ? "right-0 mr-1 md:mr-2" : "left-0 ml-1 md:ml-2"
        } z-10`}
      >
        <div className="flex flex-col items-center">
          <div className="w-1 md:w-1.5 h-12 md:h-20 bg-gradient-to-b from-theater-gold/80 via-theater-goldDark to-theater-gold/60 rounded-full" />
          <div className="w-3 md:w-5 h-3 md:h-5 rounded-full bg-theater-gold/70 mt-0.5 shadow-sm shadow-theater-gold/30" />
          {/* Tassel strands */}
          <div className="flex gap-px">
            <div className="w-px md:w-0.5 h-4 md:h-6 bg-theater-gold/50 rounded-full" />
            <div className="w-px md:w-0.5 h-5 md:h-7 bg-theater-gold/40 rounded-full" />
            <div className="w-px md:w-0.5 h-4 md:h-6 bg-theater-gold/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Inner gold edge line */}
      <div
        className={`absolute top-0 bottom-0 w-px bg-theater-gold/30 ${
          isLeft ? "right-0" : "left-0"
        }`}
      />

      {/* Extra depth shadow on inner edge */}
      <div
        className={`absolute top-0 bottom-0 w-4 md:w-8 ${
          isLeft
            ? "right-0 bg-gradient-to-l from-black/30 to-transparent"
            : "left-0 bg-gradient-to-r from-black/30 to-transparent"
        }`}
      />
    </div>
  );
}

export default function TheaterFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Top marquee bar with lights */}
      <div className="relative z-20 bg-gradient-to-b from-theater-velvet to-theater-curtain border-b-4 border-theater-gold px-3 md:px-4 py-2">
        <LightStrip count={24} className="hidden md:flex" />
        <LightStrip count={14} className="md:hidden" />
      </div>

      {/* Main content area with curtains */}
      <div className="flex flex-1 relative">
        {/* Left curtain — always visible */}
        <CurtainPanel side="left" />

        {/* Center stage */}
        <div className="flex-1 bg-theater-dark relative overflow-hidden min-w-0">
          {/* Spotlight gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 15%, rgba(255, 215, 0, 0.04) 0%, transparent 50%)",
            }}
          />
          {/* Vignette on stage edges */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 80px 20px rgba(0,0,0,0.5)",
            }}
          />
          <div className="relative z-10 p-3 md:p-6 lg:p-8 max-w-3xl mx-auto">{children}</div>
        </div>

        {/* Right curtain — always visible */}
        <CurtainPanel side="right" />
      </div>

      {/* Bottom bar with lights */}
      <div className="relative z-20 bg-gradient-to-t from-theater-velvet to-theater-curtain border-t-4 border-theater-gold px-3 md:px-4 py-2">
        <LightStrip count={24} className="hidden md:flex" />
        <LightStrip count={14} className="md:hidden" />
      </div>
    </div>
  );
}
