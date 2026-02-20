import { Quote } from './quotes';
import { Gradient } from './gradients';

export interface FavoriteQuote extends Quote {
  id: string;
  gradient: Gradient;
}

const FAVORITES_KEY = 'quotedrop-favorites';

export function getFavorites(): FavoriteQuote[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function isFavorite(quote: Quote): boolean {
  const favorites = getFavorites();
  return favorites.some(fav => fav.text === quote.text && fav.author === quote.author);
}

export function addFavorite(quote: Quote, gradient: Gradient): void {
  const favorites = getFavorites();
  const id = `${Date.now()}-${Math.random()}`;
  const newFavorite: FavoriteQuote = { ...quote, id, gradient };
  favorites.push(newFavorite);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function removeFavorite(quote: Quote): void {
  const favorites = getFavorites();
  const filtered = favorites.filter(
    fav => !(fav.text === quote.text && fav.author === quote.author)
  );
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
}

export function toggleFavorite(quote: Quote, gradient: Gradient): boolean {
  if (isFavorite(quote)) {
    removeFavorite(quote);
    return false;
  } else {
    addFavorite(quote, gradient);
    return true;
  }
}
