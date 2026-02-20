'use client';

import { useState } from 'react';
import QuoteCard from '@/components/QuoteCard';
import { getRandomQuote } from '@/lib/quotes';
import { getRandomGradient } from '@/lib/gradients';

export default function Home() {
  const [quote] = useState(() => getRandomQuote());
  const [gradient] = useState(() => getRandomGradient());

  return (
    <main
      style={{
        background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
      }}
      className="min-h-screen"
    >
      <QuoteCard quote={quote} />
    </main>
  );
}
