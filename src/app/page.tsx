'use client';

import { useState } from 'react';
import QuoteCard from '@/components/QuoteCard';
import { getRandomQuote } from '@/lib/quotes';

export default function Home() {
  const [quote] = useState(() => getRandomQuote());

  return (
    <main>
      <QuoteCard quote={quote} />
    </main>
  );
}
