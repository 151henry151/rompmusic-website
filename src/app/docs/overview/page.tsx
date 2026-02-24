/**
 * Copyright (C) 2024 RompMusic Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import Link from "next/link";
import Image from "next/image";

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#222] px-6 py-4">
        <Link href="/docs" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition">
          <Image src="/logo.png" alt="" width={28} height={28} />
          RompMusic
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Overview</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-[#ccc]">
          <p>
            RompMusic is a complete, self-hosted music streaming system that is <strong className="text-white">libre</strong> (free as in freedom) and <strong className="text-white">gratis</strong> (free as in beer). You own your music, control your data, and run the software on your own hardware.
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">Why RompMusic?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Libre Software</strong> — Licensed under GPL-3.0.</li>
            <li><strong className="text-white">Gratis</strong> — No subscription fees, no paywalls.</li>
            <li><strong className="text-white">Self-Hosted</strong> — Your music stays on your server.</li>
            <li><strong className="text-white">Cross-Platform</strong> — One app on Android, iOS, and web.</li>
            <li><strong className="text-white">Gapless Playback</strong> — Seamless album playback.</li>
            <li><strong className="text-white">No Tracking</strong> — Zero telemetry or analytics.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white pt-4">Components</h2>
          <table className="w-full border-collapse border border-[#333] text-sm">
            <thead>
              <tr className="bg-[#111]">
                <th className="border border-[#333] px-3 py-2 text-left text-white font-semibold">Component</th>
                <th className="border border-[#333] px-3 py-2 text-left text-white font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#333] px-3 py-2 font-mono text-[#4a9eff]">rompmusic-server</td>
                <td className="border border-[#333] px-3 py-2">Backend for streaming, library, and API.</td>
              </tr>
              <tr>
                <td className="border border-[#333] px-3 py-2 font-mono text-[#4a9eff]">rompmusic-client</td>
                <td className="border border-[#333] px-3 py-2">Android, iOS, and web client.</td>
              </tr>
              <tr>
                <td className="border border-[#333] px-3 py-2 font-mono text-[#4a9eff]">rompmusic-website</td>
                <td className="border border-[#333] px-3 py-2">Project website and documentation.</td>
              </tr>
            </tbody>
          </table>

          <p className="pt-4">
            <Link href="/docs" className="text-[#4a9eff] hover:underline">Back to documentation</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
