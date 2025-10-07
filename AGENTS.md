<!--
    Use the following prompt when opening a GitHub Copilot Agent task for the repository syed-reza98/landing-page-creator. It is intentionally detailed and prescriptive so the agent can run, edit files, and open a PR that implements a pixel-accurate clone of the provided prototype screenshots (dir path: ./prototype-screenshots/*).
-->

# ROLE
You are a React frontend development specialist.

# PROJECT CONTEXT
- The project is a landing page creator application that allows users to create and customize landing pages using pre-designed templates.
- The application is built with React and TypeScript, and it uses Tailwind CSS for styling
- The goal is to implement a pixel-accurate clone of the provided prototype screenshots, ensuring that the layout, typography, colors, logos, spacing, element sizes, padding, margins, radii, and component behavior match the prototypes across different breakpoints (mobile/tablet/desktop).

# TECH STACK
- React 18+ with TypeScript
- Material UI
- Modern CSS (Tailwind CSS, CSS Modules, or Styled Components)
- State Management (Context API, Zustand, Zod)
- Build Tools (Vite)
- Testing (Jest, React Testing Library)
- CI/CD (GitHub Actions and GitHub Pages)

# COMPONENT PRINCIPLES
- **Functional Components**: Use function components with hooks
<!--
  Refined agent instructions for implementing a pixel-accurate landing-page clone.
  Keep this file focused and actionable for a Copilot/automation agent.
-->

# Role
React + TypeScript frontend engineer (Tailwind CSS + Vite) — implement a pixel-accurate clone

## Project summary
- Build a pixel-accurate landing page using the screenshots in `prototype-screenshots/`.
- Tech: React 18+, TypeScript, Tailwind CSS, Vite. Material UI may be used sparingly.
- Goal: match layout, spacing, typography, colors, and responsive behavior across mobile/tablet/desktop.

## Minimal working contract
- Inputs: screenshots in `prototype-screenshots/`, existing project (Vite + Tailwind + TypeScript).
- Outputs: working React page under `src/components` + styles and assets, a new branch and PR with clear instructions.
- Success: `npm run dev` and `npm run build` succeed; components render and visually match screenshots; PR opened.

## Key constraints
- Use functional components with hooks and TypeScript types.
- Use Tailwind utilities and existing design tokens (extend theme.json or `src/main.css` only when necessary).
- Do not add heavy dependencies. Prefer small utilities already in the repo.
- Accessibility: semantic elements, alt text, keyboard navigation.

## Actionable implementation checklist
1. Inspect screenshots and map sections (header, hero, logos, features, process, templates, testimonials, pricing, CTA, footer).
2. Add/record palette variables in `src/main.css` (or theme.json) — document hex values in the PR.
3. Map typography to Tailwind classes (use Inter font already loaded). Add minimal custom tokens only if required.
4. Create these components under `src/components` (one commit per major component):
   - `Navbar.tsx`, `Hero.tsx`, `LogoCloud.tsx`, `Features.tsx`, `Process.tsx`, `Templates.tsx`, `Testimonials.tsx`, `Pricing.tsx`, `CTA.tsx`, `Footer.tsx`, `Page.tsx`.
5. Add content stubs in `src/lib/data.ts` and image placeholders in `src/assets/` (use `prototype-screenshots/` images where suitable).
6. Ensure responsive behavior at breakpoints: mobile (≤640px), tablet (641–1024px), desktop (≥1024px).
7. Run dev server and fix TypeScript/Tailwind issues. Prefer small iterative commits.
8. Open branch `copilot/clone-prototype-screenshots` and create a PR titled: `feat: clone prototype screenshots → pixel-accurate landing page`.

## PR requirements
- Include: summary, list of changed files, color/typography tokens with hex values, run instructions (`npm install`, `npm run dev`), acceptance checklist, before/after screenshots (hero crop and full-page for 3 breakpoints).

## Acceptance criteria (must pass before merge)
- Visual parity for major sections.
- Typography and color tokens match screenshots (document hex values).
- Responsive behavior matches screenshots.
- Accessibility basics satisfied (alt text, semantic tags, keyboard nav).
- Build: `npm run dev` and `npm run build` succeed; TypeScript clean.
- No added tracking or large third-party assets.

## Deliverables (files to add/update)
- Branch: `copilot/clone-prototype-screenshots`.
- Components: add files in `src/components/` as listed above.
- Content: `src/lib/data.ts` (texts, logos, templates, testimonials, pricing).
- Assets: add images to `src/assets/` (or reference `prototype-screenshots/` assets when appropriate).
- Styles: update `src/main.css` to include CSS variables and any tiny utility classes; update `tailwind.config.js`/`theme.json` only if necessary.
- Update `src/App.tsx` to render the composed `Page` (if appropriate).

## Testing & quality gates
- Run: `npm ci && npm run dev` and `npm run build` locally.
- Smoke tests: verify hero, features, templates, pricing render and respond across breakpoints.
- Add minimal React Testing Library tests for any non-trivial utility logic.
- Fix TypeScript and Tailwind warnings before opening PR.

## PR checklist (include in PR body)
- [ ] Branch created: `copilot/clone-prototype-screenshots`
- [ ] Run: `npm ci && npm run dev`
- [ ] Visual: hero, features, templates, pricing visible and responsive
- [ ] Documentation: colors and typography tokens documented
- [ ] Accessibility: basic checks done (alt text, semantic tags)
- [ ] No runtime errors in console
- [ ] TypeScript: no errors or warnings
- [ ] Tailwind: no warnings
- [ ] Tests: minimal tests added for any utility logic


## Notes and guidance
- Prioritize layout/spacing over pixel-perfect color if a token mismatch exists. Document any approximations.
- Keep commits small and focused (one major component per commit).
- If any required assets (logo SVG, hi-res hero image, proprietary fonts) are missing check the ./material directory for the missing assets otherwise document what is needed in the PR and stop further changes until provided.

---
Last updated: 2025-10-07
  - Footer.tsx
