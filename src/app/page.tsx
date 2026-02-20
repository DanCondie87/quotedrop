'use client';

import { useState, useEffect } from 'react';
import QuoteCard from '@/components/QuoteCard';
import { getRandomQuote } from '@/lib/quotes';
import { getRandomGradient } from '@/lib/gradients';
import { isFavorite, toggleFavorite } from '@/lib/favorites';

export default function Home() {
  const [quote, setQuote] = useState(() => getRandomQuote());
  const [gradient, setGradient] = useState(() => getRandomGradient());
  const [copied, setCopied] = useState(false);
  const [favorited, setFavorited] = useState(false);

  // Check if current quote is favorited on mount and when quote changes
  useEffect(() => {
    setFavorited(isFavorite(quote));
  }, [quote]);

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
    setGradient(getRandomGradient());
    setCopied(false); // Reset copied state when getting new quote
  };

  const handleCopy = async () => {
    const text = `"${quote.text}" — ${quote.author}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleToggleFavorite = () => {
    const newFavoritedState = toggleFavorite(quote, gradient);
    setFavorited(newFavoritedState);
  };

  return (
    <main
      style={{
        background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
      }}
      className="min-h-screen"
    >
      <QuoteCard quote={quote} />
      
      {/* Favorite button - top right of quote card area */}
      <div className="fixed top-8 right-8">
        <button
          onClick={handleToggleFavorite}
          className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 active:bg-white/40 transition-all shadow-lg flex items-center justify-center"
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={favorited ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            className={`w-7 h-7 ${favorited ? 'text-red-300' : 'text-white'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      {/* Action buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          onClick={handleCopy}
          className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-lg border border-white/30 hover:bg-white/30 active:bg-white/40 transition-all shadow-lg"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button
          onClick={handleNewQuote}
          className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-lg border border-white/30 hover:bg-white/30 active:bg-white/40 transition-all shadow-lg"
        >
          New Quote
        </button>
      </div>
    </main>
  );
}
