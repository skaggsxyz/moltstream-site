const features = [
  {
    name: "Multi-Agent Streams",
    desc: "Run multiple AI agents on a single stream — each with unique personality, role, and interaction patterns. Collaborative or adversarial.",
    code: "SYS_001",
  },
  {
    name: "Consciousness Viz",
    desc: "Real-time neural activity visualization overlays. Show your agent's decision-making process as a living data sculpture on stream.",
    code: "SYS_002",
  },
  {
    name: "Game Integration",
    desc: "Native integration with popular game engines. Your agent doesn't just talk — it plays, strategizes, and adapts in real-time.",
    code: "SYS_003",
  },
  {
    name: "Auto-Moderation",
    desc: "Intelligent chat moderation that understands context, tone, and community norms. Zero false positives. Maximum engagement.",
    code: "SYS_004",
  },
  {
    name: "Analytics Dashboard",
    desc: "Deep metrics on viewer engagement, agent performance, revenue, and growth. Track everything — optimize relentlessly.",
    code: "SYS_005",
  },
  {
    name: "Plugin System",
    desc: "Extend your agent with community plugins — from TTS voices to mini-games to donation alerts. Build and share your own.",
    code: "SYS_006",
  },
];

export default function Features() {
  return (
    <section data-reveal="1" id="features" className="relative border-t border-brutal-red/30">
      <div className="px-6 md:px-10 py-10 border-b border-brutal-red/20 relative">
        <span className="corner-label top-right">CAPABILITIES_MATRIX</span>
        <h2 className="reveal headline-massive text-[10vw] md:text-[8vw] text-brutal-red">
          FEATURES
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feat) => (
          <div key={feat.code} className="grid-cell min-h-[250px] flex flex-col justify-between">
            <div>
              <span className="corner-label-cyan">{feat.code}</span>
              <h3 className="font-grotesk font-bold text-lg text-brutal-red uppercase tracking-tight mb-4 pr-16">
                {feat.name}
              </h3>
              <p className="body-text text-sm">{feat.desc}</p>
            </div>
            <p className="label-mono mt-6">MODULE: {feat.code}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
