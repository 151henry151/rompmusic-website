/**
 * Copyright (C) 2024 RompMusic Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import Link from "next/link";
import Image from "next/image";

const repoStructure = "rompmusic/\n  rompmusic-server/   # FastAPI backend\n  rompmusic-client/   # React Native + Expo client\n  rompmusic-website/  # Next.js project site";

export default function ContributingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#222] px-6 py-4">
        <Link href="/docs" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition">
          <Image src="/logo.png" alt="" width={28} height={28} />
          RompMusic
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Contributing</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-[#ccc]">
          <p>We welcome contributions. By contributing you agree to license under GPL-3.0. All code must be GPL-compatible.</p>
          <h2 className="text-xl font-semibold text-white pt-4">Code of conduct</h2>
          <p>Be respectful and inclusive, welcome newcomers, and focus on constructive feedback.</p>
          <h2 className="text-xl font-semibold text-white pt-4">Reporting bugs</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Check existing Issues first.</li>
            <li>Create an issue with clear title, description, steps to reproduce, and environment.</li>
          </ul>
          <h2 className="text-xl font-semibold text-white pt-4">Suggesting features</h2>
          <p>Open an issue with the enhancement label. Describe the feature and how it fits RompMusic.</p>
          <h2 className="text-xl font-semibold text-white pt-4">Code contributions</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Fork the repository.</li>
            <li>Create a branch: feature/your-feature-name.</li>
            <li>Make changes following our coding standards. Add GPL-3.0 headers to new files.</li>
            <li>Commit with clear messages, push to your fork, open a Pull Request.</li>
          </ol>
          <h2 className="text-xl font-semibold text-white pt-4">Code standards</h2>
          <p>Server: PEP 8, type hints. Client: ESLint, Prettier. Website: consistent with existing style.</p>
          <h2 className="text-xl font-semibold text-white pt-4">Requirements</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Audio changes must not break gapless playback.</li>
            <li>Only GPL-compatible dependencies. No telemetry or analytics.</li>
          </ul>
          <h2 className="text-xl font-semibold text-white pt-4">Repository structure</h2>
          <pre className="bg-[#111] p-4 rounded-lg overflow-x-auto text-sm">{repoStructure}</pre>
          <p>See the README in each component for development setup.</p>
          <p className="pt-4"><Link href="/docs" className="text-[#4a9eff] hover:underline">Back to documentation</Link></p>
        </div>
      </main>
    </div>
  );
}
