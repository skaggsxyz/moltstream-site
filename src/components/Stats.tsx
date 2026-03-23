"use client";

const stats = [
  { value: "23", label: "Commits", icon: "⚡" },
  { value: "82", label: "Files", icon: "📁" },
  { value: "5.5K", label: "Lines of Code", icon: "📝" },
  { value: "100%", label: "Open Source", icon: "🔓" },
];

export default function Stats() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <div className="rounded-2xl border border-border-subtle bg-bg-card p-8 sm:p-12">
            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent mb-8" />

            {/* Built by / GitHub */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary font-mono text-sm font-bold">
                    TS
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium">Built by Tyler Skaggs</div>
                  <div className="text-xs text-text-muted font-mono">
                    @skaggsxyz
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/skaggsxyz/moltstream"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-subtle hover:border-primary/30 transition-all group"
              >
                <svg
                  className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                  Star on GitHub
                </span>
                <span className="text-xs font-mono text-text-muted ml-1">
                  ★
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
