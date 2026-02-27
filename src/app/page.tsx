import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#222] px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-semibold">RompMusic</span>
        <nav className="flex gap-6">
          <Link href="/docs" className="text-[#888] hover:text-white transition">Docs</Link>
          <Link href="/app" className="text-[#4a9eff] hover:underline">Open App</Link>
          <Link href="/server" className="px-4 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#252525]">Server Admin</Link>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Libre music streaming. <br />
          <span className="text-[#4a9eff]">Free as in freedom.</span>
        </h1>
        <p className="text-xl text-[#888] mb-12 max-w-2xl">
          RompMusic is free software (GPL-3.0). Self-host your music, own your data, and stream seamlessly across all your devices with no tracking, no ads, and no vendor lock-in.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/app" className="px-6 py-3 rounded-lg bg-[#4a9eff] hover:bg-[#3a8eef] font-medium">Launch Web App</Link>
          <Link href="/docs/install" className="px-6 py-3 rounded-lg border border-[#333] hover:border-[#555]">Self-Host Guide</Link>
        </div>
        <section className="mt-24 grid sm:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-[#111] border border-[#222]">
            <h2 className="text-lg font-semibold mb-2">Self-Hosted</h2>
            <p className="text-[#888]">Run the server on your own hardware. Your music, your rules.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#111] border border-[#222]">
            <h2 className="text-lg font-semibold mb-2">Gapless Playback</h2>
            <p className="text-[#888]">Albums play as one continuous experience. No gaps between tracks.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#111] border border-[#222]">
            <h2 className="text-lg font-semibold mb-2">Cross-Platform</h2>
            <p className="text-[#888]">Native apps for Android and iOS, plus web. Same interface everywhere.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#111] border border-[#222]">
            <h2 className="text-lg font-semibold mb-2">GPL-3.0 Licensed</h2>
            <p className="text-[#888]">Use, study, modify, and share. Gratis and libre.</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#222] px-6 py-8 mt-24">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#666] text-sm">RompMusic - GPL-3.0. No tracking. No proprietary dependencies.</p>
          <Link href="/docs/contributing" className="text-[#4a9eff] hover:underline text-sm">Contribute</Link>
        </div>
      </footer>
    </div>
  );
}
