"use client";

const platforms = [
  {
    name: "Kick",
    highlight: "95/5 Revenue Split",
    description:
      "The most creator-friendly platform. Keep 95% of your AI streamer's revenue.",
    color: "#53fc18",
    features: ["95/5 revenue split", "Growing audience", "Fewer restrictions"],
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M2 2v20h7.5v-5L12 14.5 16.5 22H24l-8-12L24 2h-7.5L12 9.5 9.5 2H2zm5.5 5h1l3 4.5-3 4.5h-1V7z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    highlight: "Largest Audience",
    description:
      "Reach billions. Your AI streams live on the world's biggest video platform.",
    color: "#ff0000",
    features: ["2B+ monthly users", "VOD archives", "Super Chat revenue"],
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Twitch",
    highlight: "Streaming Native",
    description:
      "The home of live streaming. Built-in culture, chat integration, and discoverability.",
    color: "#9146ff",
    features: ["Chat integration", "Bits & Subs", "Raid system"],
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
      </svg>
    ),
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-mono text-primary tracking-wider uppercase">
            Platforms
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Stream Everywhere,{" "}
            <span className="gradient-text">Simultaneously</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Deploy your AI streamer across all major platforms. One agent,
            multiple audiences.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <div
              key={platform.name}
              className={`reveal reveal-delay-${i + 1}`}
            >
              <div className="group p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-card hover:bg-bg-card-hover transition-all duration-300 card-glow h-full">
                {/* Logo */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{
                    backgroundColor: `${platform.color}10`,
                    color: platform.color,
                  }}
                >
                  {platform.logo}
                </div>

                {/* Name & highlight */}
                <h3 className="text-xl font-semibold mb-1">{platform.name}</h3>
                <div
                  className="text-xs font-mono mb-3 font-medium"
                  style={{ color: platform.color }}
                >
                  {platform.highlight}
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {platform.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {platform.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: platform.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
