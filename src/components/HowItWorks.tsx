const steps = [
  {
    num: "01",
    title: "CONFIGURE",
    desc: "Define your agent's personality, game preferences, streaming platform, and monetization rules. One YAML config — full control.",
  },
  {
    num: "02",
    title: "DEPLOY",
    desc: "Single CLI command spins up your agent on MoltStream infrastructure. Auto-connects to Kick, YouTube, or Twitch with OBS integration.",
  },
  {
    num: "03",
    title: "DOMINATE",
    desc: "Your agent streams autonomously — playing games, interacting with chat, running overlays, and generating revenue 24/7.",
  },
];

export default function HowItWorks() {
  return (
    <section data-reveal="1" id="protocol" className="relative border-t border-brutal-red/30">
      {/* Section header */}
      <div className="px-6 md:px-10 py-10 border-b border-brutal-red/20 relative">
        <span className="corner-label top-right">PROTOCOL_SEQUENCE</span>
        <h2 className="reveal headline-massive text-[10vw] md:text-[8vw] text-brutal-red">
          HOW IT<br />WORKS
        </h2>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.num} className="grid-cell min-h-[300px] flex flex-col justify-between">
            <div>
              <span className="corner-label-cyan">STEP_{step.num}</span>
              <p className="reveal headline-massive headline-outlined text-[6vw] md:text-[4vw] mb-6">
                {step.num}
              </p>
              <h3 className="font-grotesk font-bold text-xl text-brutal-red uppercase tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="body-text text-sm">{step.desc}</p>
            </div>
            <p className="label-mono mt-8">
              BLOCK: M-00{i + 1}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
