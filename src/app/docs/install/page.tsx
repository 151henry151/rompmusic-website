/**
 * Copyright (C) 2024 RompMusic Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import Link from "next/link";
import Image from "next/image";

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#222] px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition">
          <Image src="/logo.png" alt="" width={28} height={28} />
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
          <ol className="list-decimal pl-6 space-y-3">
            <li>Clone the repo (use <code className="bg-[#222] px-1 rounded">--recursive</code> so submodules are included):</li>
          </ol>
          <pre className="bg-[#111] p-4 rounded-lg overflow-x-auto text-sm">
            {`git clone --recursive https://github.com/rompmusic/rompmusic.git
cd rompmusic`}
          </pre>
          <ol className="list-decimal pl-6 space-y-3" start={2}>
            <li>Copy the example env file and edit it (see <strong>Editing .env</strong> below):</li>
          </ol>
          <pre className="bg-[#111] p-4 rounded-lg overflow-x-auto text-sm">
            {`cp .env.example .env
# Edit .env with your values, then:
docker compose up -d`}
          </pre>
          <p>
            The API server is exposed on port <strong>8097</strong> by default (mapped from 8080 inside the container). The web client and docs site run on ports 3003 and 3002 respectively if you start the full stack.
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">Editing .env</h2>
          <p>
            In the repo root, <code className="bg-[#222] px-1 rounded">.env</code> is used by Docker Compose. Set at least the following:
          </p>
          <dl className="space-y-2 pl-2">
            <dt className="font-medium text-white"><code className="bg-[#222] px-1 rounded text-sm">JWT_SECRET</code></dt>
            <dd className="pl-4 text-sm">Required. A random secret for signing auth tokens (e.g. <code className="bg-[#222] px-1 rounded">openssl rand -hex 32</code>).</dd>
            <dt className="font-medium text-white"><code className="bg-[#222] px-1 rounded text-sm">MUSIC_PATH</code></dt>
            <dd className="pl-4 text-sm">Path on the host to your music library. Mounted read-only into the server container as <code className="bg-[#222] px-1 rounded">/music</code>. Example: <code className="bg-[#222] px-1 rounded">/home/you/Music</code> or <code className="bg-[#222] px-1 rounded">./music</code>.</dd>
            <dt className="font-medium text-white"><code className="bg-[#222] px-1 rounded text-sm">DB_PASSWORD</code></dt>
            <dd className="pl-4 text-sm">PostgreSQL password for the <code className="bg-[#222] px-1 rounded">rompmusic</code> user and database. Defaults to <code className="bg-[#222] px-1 rounded">rompmusic</code> if unset.</dd>
            <dt className="font-medium text-white"><code className="bg-[#222] px-1 rounded text-sm">ADMIN_COOKIE_SECRET</code></dt>
            <dd className="pl-4 text-sm">Secret for admin-panel session cookies. Set to a random string in production.</dd>
          </dl>
          <p className="text-sm">
            For password reset and email verification, set <code className="bg-[#222] px-1 rounded">SMTP_HOST</code>, <code className="bg-[#222] px-1 rounded">SMTP_USER</code>, <code className="bg-[#222] px-1 rounded">SMTP_PASSWORD</code>, <code className="bg-[#222] px-1 rounded">SMTP_FROM</code> (and <code className="bg-[#222] px-1 rounded">SMTP_PORT</code> if not 587).
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">Last.fm and Beets (optional)</h2>
          <p>
            You can set <strong>Last.fm</strong> and <strong>beets</strong> options either in <code className="bg-[#222] px-1 rounded">.env</code> or in the admin web interface. The admin panel overrides or supplements env: go to your server URL, log in as admin, open <strong>Dashboard</strong> → <strong>Server Settings</strong>. There you’ll find <strong>API keys</strong> and library schedule options.
          </p>
          <h3 className="text-lg font-semibold text-white pt-2">Last.fm API key</h3>
          <p>
            Last.fm powers “similar tracks,” recommendations, and artist images. The API key is free.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>Get a key:</strong> Sign in at <a href="https://www.last.fm" target="_blank" rel="noopener noreferrer" className="text-[#4a9eff] hover:underline">last.fm</a>, then go to <a href="https://www.last.fm/api/account/create" target="_blank" rel="noopener noreferrer" className="text-[#4a9eff] hover:underline">last.fm/api/account/create</a>. Create an API account and copy the “API Key.”</li>
            <li><strong>Where to put it:</strong> Either set <code className="bg-[#222] px-1 rounded">LASTFM_API_KEY=your-key</code> in your <code className="bg-[#222] px-1 rounded">.env</code> file, or in the admin panel under <strong>Server Settings</strong> → <strong>API keys</strong> → <strong>Last.fm API key</strong>. If you set it in both places, the value stored in the admin panel is used.</li>
          </ul>
          <h3 className="text-lg font-semibold text-white pt-2">Beets</h3>
          <p>
            <a href="https://beets.io" target="_blank" rel="noopener noreferrer" className="text-[#4a9eff] hover:underline">Beets</a> is a command-line music manager. RompMusic can run <code className="bg-[#222] px-1 rounded">beet fetch-art</code> to fetch album art into your library—on a schedule or once after each library scan.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>Installing beets:</strong> Install beets where the RompMusic server runs (e.g. <code className="bg-[#222] px-1 rounded">pip install beets</code> or your distro’s package). The default Docker server image does <em>not</em> include beets; to use fetch-art from the server you can run beets on the host and point the server at that library, or add beets to a custom server image.</li>
            <li><strong>Configuring beets:</strong> Configure beets so its library path is the same as <code className="bg-[#222] px-1 rounded">MUSIC_PATH</code> (e.g. <code className="bg-[#222] px-1 rounded">directory: /music</code> in <code className="bg-[#222] px-1 rounded">~/.config/beets/config.yaml</code> if the server runs in Docker and mounts music at <code className="bg-[#222] px-1 rounded">/music</code>).</li>
            <li><strong>In the admin panel:</strong> Under <strong>Server Settings</strong> you can set <strong>Beets fetch-art interval (hours)</strong> (e.g. 24 for daily; 0 to disable) and <strong>Run beets fetch-art after each library scan</strong>. The optional <strong>Beets API key</strong> field is for storing an API key used by some beets plugins (e.g. Last.fm); you can enter it there if your beets config needs it.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white pt-4">Create an admin user</h2>
          <p>
            After the stack is running, create the first admin user with the <code className="bg-[#222] px-1 rounded">create_admin</code> script. From the repo root, run:
          </p>
          <pre className="bg-[#111] p-4 rounded-lg overflow-x-auto text-sm">
            {`docker compose exec server python -m rompmusic_server.scripts.create_admin`}
          </pre>
          <p>
            You will be prompted for username, email, and password. Then open the web admin panel at <code className="bg-[#222] px-1 rounded">/server</code> (e.g. <code className="bg-[#222] px-1 rounded">https://music.yourdomain.com/server</code>), log in with that admin account, and run a library scan so your music is indexed.
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">Connect the client</h2>
          <p>
            Point the client app at your server URL (e.g. <code className="bg-[#222] px-1 rounded">https://music.yourdomain.com</code>) and log in with your admin or invited user account. For step-by-step instructions (web app, Android, iOS, first-run server URL, and hosting the web client yourself), see the <Link href="/docs/client-setup" className="text-[#4a9eff] hover:underline">Client app setup</Link> guide.
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">API reference</h2>
          <p>
            Once your server is running, the OpenAPI docs are available at <code className="bg-[#222] px-1 rounded">/api/docs</code> (Swagger) and <code className="bg-[#222] px-1 rounded">/api/redoc</code> (ReDoc)—e.g. <a href="https://rompmusic.com/api/docs" target="_blank" rel="noopener noreferrer" className="text-[#4a9eff] hover:underline">rompmusic.com/api/docs</a>. Use your own server URL when self-hosting.
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
