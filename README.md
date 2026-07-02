# Varun Singh — Portfolio

A Next.js 14 (App Router) portfolio styled in the spirit of
[sauna.ai](https://www.sauna.ai) — forest/lakeside hero, a scroll-linked
"scattered work" collage that converges as you scroll, a sticky-scroll
surfaces section, and a dark "always on" panel.

Design tokens (palette + type pairing) are adapted from Sauna's public
[brand page](https://www.sauna.ai/brand); all copy, imagery, and layout code
here are original.

## Stack

- Next.js 14 (App Router) + TypeScript
- Plain CSS (no framework) — see `app/globals.css`
- Zero external UI dependencies — scroll effects and reveals are hand-rolled

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy (projects, stack surfaces, timeline, FAQ, links) lives in one file:

```
lib/content.ts
```

Update `links.linkedin` and `links.x` with your real profile URLs — GitHub
and email are already set.

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy to Vercel:

```bash
npx vercel --prod
```

Or connect the GitHub repo directly at [vercel.com/new](https://vercel.com/new).
