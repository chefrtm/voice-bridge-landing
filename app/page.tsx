"use client";

import { useState } from "react";

function Waveform() {
  const bars = [3, 7, 5, 9, 4, 8, 6, 10, 5, 7, 3, 8, 6, 4, 9, 7, 5, 8, 3, 6];
  return (
    <div className="flex items-center gap-[3px] h-10">
      {bars.map((h, i) => (
        <div
          key={i}
          className="waveform-bar w-[3px] rounded-full bg-[var(--color-accent)]"
          style={{
            height: `${h * 3}px`,
            animationDelay: `${i * 0.08}s`,
            opacity: 0.4 + (h / 10) * 0.6,
          }}
        />
      ))}
    </div>
  );
}

function RecordIcon() {
  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      <div className="absolute inset-0 rounded-full bg-red-500/10" />
      <div className="pulse-dot w-5 h-5 rounded-full bg-red-500" />
    </div>
  );
}

function Step({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4 flex-1">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
        {icon}
      </div>
      <div>
        <span className="text-xs font-mono text-[var(--color-accent)] tracking-wider uppercase">
          {number}
        </span>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
        <p className="text-sm text-[var(--color-muted)] mt-2 max-w-[280px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function PainPoint({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 text-left">
      <span className="text-lg mt-0.5 shrink-0">{icon}</span>
      <span className="text-[var(--color-muted)] text-[15px] leading-relaxed">
        {text}
      </span>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // TODO: Connect to email service (Buttondown, Mailchimp, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="hero-glow" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
          <span className="font-semibold tracking-tight text-sm">
            Voice Bridge
          </span>
        </div>
        <a
          href="#early-access"
          className="text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
        >
          Get early access
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-24 max-w-3xl mx-auto">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-xs text-[var(--color-muted)] mb-8">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Pre-launch — building in public
          </div>
        </div>

        <h1 className="animate-fade-up animate-delay-100 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
          Record any conversation.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#818cf8]">
            Get everything in your AI.
          </span>
        </h1>

        <p className="animate-fade-up animate-delay-200 text-[var(--color-muted)] text-lg sm:text-xl mt-6 max-w-xl leading-relaxed">
          Open voice pipeline for your phone. Transcripts, summaries, and action
          items — sent to ChatGPT, Claude, or any tool you use. In minutes.
        </p>

        {/* CTA */}
        <div
          id="early-access"
          className="animate-fade-up animate-delay-300 mt-10 w-full max-w-md"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-2 py-4">
              <div className="text-[var(--color-accent)] text-2xl">&#10003;</div>
              <p className="text-sm font-medium">You&apos;re on the list.</p>
              <p className="text-xs text-[var(--color-muted)]">
                We&apos;ll reach out when early access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-sm placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent-dim)] transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="cta-button px-6 py-3 rounded-xl font-medium text-sm text-[var(--color-foreground)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? "..." : "Get early access"}
              </button>
            </form>
          )}
        </div>

        {/* Waveform visual */}
        <div className="animate-fade-up animate-delay-400 mt-16 flex items-center gap-6 opacity-60">
          <RecordIcon />
          <Waveform />
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      {/* Problem */}
      <section className="relative z-10 px-6 py-20 max-w-2xl mx-auto">
        <div className="animate-fade-up">
          <span className="text-xs font-mono text-[var(--color-accent)] tracking-wider uppercase">
            The problem
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3 tracking-tight">
            Every voice app wants to be your brain.
          </h2>
          <p className="text-[var(--color-muted)] mt-4 leading-relaxed">
            Existing tools record your conversations, process them with their AI,
            and lock you into their ecosystem. Your raw data? Behind a paywall or
            gone entirely.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5 animate-fade-up animate-delay-200">
          <PainPoint
            icon="&#128274;"
            text="Otter, Plaud, Notta — closed ecosystems with mandatory AI subscriptions"
          />
          <PainPoint
            icon="&#128176;"
            text="Raw transcripts locked behind $17-30/month paywalls"
          />
          <PainPoint
            icon="&#9888;&#65039;"
            text="Limitless sold to Meta — EU users lost data in 14 days"
          />
          <PainPoint
            icon="&#127758;"
            text="Most tools support only 4-5 languages. You need 99."
          />
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      {/* How it works */}
      <section className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
        <div className="text-center mb-14 animate-fade-up">
          <span className="text-xs font-mono text-[var(--color-accent)] tracking-wider uppercase">
            How it works
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3 tracking-tight">
            Three steps. Your data stays yours.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-6 animate-fade-up animate-delay-200">
          <Step
            number="01"
            title="Record"
            description="One tap. Records in background — meetings, calls, doctor visits, anything."
            icon={
              <svg
                className="w-6 h-6 text-[var(--color-accent)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            }
          />
          <Step
            number="02"
            title="Process"
            description="Transcription + speaker identification. Summary and action items extracted automatically."
            icon={
              <svg
                className="w-6 h-6 text-[var(--color-accent)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                />
              </svg>
            }
          />
          <Step
            number="03"
            title="Send"
            description="Clean data goes to ChatGPT, Claude, Todoist, or any tool via webhook. Your AI, your rules."
            icon={
              <svg
                className="w-6 h-6 text-[var(--color-accent)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            }
          />
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      {/* Bottom CTA */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight animate-fade-up">
          Stop paying for someone else&apos;s AI.
          <br />
          <span className="text-[var(--color-muted)]">Own your voice data.</span>
        </h2>
        <p className="text-[var(--color-muted)] mt-4 text-sm animate-fade-up animate-delay-100">
          Voice Bridge is an open pipeline — you pay for infrastructure, not AI
          lock-in. Coming to iOS first.
        </p>

        <div className="mt-8 w-full max-w-md animate-fade-up animate-delay-200">
          {submitted ? (
            <p className="text-sm text-[var(--color-accent)]">
              &#10003; You&apos;re on the list
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-sm placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent-dim)] transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="cta-button px-6 py-3 rounded-xl font-medium text-sm text-[var(--color-foreground)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? "..." : "Get early access"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[var(--color-border)] px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>Voice Bridge</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Software-only. No hardware needed.</span>
            <span>99 languages.</span>
            <span>iOS first.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
