"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const API_BASE = "/api/v1";

function InviteContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<{
    email: string;
    has_credentials: boolean;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form for "choose username and password"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!token) {
      setError("Missing invitation token. Please use the link from your email.");
      setLoading(false);
      return;
    }
    fetch(`${API_BASE}/invite/status?token=${encodeURIComponent(token)}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 400) return res.json().then((d) => { throw new Error(d.detail || "Invalid or expired invitation"); });
          throw new Error("Invalid or expired invitation");
        }
        return res.json();
      })
      .then((data) => {
        setStatus(data);
      })
      .catch((err) => {
        setError(err.message || "Invalid or expired invitation");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token]);

  const handleActivate = () => {
    if (!token) return;
    setSubmitting(true);
    setFormError(null);
    fetch(`${API_BASE}/invite/activate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((d) => { throw new Error(d.detail || "Activation failed"); });
        return res.json();
      })
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setFormError(err.message || "Activation failed");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !username.trim() || !password) {
      setFormError("Please enter a username and password.");
      return;
    }
    setSubmitting(true);
    setFormError(null);
    fetch(`${API_BASE}/invite/complete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, username: username.trim(), password }),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((d) => { throw new Error(d.detail || "Sign-up failed"); });
        return res.json();
      })
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setFormError(err.message || "Sign-up failed");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <header className="border-b border-[#222] px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition w-fit">
            <Image src="/logo.png" alt="" width={28} height={28} />
            RompMusic
          </Link>
        </header>
        <main className="max-w-md mx-auto px-6 py-16 flex-1 flex items-center justify-center">
          <p className="text-[#888]">Loading invitation…</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <header className="border-b border-[#222] px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition w-fit">
            <Image src="/logo.png" alt="" width={28} height={28} />
            RompMusic
          </Link>
        </header>
        <main className="max-w-md mx-auto px-6 py-16 flex-1">
          <h1 className="text-2xl font-bold mb-4">Invalid invitation</h1>
          <p className="text-[#cbd5e1] mb-6">{error}</p>
          <Link href="/" className="text-[#4a9eff] hover:underline">Back to home</Link>
        </main>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <header className="border-b border-[#222] px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition w-fit">
            <Image src="/logo.png" alt="" width={28} height={28} />
            RompMusic
          </Link>
        </header>
        <main className="max-w-md mx-auto px-6 py-16 flex-1">
          <h1 className="text-2xl font-bold mb-4 text-[#4ade80]">You’re all set</h1>
          <p className="text-[#cbd5e1] mb-6">Your account is ready. Open the app and log in with your credentials.</p>
          <a href="https://demo.rompmusic.com/client/login" className="inline-block px-6 py-3 rounded-lg bg-[#4a9eff] hover:bg-[#3a8eef] font-medium">Open App &amp; log in</a>
        </main>
      </div>
    );
  }

  // status is set: either activate (has_credentials) or complete (choose username/password)
  if (status?.has_credentials) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <header className="border-b border-[#222] px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition w-fit">
            <Image src="/logo.png" alt="" width={28} height={28} />
            RompMusic
          </Link>
        </header>
        <main className="max-w-md mx-auto px-6 py-16 flex-1">
          <h1 className="text-2xl font-bold mb-2">Activate your account</h1>
          <p className="text-[#888] mb-6">Your username and password were set by your server admin. Click below to activate.</p>
          {formError && <p className="text-[#f87171] mb-4">{formError}</p>}
          <button
            type="button"
            onClick={handleActivate}
            disabled={submitting}
            className="w-full px-6 py-3 rounded-lg bg-[#4a9eff] hover:bg-[#3a8eef] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Activating…" : "Activate account"}
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <header className="border-b border-[#222] px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[#4a9eff] transition w-fit">
          <Image src="/logo.png" alt="" width={28} height={28} />
          RompMusic
        </Link>
      </header>
      <main className="max-w-md mx-auto px-6 py-16 flex-1">
        <h1 className="text-2xl font-bold mb-2">Create your account</h1>
        <p className="text-[#888] mb-6">Choose a username and password for {status?.email}.</p>
        <form onSubmit={handleComplete} className="space-y-4">
          {formError && <p className="text-[#f87171]">{formError}</p>}
          <div>
            <label htmlFor="invite-username" className="block text-sm text-[#94a3b8] mb-1">Username</label>
            <input
              id="invite-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-[#666] focus:border-[#4a9eff] focus:outline-none"
              placeholder="Username"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label htmlFor="invite-password" className="block text-sm text-[#94a3b8] mb-1">Password</label>
            <input
              id="invite-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-[#666] focus:border-[#4a9eff] focus:outline-none"
              placeholder="Password"
              autoComplete="new-password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-6 py-3 rounded-lg bg-[#4a9eff] hover:bg-[#3a8eef] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Creating account…" : "Create account"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default function InvitePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <p className="text-[#888]">Loading…</p>
      </div>
    }>
      <InviteContent />
    </Suspense>
  );
}
