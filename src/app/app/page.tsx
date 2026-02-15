/**
 * Copyright (C) 2024 RompMusic Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Web app redirect - the actual app is built with Expo Web.
 * In production, rompmusic.com/app would serve the client build.
 */

import Link from "next/link";

export default function AppPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-2xl font-bold mb-4">RompMusic App</h1>
      <p className="text-[#888] mb-6 text-center max-w-md">
        The web app is built with Expo Web. For local development, run the client
        and open it in your browser. In production, configure your server to serve
        the Expo web build at <code className="bg-[#222] px-1 rounded">/app</code>.
      </p>
      <Link
        href="/"
        className="text-[#4a9eff] hover:underline"
      >
        ← Back to home
      </Link>
    </div>
  );
}
