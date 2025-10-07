### What this repository is

- A Vite + React + TypeScript landing-page template (called "Spark Template") that uses Tailwind CSS and design tokens defined via CSS variables. The app composes many small UI sections (TopBar, Navbar, HeroSection, BrandLogos, ServicesSection, etc.) inside `src/App.tsx`.

### Key entry points & scripts

- Dev server: `npm run dev` (runs `vite`).
- Build: `npm run build` (runs `tsc -b --noCheck && vite build`).
- Preview static build: `npm run preview`.
- Tailwind tokens and CSS variables are defined in `src/main.css` and surfaced to Tailwind via `tailwind.config.js` and `theme.json` when present.

### What an AI coding agent should know first

- Layout is composed in `src/App.tsx` — look there to understand section order and which components to update/replace.
- Tailwind class names map to CSS variables: `tailwind.config.js` maps many color/size tokens to CSS variables (e.g., `--color-primary`, `--radius-md`). When changing colors or spacing prefer editing `src/main.css` (the :root and .dark blocks) or `theme.json` (small overrides) rather than hardcoding HEX values across components.
- UI primitives live under `src/components/ui/*` (button, input, card, tooltip, etc.). Use these to keep styling consistent instead of creating new ad-hoc elements.

### Common patterns and examples

- Lottie animations: components import JSON from `Materiel/Lottie Files` and render via `lottie-react` (e.g., `Navbar.tsx`, `HeroSection.tsx`). If adding animations, place them under `Materiel/Lottie Files/` and import relatively.
- Icons: `@phosphor-icons/react` and `@heroicons/react` are used. Keep icon sizing consistent by following surrounding classes (e.g., w-12/h-12 containers).
- Buttons: use `src/components/ui/button.tsx` and pass `variant`/`size` props instead of creating new button styles.

### Where to change theme tokens

- Primary place: `src/main.css` — most CSS variables live in :root and `.dark`. Change values here to update the whole app.
- Tailwind mapping: `tailwind.config.js` reads `theme.json` if present; prefer adding small overrides to `theme.json` for per-PR changes.

### Testing, linting, and quality

- Linting: `npm run lint` (ESLint). Keep imports using path aliases (e.g., `@/components/...`).
- TypeScript: build uses `tsc -b --noCheck` as part of `npm run build`. For local type fixes run `tsc --noEmit` or adjust tsconfig as needed.

### Pull request guidance for agents

- Small, focused commits (one component per commit) — this repo follows that pattern in AGENTS.md.
- When implementing design changes prefer editing `src/components/*` and `src/main.css` rather than changing many files.
- Include run instructions and a short acceptance checklist in the PR description (see `AGENTS.md` for example checklist items like: `npm ci && npm run dev`, visual parity for hero/features/templates/pricing).

### Files to inspect first when working on UI

- `AGENTS.md` — contains higher-level instructions for pixel-accurate clones (useful guidance for design tasks).
- `src/main.css` — CSS variables and theme; primary place for global visual tokens.
- `tailwind.config.js` & `theme.json` — how Tailwind maps to CSS variables.
- `src/components/ui/*` — design system primitives.
- `src/App.tsx` — composition and layout order.

### Don'ts / gotchas

- Do not add large third-party assets or tracking libraries.
- Avoid inline HEX colors across many files — change variables in `src/main.css` or `theme.json` so Tailwind utilities pick them up.
- Prefer reusing `ui/*` primitives to keep behavior (focus states, keyboard accessibility) consistent.

If anything above is unclear or you'd like more examples (component-level patterns, tests, or a PR template), tell me which sections to expand and I'll iterate.
