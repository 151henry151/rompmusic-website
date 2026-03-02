import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Delete account and data - RompMusic",
  description: "How to request deletion of your RompMusic account and associated data.",
};

export default function DeleteAccountPage() {
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
            <Link href="/privacy" className="text-[#888] hover:text-white transition">Privacy</Link>
            <Link href="/tos" className="text-[#888] hover:text-white transition">Terms of Service</Link>
          </div>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Delete your RompMusic account and data</h1>
        <p className="text-[#888] mb-12">
          Use this page to request that your account and associated data are deleted. RompMusic (the app and project shown on the store listing) provides the steps below.
        </p>

        <div className="space-y-8 text-[#e0e0e0] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Steps to request account deletion</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Open the <strong>RompMusic</strong> app (Android, iOS, or web).</li>
              <li>Sign in to your account if you are not already signed in.</li>
              <li>Go to <strong>Settings</strong> (gear or profile/settings in the app).</li>
              <li>Tap <strong>Delete account</strong>.</li>
              <li>Confirm when prompted. Your account and associated data will be permanently deleted.</li>
            </ol>
            <p className="mt-4">
              If you use a <strong>self-hosted</strong> RompMusic server (not the official rompmusic.com service), your data is controlled by that server&apos;s administrator. Contact them to request account or data deletion; they can delete your account via the server admin tools or you can use the same in-app &quot;Delete account&quot; option in Settings if your instance supports it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What we delete</h2>
            <p className="mb-2">When you delete your account, we permanently delete:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your account (username, email, password)</li>
              <li>Your playlists</li>
              <li>Your play history</li>
              <li>Any stored preferences tied to your account</li>
            </ul>
            <p className="mt-4">
              We do not retain copies of this data after deletion. There is no additional retention period for deleted account data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Partial data deletion (without deleting your account)</h2>
            <p>
              The app does not currently offer a way to delete only some of your data (e.g. only play history) while keeping your account. To remove data, use the &quot;Delete account&quot; flow above, which deletes all account and associated data. If you need a different arrangement, contact your server administrator (for self-hosted) or{" "}
              <a href="mailto:henry@rompmusic.com" className="text-[#4a9eff] hover:underline">henry@rompmusic.com</a> for the official RompMusic service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For questions about account or data deletion, contact{" "}
              <a href="mailto:henry@rompmusic.com" className="text-[#4a9eff] hover:underline">henry@rompmusic.com</a>.
              For a RompMusic instance run by someone else, contact that instance&apos;s administrator.
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
