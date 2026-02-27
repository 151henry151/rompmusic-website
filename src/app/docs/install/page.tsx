/**
 * Copyright (C) 2024 RompMusic Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import Link from "next/link";

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#222] px-6 py-4">
        <Link href="/" className="text-xl font-semibold">
          RompMusic
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Self-Hosting Guide</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-[#ccc]">
          <p>
            Run RompMusic on your own Debian server or VPS using Docker. You need:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Docker and Docker Compose</li>
            <li>Music files (MP3, FLAC, M4A, OGG)</li>
            <li>Optional: beets for organization and tagging</li>
          </ul>
          <h2 className="text-xl font-semibold text-white pt-4">Quick Start</h2>
          <pre className="bg-[#111] p-4 rounded-lg overflow-x-auto text-sm">
            {`git clone https://github.com/rompmusic/rompmusic.git
cd rompmusic
cp .env.example .env
# Edit .env: set JWT_SECRET, MUSIC_PATH, DB credentials
docker-compose up -d`}
          </pre>
          <p>
            The server will be at port 8080. Create an admin user with the
            provided script, then scan your library from the web admin panel at{" "}
            <code className="bg-[#222] px-1 rounded">/server</code>.
          </p>
          <p>
            Point the client app at your server URL (e.g.{" "}
            <code className="bg-[#222] px-1 rounded">https://music.yourdomain.com</code>
            ) and log in.
          </p>
          <p className="pt-4">
            <Link href="/" className="text-[#4a9eff] hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
