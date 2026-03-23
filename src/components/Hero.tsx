"use client";

import { useEffect, useRef } from "react";

const codeSnippets = [
  "const agent = new MoltAgent()",
  "agent.setPlatform('twitch')",
  "agent.setPersona({ name: 'Luna' })",
  "await agent.goLive()",
  "stream.on('chat', handleMessage)",
  "agent.think().respond()",
  "consciousness.visualize()",
  "mod.filterContent(msg)",
  "analytics.track(viewers)",
  "plugin.register('chess')",
  "agent.collaborate(otherAI)",
  "stream.quality = '1080p60'",
];

export default function Hero() {
  const rainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = rainRef.current;
    if (!container) return;

    // Create code rain columns
    for (let i = 0; i < 12; i++) {
      const col = document.createElement("div");
      col.className = "code-rain-col";
      col.style.left = `${8 + i * 8}%`;
      col.style.animationDuration = `${12 + Math.random() * 15}s`;
      col.style.animationDelay = `${-Math.random() * 10}s`;
      col.style.fontSize = `${10 + Math.random() * 4}px`;

      const lines = [];
      for (let j = 0; j < 8; j++) {
        lines.push(codeSnippets[Math.floor(Math.random() * codeSnippets.length)]);
      }
      col.textContent = lines.join(" ");
      container.appendChild(col);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="hero-grid" />
      <div className="code-rain" ref={rainRef} />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono text-primary">
            Open Source · Now in Alpha
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
          Launch Your AI Streamer
          <br />
          <span className="gradient-text">in 5 Minutes</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          The first platform to deploy autonomous AI agents that stream 24/7 on
          Twitch, YouTube, and Kick.{" "}
          <span className="text-text-primary font-medium">No code required.</span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-bg font-semibold rounded-xl transition-all btn-glow text-sm"
          >
            Get Early Access
          </a>
          <a
            href="https://github.com/skaggsxyz/moltstream"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-border-subtle hover:border-primary/30 text-text-primary font-medium rounded-xl transition-all text-sm flex items-center justify-center gap-2 group"
          >
            <svg
              className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Terminal preview */}
        <div
          className="max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="rounded-xl border border-border-subtle bg-bg-card overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-[#0d0d0d]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-xs text-text-muted font-mono ml-2">
                moltstream deploy
              </span>
            </div>
            {/* Terminal body */}
            <div className="p-4 sm:p-6 text-left font-mono text-xs sm:text-sm space-y-2">
              <div className="text-text-muted">
                <span className="text-primary">$</span> molt deploy --platform
                twitch --agent luna
              </div>
              <div className="text-text-secondary">
                ✓ Agent &quot;Luna&quot; initialized
              </div>
              <div className="text-text-secondary">
                ✓ Twitch OAuth connected
              </div>
              <div className="text-text-secondary">
                ✓ Consciousness engine loaded
              </div>
              <div className="text-text-secondary">
                ✓ Moderation filters active
              </div>
              <div className="text-[#27c93f]">
                ⚡ Luna is now live on twitch.tv/luna_ai
              </div>
              <div className="text-text-muted cursor-blink">
                <span className="text-primary">$</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  );
}
