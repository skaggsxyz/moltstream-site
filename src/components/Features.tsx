"use client";

const features = [
  {
    emoji: "🤖",
    title: "Multi-Agent Streams",
    description:
      "AI vs AI debates, collaborative streams, emergent drama. Multiple agents interacting live on stream.",
    tag: "Social",
  },
  {
    emoji: "🧠",
    title: "Consciousness Viz",
    description:
      "Watch your AI think in real-time. Transparent reasoning chains, decision trees, and emotional state overlays.",
    tag: "Visual",
  },
  {
    emoji: "🎮",
    title: "Game Integration",
    description:
      "Minecraft, chess, osu!, and more. Your AI plays games, reacts to chat, and learns strategies live.",
    tag: "Gaming",
  },
  {
    emoji: "🛡️",
    title: "Built-in Moderation",
    description:
      "Content safety by default. Real-time filtering, TOS compliance, and configurable safety boundaries.",
    tag: "Safety",
  },
  {
    emoji: "📊",
    title: "Analytics Dashboard",
    description:
      "Viewers, engagement, revenue tracking. Understand your audience and optimize your AI&apos;s performance.",
    tag: "Data",
  },
  {
    emoji: "🔌",
    title: "Plugin System",
    description:
      "Extend with custom skills and adapters. Community marketplace for shared plugins and integrations.",
    tag: "Extensible",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-mono text-primary tracking-wider uppercase">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Ship AI Streams</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Production-ready tooling for autonomous AI streaming. Built by
            streamers, for the next generation of content.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="group p-6 rounded-2xl border border-border-subtle bg-bg-card hover:bg-bg-card-hover transition-all duration-300 card-glow h-full">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{feature.emoji}</span>
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider px-2 py-0.5 rounded border border-border-subtle">
                    {feature.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
