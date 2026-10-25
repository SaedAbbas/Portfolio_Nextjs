# Saed Abbas — Portfolio

Personal portfolio of **Saed Abbas**, Front-End Developer (React · Next.js · TypeScript).

## Tech

- [Next.js 15](https://nextjs.org) (App Router, statically prerendered)
- React 19 Server Components — only the navbar ships client-side JavaScript
- Tailwind CSS v4
- Optimized WebP images via `next/image`, self-hosted Geist font

## Performance notes

- No WebGL, canvas, or animation libraries — section reveals use CSS scroll-driven animations
- Testimonials marquee is pure CSS (GPU transform, pauses on hover)
- Respects `prefers-reduced-motion`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
