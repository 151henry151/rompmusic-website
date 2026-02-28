# RompMusic Website

Project website and documentation for [RompMusic](https://rompmusic.com). Part of the [RompMusic](https://github.com/151henry151/rompmusic) project.

## What’s in this repo

- **Landing page** — rompmusic.com
- **Docs** — Installation, configuration, self-hosting (e.g. [rompmusic.com/docs/install](https://rompmusic.com/docs/install))
- **Links** — /app (web client), /server (admin)

## Tech

Next.js 14, deployed as a standalone build (e.g. via Docker or Node).

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

Standalone output is in `.next/standalone`. Use the project Dockerfile for a container image.

## License

GPL-3.0-or-later. See [LICENSE](../LICENSE) in the umbrella repo.
