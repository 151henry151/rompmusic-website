import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy - RompMusic",
  description: "RompMusic Privacy Policy. Your data stays on your server. No tracking, no ads.",
};

export default function PrivacyPage() {
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
            <Link href="/tos" className="text-[#888] hover:text-white transition">Terms of Service</Link>
          </div>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-[#888] mb-12">Last updated: January 2025</p>

        <div className="space-y-8 text-[#e0e0e0] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Overview</h2>
            <p>
              RompMusic is self-hosted music streaming software. When you use RompMusic, your data stays on the server that you or your organization controls. We (the RompMusic project) do not collect, store, or process your personal data on our own servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Data We Collect</h2>
            <p className="mb-4">RompMusic itself does not collect data. When you use a RompMusic instance:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account data</strong>: Username, email address, and password (hashed) are stored on your server for authentication.</li>
              <li><strong>Play history</strong>: Tracks you play may be recorded on your server to enable features like recently played and recommendations.</li>
              <li><strong>Preferences</strong>: Settings you choose (e.g., audio quality) may be stored locally on your device or on your server.</li>
              <li><strong>Music library</strong>: Metadata about your music (titles, artists, albums) is stored on your server.</li>
            </ul>
            <p className="mt-4">
              All of this data remains on the server you connect to. The RompMusic developers do not have access to it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Third-Party Services</h2>
            <p>
              Your server administrator may optionally enable <strong>Last.fm</strong> integration for music recommendations and similar-track features. If enabled, your server may send anonymized track information to Last.fm&apos;s API. See{" "}
              <a href="https://www.last.fm/legal/privacy" className="text-[#4a9eff] hover:underline" target="_blank" rel="noopener noreferrer">Last.fm privacy policy</a> for their practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
            <p>
              RompMusic does not share your data with third parties except as described above (optional Last.fm). Your server administrator controls your instance and its data retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
            <p>
              Passwords are hashed using industry-standard algorithms. Communication with the server should use HTTPS when available. Security is the responsibility of your server administrator.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p>
              Because your data is on your own server, you may request access, correction, or deletion from your server administrator. For GDPR and similar regulations, the data controller is the operator of your RompMusic instance, not the RompMusic project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Children&apos;s Privacy</h2>
            <p>
              RompMusic is not directed at children under 13. If you believe a child has provided personal data to a RompMusic instance, contact the server administrator.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Changes</h2>
            <p>
              We may update this policy. The Last updated date at the top indicates when it was last revised. Continued use of RompMusic after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
            <p>
              For questions about this privacy policy, contact{" "}
              <a href="mailto:henry@rompmusic.com" className="text-[#4a9eff] hover:underline">henry@rompmusic.com</a>.
              For questions about data on a specific RompMusic instance, contact that instance administrator.
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
