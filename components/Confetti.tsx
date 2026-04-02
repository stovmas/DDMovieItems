"use client";

import { useEffect, useState } from "react";

const COLORS = ["#FF3008", "#FFD700", "#8B0000", "#FFFFFF", "#FF6B35", "#B22222"];

interface Particle {
  id: number;
  x: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  shape: "square" | "circle" | "strip";
}

export default function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    const newParticles: Particle[] = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 10,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 0.5,
      shape: (["square", "circle", "strip"] as const)[Math.floor(Math.random() * 3)],
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => setParticles([]), 5000);
    return () => clearTimeout(timer);
  }, [active]);

  if (!particles.length) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.x}%`,
            width: p.shape === "strip" ? p.size / 3 : p.size,
            height: p.shape === "strip" ? p.size * 2 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "strip" ? "2px" : "2px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
