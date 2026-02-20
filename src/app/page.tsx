'use client';

import { useState } from 'react';
import QuoteCard from '@/components/QuoteCard';
import { getRandomQuote } from '@/lib/quotes';
import { getRandomGradient } from '@/lib/gradients';

export default function Home() {
  const [quote, setQuote] = useState(() => getRandomQuote());
  const [gradient, setGradient] = useState(() => getRandomGradient());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
    setGradient(getRandomGradient());
  };

  return (
    <main
      style={{
        background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
      }}
      className="min-h-screen"
    >
      <QuoteCard quote={quote} />
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
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
