/**
 * Copyright (C) 2024 RompMusic Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import Link from "next/link";
import Image from "next/image";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#222] px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition">
          <Image src="/logo.png" alt="" width={28} height={28} />
          RompMusic
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Documentation</h1>
        <p className="text-[#888] mb-6">
          Guides for running RompMusic, connecting the client, and contributing.
        </p>
        <div className="space-y-4">
          <Link
            href="/docs/overview"
            className="block p-4 rounded-lg bg-[#111] border border-[#222] hover:border-[#444]"
          >
            <h2 className="font-semibold">Overview</h2>
            <p className="text-[#888] text-sm mt-1">
              What RompMusic is, why use it, and the main components (server, client, website).
            </p>
          </Link>
          <Link
            href="/docs/install"
            className="block p-4 rounded-lg bg-[#111] border border-[#222] hover:border-[#444]"
          >
            <h2 className="font-semibold">Self-Hosting Guide</h2>
            <p className="text-[#888] text-sm mt-1">
              Run the RompMusic server with Docker: .env, admin user, library scan, Last.fm and Beets.
            </p>
          </Link>
          <Link
            href="/docs/client-setup"
            className="block p-4 rounded-lg bg-[#111] border border-[#222] hover:border-[#444]"
          >
            <h2 className="font-semibold">Client app setup</h2>
            <p className="text-[#888] text-sm mt-1">
              Web app usage, entering your server URL on Android and iOS, hosting the web client yourself.
            </p>
          </Link>
          <Link
            href="/docs/contributing"
            className="block p-4 rounded-lg bg-[#111] border border-[#222] hover:border-[#444]"
          >
            <h2 className="font-semibold">Contributing</h2>
            <p className="text-[#888] text-sm mt-1">
              Community guidelines, reporting bugs, code contributions, and repository structure.
            </p>
          </Link>
        </div>
        <p className="mt-8">
          <Link href="/" className="text-[#4a9eff] hover:underline">
            ← Back to home
          </Link>
        </p>
      </main>
    </div>
  );
}
