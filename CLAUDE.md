# QuoteDrop — Claude Code Context

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- No backend — localStorage only
- No external UI libraries — Tailwind utility classes only

## Commands
- `npm run build` — typecheck + build
- `npm run dev` — dev server on port 3000

## Conventions
- Components in `src/components/`
- Utility/data files in `src/lib/`
- Pages in `src/app/`
- Use "use client" directive for interactive components
- All components must be TypeScript with proper types
- Tailwind for all styling — no CSS modules or inline styles
