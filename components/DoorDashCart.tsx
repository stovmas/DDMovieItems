"use client";

import { CartItem } from "@/lib/puzzles";
import { useState, useEffect } from "react";

interface DoorDashCartProps {
  items: CartItem[];
  revealedIndices: number[];
  allRevealed: boolean;
}

const categoryColors: Record<string, string> = {
  food: "#FF3008",
  grocery: "#4CAF50",
  convenience: "#FF9800",
  pet: "#9C27B0",
  flowers: "#E91E63",
  alcohol: "#795548",
  pharmacy: "#2196F3",
  retail: "#607D8B",
};

function CartItemRow({
  item,
  revealed,
  animDelay,
}: {
  item: CartItem;
  revealed: boolean;
  animDelay: number;
}) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (revealed) {
      const timer = setTimeout(() => setShowContent(true), animDelay);
      return () => clearTimeout(timer);
    }
  }, [revealed, animDelay]);

  if (!revealed) {
    return (
      <div className="dd-cart-item px-4 py-3 flex items-center gap-3 hidden-item">
        <div className="w-10 h-10 rounded-lg bg-gray-300 flex items-center justify-center text-xl">
          ❓
        </div>
        <div className="flex-1">
          <div className="h-4 w-32 bg-gray-300 rounded mb-1" />
          <div className="h-3 w-20 bg-gray-200 rounded" />
        </div>
        <div className="h-4 w-12 bg-gray-300 rounded" />
      </div>
    );
  }

  return (
    <div
      className={`dd-cart-item px-4 py-3 flex items-center gap-3 transition-all duration-500 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
      style={{
        animation: showContent ? "revealItem 0.6s ease-out forwards" : "none",
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
        style={{ backgroundColor: `${categoryColors[item.category]}15` }}
      >
        {item.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: categoryColors[item.category] }}
          />
          {item.store}
        </p>
      </div>
      <span className="text-sm font-semibold text-gray-900 flex-shrink-0">${item.price}</span>
    </div>
  );
}

export default function DoorDashCart({ items, revealedIndices, allRevealed }: DoorDashCartProps) {
  const subtotal = items
    .filter((_, i) => allRevealed || revealedIndices.includes(i))
    .reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className="dd-cart overflow-hidden">
      {/* Cart header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
        {/* DoorDash-style icon */}
        <div className="w-8 h-8 rounded-full bg-doordash-red flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.1 5.96L.084 6a9.42 9.42 0 009.114 7.014h2.637A2.453 2.453 0 0114.1 15.18a2.1 2.1 0 01-2.059 2.455H6.289a.587.587 0 00-.486.918 6.1 6.1 0 005.08 2.72h1.142a6.878 6.878 0 006.881-6.18 6.567 6.567 0 00-.118-1.941 5.882 5.882 0 004.282-4.744z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">Your Order</p>
          <p className="text-xs text-gray-500">
            {revealedIndices.length} of {items.length} items visible
          </p>
        </div>
      </div>

      {/* Items */}
      <div>
        {items.map((item, i) => (
          <CartItemRow
            key={i}
            item={item}
            revealed={allRevealed || revealedIndices.includes(i)}
            animDelay={allRevealed ? i * 150 : 0}
          />
        ))}
      </div>

      {/* Cart footer */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Subtotal</span>
          <span className="text-sm font-bold text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-doordash-red font-medium">🎬 Movie Dash Delivery</span>
          <span className="text-xs text-green-600 font-medium">FREE</span>
        </div>
      </div>
    </div>
  );
}
