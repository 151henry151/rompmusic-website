/**
 * Copyright (C) 2024 RompMusic Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import Link from "next/link";

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-2xl font-bold mb-4">Server Admin</h1>
      <p className="text-[#888] mb-6 text-center max-w-md">
        In production, configure your reverse proxy so /server points to the
        RompMusic server admin panel (e.g. your-server:8080/server). The admin
        panel lets you scan the library and manage the server.
      </p>
      <Link href="/" className="text-[#4a9eff] hover:underline">Back to home</Link>
    </div>
  );
}
