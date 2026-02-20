'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getFavorites, removeFavorite, FavoriteQuote } from '@/lib/favorites';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteQuote[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (quote: FavoriteQuote) => {
    removeFavorite(quote);
    setFavorites(getFavorites());
  };

  if (favorites.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <p className="text-3xl text-white/80 mb-8">No favorites saved yet</p>
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-lg border border-white/30 hover:bg-white/30 active:bg-white/40 transition-all shadow-lg inline-block"
          >
            ← Back
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 py-12 px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">Your Favorites</h1>
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-medium border border-white/30 hover:bg-white/30 active:bg-white/40 transition-all shadow-lg"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* Favorites Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((fav) => (
          <div
            key={fav.id}
            style={{
              background: `linear-gradient(135deg, ${fav.gradient.from} 0%, ${fav.gradient.to} 100%)`,
            }}
            className="rounded-2xl p-6 shadow-xl relative group"
          >
            {/* Remove button */}
            <button
              onClick={() => handleRemove(fav)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-red-500/50 active:bg-red-600/50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
              aria-label="Remove from favorites"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Quote content */}
            <div className="pr-8">
              <p
                className="text-xl font-semibold text-white mb-4 leading-relaxed"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
              >
                "{fav.text}"
              </p>
              <p
                className="text-lg text-white/90 font-light"
                style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.2)' }}
              >
                — {fav.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
