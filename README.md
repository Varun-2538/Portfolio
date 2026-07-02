# Varun Singh — Portfolio

A Next.js 14 (App Router) rebuild of my portfolio, styled in the spirit of
[sauna.ai](https://www.sauna.ai) — dawn lakescape hero, editorial serif
type, and a floating project collage.

## Stack

- Next.js 14 (App Router) + TypeScript
- Plain CSS (no framework) — see `app/globals.css`
- Zero external UI dependencies — accordions and reveals are hand-rolled

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

Update `links.email`, `links.github`, `links.linkedin`, and `links.x` with
your real profile URLs before deploying.

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
