# Repository Guidelines
## Project Structure & Module Organization
The app boots from `src/main.jsx`, which mounts `<App />` and applies global styles from `src/index.css`. Feature sections live in `src/components/` as self-contained React functions; keep shared hooks or utilities alongside the component that consumes them until reuse emerges. Small assets (SVGs, logos) belong in `src/assets/`, while larger static files should sit in `public/` so Vite serves them without bundling. Tailwind configuration is centralized in `tailwind.config.js`; extend the theme rather than editing generated classes inline.

## Build, Test, and Development Commands
Run `npm install` once to pull dependencies. Use `npm run dev` for the Vite development server (pass `--host` when testing on devices). Ship builds with `npm run build`, which outputs to `dist/`. Preview the production bundle locally via `npm run preview`. Keep lint clean with `npm run lint`; CI should block on lint failures.

## Coding Style & Naming Conventions
Follow the ESLint ruleset in `eslint.config.js` and resolve every warning before pushing. Use 2-space indentation, PascalCase for components, camelCase for functions and variables, and SCREAMING_SNAKE_CASE only for constants deliberately ignored by the lint rule. Prefer functional components with hooks, co-locate component styles in the same file, and favor Tailwind utility classes over ad-hoc CSS. Import paths should stay relative to maintain compatibility with default Vite resolution.

## Testing Guidelines
A formal test runner is not yet wired up; when adding coverage, use Vitest with React Testing Library to align with the Vite ecosystem. Place spec files beside the component under test using the `.test.jsx` suffix. Aim to cover user flows (render, interaction, accessibility) and snapshot only stable UI fragments. Add `npm run test` to package scripts once the suite exists and document required setup in this file.

## Commit & Pull Request Guidelines
Write commits in conventional form (`type(scope): summary`), keeping scope optional and summary under 72 characters. Each PR should focus on a single feature or fix, include a succinct description of changes, note any follow-up tasks, and attach screenshots or GIFs when UI shifts. Reference relevant Linear/Jira ticket IDs in both commit and PR descriptions. Ensure lint passes locally and link to any manual verification steps in the PR body.
