/**
 * Copyright (C) 2024 RompMusic Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import Link from "next/link";
import Image from "next/image";

export default function ClientSetupPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#222] px-6 py-4">
        <Link href="/docs" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition">
          <Image src="/logo.png" alt="" width={28} height={28} />
          RompMusic
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Client app setup</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-[#ccc]">
          <p>The RompMusic client runs on Android, iOS, and web. You can use the official web app and set your server URL in the app, or host the web client yourself and optionally preconfigure the server URL at build time. The app includes per-user playlists: create playlists, add tracks from the library or from track/album menus, reorder and remove tracks, and play a playlist from the Playlists screen.</p>
          <h2 className="text-xl font-semibold text-white pt-4">Using the web app</h2>
          <p>Use <a href="https://rompmusic.com/app" target="_blank" rel="noopener noreferrer" className="text-[#4a9eff] hover:underline">rompmusic.com/app</a>. It uses the demo server by default. To use your own server: open <strong>Settings</strong>, then <strong>Server URL</strong>, enter your server address (e.g. <code className="bg-[#222] px-1 rounded">https://music.yourdomain.com</code>), and save. You will be logged out and can then sign in to your server.</p>
          <h2 className="text-xl font-semibold text-white pt-4">First run (Android and iOS)</h2>
          <p>When you install the app from the Play Store or App Store (or build it without a preconfigured URL), the first time you open the app you see a <strong>Connect to your server</strong> screen. Enter the full URL of your RompMusic server (e.g. <code className="bg-[#222] px-1 rounded">https://music.yourdomain.com</code>) and tap <strong>Continue</strong>. The URL is saved; you can then log in with your admin or invited user account. If your server is not set up yet, see the <Link href="/docs/install" className="text-[#4a9eff] hover:underline">Self-Hosting Guide</Link>.</p>
          <h2 className="text-xl font-semibold text-white pt-4">Changing the server URL later</h2>
          <p>In the app: <strong>Settings</strong> then <strong>Server URL</strong>. Tap the row, enter the new URL, and save. Changing the server URL clears your session; you will need to log in again to the new server.</p>
          <h2 className="text-xl font-semibold text-white pt-4">Hosting the web client yourself</h2>
          <p>You can build and serve the Expo web client from your own domain. The client repo has a <code className="bg-[#222] px-1 rounded">Dockerfile</code> that builds the web export and serves it with nginx. Set <code className="bg-[#222] px-1 rounded">EXPO_PUBLIC_API_URL</code> to your API base URL (e.g. <code className="bg-[#222] px-1 rounded">https://music.yourdomain.com/api/v1</code>) to preconfigure the server so users are not prompted; otherwise they see the server setup screen on first run. If you serve the client at a subpath (e.g. <code className="bg-[#222] px-1 rounded">/app</code>), set <code className="bg-[#222] px-1 rounded">EXPO_PUBLIC_WEB_BASE_URL</code> to that path so asset URLs and navigation work. See <code className="bg-[#222] px-1 rounded">.env.example</code> in the client repo for both variables.</p>
          <h2 className="text-xl font-semibold text-white pt-4">Logging in</h2>
          <p>After the server URL is set, use the credentials from your server admin. The first user is created with the <code className="bg-[#222] px-1 rounded">create_admin</code> script on the server; see the <Link href="/docs/install" className="text-[#4a9eff] hover:underline">Self-Hosting Guide</Link>. Additional users can be invited from the admin dashboard.</p>
          <p className="pt-4"><Link href="/docs" className="text-[#4a9eff] hover:underline">Back to documentation</Link></p>
        </div>
      </main>
    </div>
  );
}
