"use client";

export default function MenuScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in">
      {/* Logo area */}
      <div className="mb-8">
        {/* DoorDash-style "D" mark */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-doordash-red flex items-center justify-center mx-auto mb-6 shadow-lg shadow-doordash-red/30">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white" className="md:w-14 md:h-14">
            <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.1 5.96L.084 6a9.42 9.42 0 009.114 7.014h2.637A2.453 2.453 0 0114.1 15.18a2.1 2.1 0 01-2.059 2.455H6.289a.587.587 0 00-.486.918 6.1 6.1 0 005.08 2.72h1.142a6.878 6.878 0 006.881-6.18 6.567 6.567 0 00-.118-1.941 5.882 5.882 0 004.282-4.744z" />
          </svg>
        </div>

        <h1 className="font-marquee text-5xl md:text-7xl font-black text-white tracking-tight">
          Movie <span className="text-doordash-red">Dash</span>
        </h1>
        <p className="text-theater-gold/60 font-marquee text-sm md:text-base mt-2 tracking-widest uppercase">
          Delivered by DoorDash Arcade
        </p>
      </div>

      {/* How to play */}
      <div className="max-w-md mx-auto mb-10 space-y-3 text-left">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-theater-gold/10">
          <h3 className="text-theater-gold font-marquee text-base font-bold mb-3">How to Play</h3>
          <div className="space-y-2.5 text-sm text-gray-300 font-body">
            <div className="flex gap-3">
              <span className="text-doordash-red font-bold w-5 flex-shrink-0">1.</span>
              <p>You&apos;ll see a DoorDash order with mystery items</p>
            </div>
            <div className="flex gap-3">
              <span className="text-doordash-red font-bold w-5 flex-shrink-0">2.</span>
              <p>Guess which movie the order is from!</p>
            </div>
            <div className="flex gap-3">
              <span className="text-doordash-red font-bold w-5 flex-shrink-0">3.</span>
              <p>Wrong guesses reveal more items and letters as hints</p>
            </div>
            <div className="flex gap-3">
              <span className="text-doordash-red font-bold w-5 flex-shrink-0">4.</span>
              <p>Fewer guesses = higher score. Keep your streak alive!</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500 font-body">
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">🍕 Food</span>
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">🛒 Grocery</span>
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">🐾 Pet</span>
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">💐 Flowers</span>
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">💊 Pharmacy</span>
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">🛍️ Retail</span>
        </div>
      </div>

      {/* Start button */}
      <button
        onClick={onStart}
        className="group px-10 py-4 bg-doordash-red hover:bg-doordash-darkRed text-white
          font-bold text-lg md:text-xl rounded-full transition-all duration-200
          active:scale-95 shadow-xl shadow-doordash-red/30
          hover:shadow-doordash-red/50 hover:scale-105"
      >
        Start Ordering 🎬
      </button>

      <p className="text-gray-600 text-xs mt-6 font-body">10 rounds per game</p>
    </div>
  );
}
