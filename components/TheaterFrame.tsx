"use client";

import { useEffect, useState } from "react";

function LightBulb({ delay, index }: { delay: number; index: number }) {
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
        <LightBulb key={i} delay={i} index={i} />
      ))}
    </div>
  );
}

export default function TheaterFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Top marquee bar with lights */}
      <div className="relative z-20 bg-gradient-to-b from-theater-velvet to-theater-curtain border-b-4 border-theater-gold px-4 py-2">
        <LightStrip count={20} className="hidden md:flex" />
        <LightStrip count={12} className="md:hidden" />
      </div>

      {/* Main content area with curtains */}
      <div className="flex flex-1 relative">
        {/* Left curtain */}
        <div className="hidden md:block w-16 lg:w-24 curtain-left relative flex-shrink-0">
          <div className="absolute inset-0 curtain-folds-left" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-theater-gold opacity-30" />
          {/* Curtain drape scallop at top */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-theater-velvet to-transparent" />
        </div>

        {/* Center stage */}
        <div className="flex-1 bg-theater-dark relative overflow-hidden">
          {/* Subtle spotlight gradient */}
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 20%, rgba(255, 215, 0, 0.03) 0%, transparent 60%)"
            }}
          />
          <div className="relative z-10 p-4 md:p-8 max-w-4xl mx-auto">
            {children}
          </div>
        </div>

        {/* Right curtain */}
        <div className="hidden md:block w-16 lg:w-24 curtain-right relative flex-shrink-0">
          <div className="absolute inset-0 curtain-folds-right" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-theater-gold opacity-30" />
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-theater-velvet to-transparent" />
        </div>
      </div>

      {/* Bottom bar with lights */}
      <div className="relative z-20 bg-gradient-to-t from-theater-velvet to-theater-curtain border-t-4 border-theater-gold px-4 py-2">
        <LightStrip count={20} className="hidden md:flex" />
        <LightStrip count={12} className="md:hidden" />
      </div>

      {/* Mobile curtain accent - top drapes */}
      <div className="md:hidden fixed top-12 left-0 w-8 h-32 curtain-left opacity-80 rounded-br-xl z-10" />
      <div className="md:hidden fixed top-12 right-0 w-8 h-32 curtain-right opacity-80 rounded-bl-xl z-10" />
    </div>
  );
}
