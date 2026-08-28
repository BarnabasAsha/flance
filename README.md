# Flance

A React application built with [Next.js](https://nextjs.org/), following **Atomic Design** conventions for component structure, with animation handled by [Framer Motion](https://www.framer.com/motion/) and styling via [styled-components](https://styled-components.com/).

**Live:** [flance.netlify.app](https://flance.netlify.app)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 12
- **UI library:** React 17
- **Styling:** [styled-components](https://styled-components.com/), with SSR support via `babel-plugin-styled-components`
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Utilities:** [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) for scroll/viewport-triggered behavior, [react-click-away-listener](https://github.com/ain-soph/react-click-away-listener) for outside-click handling
- **Language:** TypeScript
- **Linting:** ESLint (`eslint-config-next`)

## Component Architecture — Atomic Design

Components are organized following [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles, composing UI from small, reusable pieces up to full page templates:

```
components/
├── atoms/       # Smallest building blocks — buttons, inputs, icons, typography
├── molecules/   # Simple groups of atoms functioning together — form fields, cards
├── organisms/   # More complex, distinct sections of the UI — navbars, sections
├── templates/   # Page-level layouts composed of organisms, without real content
```

> Adjust the tree above if your actual folder names differ — update this section to match the real structure once confirmed.

## Getting Started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

Pages can be edited in the `pages/` directory — Next.js supports fast refresh, so changes appear immediately.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run start` | Runs the production build |
| `npm run lint` | Runs ESLint |

## Deployment

This project is deployed on [Netlify](https://www.netlify.com/): **[flance.netlify.app](https://flance.netlify.app)**

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [styled-components Documentation](https://styled-components.com/docs)
- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
