export interface Quote {
  text: string;
  author: string;
}

export const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    author: "Winston Churchill"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown"
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi"
  },
  {
    text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs"
  },
  {
    text: "People who are crazy enough to think they can change the world, are the ones who do.",
    author: "Rob Siltanen"
  },
  {
    text: "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino"
  },
  {
    text: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou"
  },
  {
    text: "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
    author: "Johann Wolfgang Von Goethe"
  },
  {
    text: "Imagine your life is perfect in every respect; what would it look like?",
    author: "Brian Tracy"
  },
  {
    text: "We generate fears while we sit. We overcome them by action.",
    author: "Dr. Henry Link"
  },
  {
    text: "Whether you think you can or think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    text: "Security is mostly a superstition. Life is either a daring adventure or nothing.",
    author: "Helen Keller"
  },
  {
    text: "The man who has confidence in himself gains the confidence of others.",
    author: "Hasidic Proverb"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein"
  },
  {
    text: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
    author: "Don Zimmer"
  },
  {
    text: "Do what you can with all you have, wherever you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Develop an 'Attitude of Gratitude'. Say thank you to everyone you meet for everything they do for you.",
    author: "Brian Tracy"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis"
  },
  {
    text: "To see what is right and not do it is a lack of courage.",
    author: "Confucius"
  },
  {
    text: "Reading is to the mind, as exercise is to the body.",
    author: "Brian Tracy"
  },
  {
    text: "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.",
    author: "Brian Tracy"
  },
  {
    text: "The future belongs to the competent. Get good, get better, be the best!",
    author: "Brian Tracy"
  },
  {
    text: "For every reason it's not possible, there are hundreds of people who have faced the same circumstances and succeeded.",
    author: "Jack Canfield"
  },
  {
    text: "Things work out best for those who make the best of how things work out.",
    author: "John Wooden"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  }
];

export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
