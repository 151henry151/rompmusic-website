# Changelog

All notable changes to rompmusic-website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Documentation** — New Overview page (why RompMusic, components). Client app setup guide: web app usage, first-run server URL on Android/iOS, changing server URL in Settings, hosting the web client (Docker, EXPO_PUBLIC_API_URL, EXPO_PUBLIC_WEB_BASE_URL), logging in. Contributing page: code of conduct, reporting bugs, suggesting features, code contributions, repo structure. Docs landing page lists all four doc sections with descriptions. Install guide links to Client app setup for connecting the client.

### Changed

- Dockerfile: use node:20-slim (Debian) instead of Alpine so Next.js SWC binary (glibc) loads correctly

## [0.1.0-beta.3] - 2026-02-19

### Added

- **Album deep link redirect** — `/album/:id` (e.g. `rompmusic.com/album/2936`) redirects to `/app/album/:id` so shared album links open the client on the correct album detail screen.

## [0.1.0-beta.2] - 2026-02-16

### Added

- Logo and app icon (favicon) from project logo.

## [0.1.0-beta.1] - 2025-02-15

First beta release. Part of RompMusic 0.1.0-beta.1.

### Added

- Next.js 14 landing page at rompmusic.com
- Docs and installation guide pages
- /app and /server links for client and admin
- Dockerfile for standalone production build

### Fixed

- Docker build (create `public` directory for Next.js standalone output)

[Unreleased]: https://github.com/151henry151/rompmusic-website/compare/v0.1.0-beta.3...HEAD
[0.1.0-beta.3]: https://github.com/151henry151/rompmusic-website/compare/v0.1.0-beta.2...v0.1.0-beta.3
[0.1.0-beta.2]: https://github.com/151henry151/rompmusic-website/releases/tag/v0.1.0-beta.2
[0.1.0-beta.1]: https://github.com/151henry151/rompmusic-website/releases/tag/v0.1.0-beta.1
