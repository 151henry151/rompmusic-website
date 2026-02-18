import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service - RompMusic",
  description: "RompMusic Terms of Service. Libre music streaming software.",
};

export default function TOSPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#222] px-6 py-4">
        <nav className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition">
            <Image src="/logo.png" alt="" width={28} height={28} />
            RompMusic
          </Link>
          <div className="flex gap-6">
            <Link href="/docs" className="text-[#888] hover:text-white transition">Docs</Link>
            <Link href="/app" className="text-[#4a9eff] hover:underline">Open App</Link>
            <Link href="/privacy" className="text-[#888] hover:text-white transition">Privacy Policy</Link>
          </div>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-[#888] mb-12">Last updated: January 2025</p>

        <div className="space-y-8 text-[#e0e0e0] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance</h2>
            <p>
              By using RompMusic, you agree to these Terms of Service. If you do not agree, do not use the software.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. License</h2>
            <p>
              RompMusic is free software licensed under the GNU General Public License v3.0 (GPL-3.0). You may use, copy, modify, and distribute it under the terms of that license. The full license text is available at{" "}
              <a href="https://www.gnu.org/licenses/gpl-3.0.html" className="text-[#4a9eff] hover:underline" target="_blank" rel="noopener noreferrer">gnu.org/licenses/gpl-3.0.html</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Self-Hosted Nature</h2>
            <p>
              RompMusic is designed for self-hosting. When you use a RompMusic instance, you are using software operated by that instance&apos;s administrator. Your relationship and any data handling are governed by that administrator&apos;s policies, not solely by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h2>
            <p>
              You agree to use RompMusic only for lawful purposes. You must not use it to infringe copyright, distribute illegal content, or harm others. You are responsible for ensuring you have the right to stream any music through your instance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. No Warranty</h2>
            <p>
              RompMusic is provided &quot;as is&quot; without warranty of any kind. The GPL-3.0 expressly disclaims all warranties. Use at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the RompMusic contributors shall not be liable for any damages arising from your use of the software.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Account Termination</h2>
            <p>
              Your server administrator may suspend or terminate your account at any time for violation of these terms or their own policies. The RompMusic project does not operate user accounts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Changes</h2>
            <p>
              We may update these terms. The &quot;Last updated&quot; date at the top indicates when they were last revised. Continued use constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
            <p>
              For questions about these terms, contact{" "}
              <a href="mailto:henry@rompmusic.com" className="text-[#4a9eff] hover:underline">henry@rompmusic.com</a>.
            </p>
          </section>
        </div>

        <p className="mt-16 pt-8 border-t border-[#222]">
          <Link href="/" className="text-[#4a9eff] hover:underline">← Back to RompMusic</Link>
        </p>
      </main>
    </div>
  );
}
