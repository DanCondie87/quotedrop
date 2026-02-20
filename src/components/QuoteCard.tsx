'use client';

import { Quote } from '@/lib/quotes';

interface QuoteCardProps {
  quote: Quote;
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <p 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-relaxed"
          style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
        >
          "{quote.text}"
        </p>
        <p 
          className="text-2xl md:text-3xl text-white/90 font-light"
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
        >
          — {quote.author}
        </p>
      </div>
    </div>
  );
}
