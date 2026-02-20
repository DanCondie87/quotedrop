# QuoteDrop — Product Requirements Document

## Introduction

QuoteDrop is a simple, beautiful web app that displays random inspirational quotes with gradient backgrounds. Users can cycle through quotes, copy them to clipboard, and save favorites to local storage. Built as a demo project to test the WOWWAI autonomous development pipeline.

## Goals

- Display random quotes with beautiful gradient backgrounds
- Allow users to get a new random quote with one click
- Copy quotes to clipboard for sharing
- Save/unsave favorite quotes with local storage persistence
- View saved favorites in a separate view
- Clean, minimal, mobile-friendly UI

## User Stories

### US-001: Quote Data & Display
**Description:** As a user, I want to see an inspirational quote with its author displayed beautifully so that I feel inspired.

**Acceptance Criteria:**
- [x] Create `src/lib/quotes.ts` with at least 30 hardcoded quotes (text + author)
- [x] Create `src/components/QuoteCard.tsx` that displays quote text and author
- [x] Replace default page.tsx with QuoteCard showing a random quote on load
- [x] Quote text is large, centered, with author below
- [x] Typecheck passes

### US-002: Gradient Backgrounds
**Description:** As a user, I want each quote to have a unique gradient background so the experience feels fresh each time.

**Acceptance Criteria:**
- [x] Create `src/lib/gradients.ts` with at least 10 gradient color pairs
- [x] Each new quote gets a randomly selected gradient background
- [x] Gradient covers the full viewport
- [x] Text is white with subtle text shadow for readability
- [x] Typecheck passes
- [x] Verify changes work in browser

### US-003: New Quote Button
**Description:** As a user, I want to click a button to get a new random quote so I can browse through different quotes.

**Acceptance Criteria:**
- [x] Add a "New Quote" button below the quote card
- [x] Clicking it shows a different random quote with a different gradient
- [x] Button has hover/active states and looks good on the gradient
- [x] Button uses a semi-transparent white style (glass-morphism feel)
- [x] Typecheck passes
- [x] Verify changes work in browser

### US-004: Copy to Clipboard
**Description:** As a user, I want to copy a quote to my clipboard so I can paste it elsewhere.

**Acceptance Criteria:**
- [x] Add a "Copy" button next to or near the New Quote button
- [x] Clicking it copies the quote text + author to clipboard (format: "Quote text" — Author)
- [x] Button shows brief "Copied!" feedback (text change for 2 seconds)
- [x] Uses navigator.clipboard API
- [x] Typecheck passes
- [x] Verify changes work in browser

### US-005: Save Favorites
**Description:** As a user, I want to save quotes I like so I can revisit them later.

**Acceptance Criteria:**
- [x] Add a heart/bookmark icon button on the quote card
- [x] Clicking it saves the current quote to favorites in localStorage
- [x] Icon fills/changes color when the current quote is already favorited
- [x] Clicking again removes from favorites (toggle)
- [x] Favorites persist across page reloads
- [x] Typecheck passes
- [x] Verify changes work in browser

### US-006: Favorites View
**Description:** As a user, I want to see all my saved favorite quotes in one place.

**Acceptance Criteria:**
- [x] Add a "Favorites" link/button in the top-right corner of the main view
- [x] Create `src/app/favorites/page.tsx` showing all saved quotes as cards
- [x] Each card shows quote text, author, and a remove button
- [x] Cards have subtle gradient backgrounds matching their original gradient
- [x] "Back" link returns to the main quote view
- [x] Empty state shows "No favorites saved yet" message
- [x] Typecheck passes
- [x] Verify changes work in browser

## Non-Goals

- No backend/database — everything is client-side with localStorage
- No user accounts or authentication
- No sharing to social media (copy to clipboard is sufficient)
- No quote categories or filtering
- No dark/light mode toggle (dark gradient backgrounds are the theme)
