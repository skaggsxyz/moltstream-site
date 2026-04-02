"use client";

const ART_STYLES = [
  { id: "anime", name: "ANIME", emoji: "🎌", desc: "Vibrant anime aesthetic" },
  { id: "realistic", name: "REALISTIC", emoji: "📸", desc: "Photorealistic digital art" },
  { id: "pixel", name: "PIXEL ART", emoji: "👾", desc: "Retro 32-bit style" },
  { id: "cyberpunk", name: "CYBERPUNK", emoji: "🌃", desc: "Neon-lit futuristic" },
  { id: "watercolor", name: "WATERCOLOR", emoji: "🎨", desc: "Soft painterly style" },
  { id: "comic", name: "COMIC BOOK", emoji: "💥", desc: "Bold comic art" },
  { id: "3d-render", name: "3D RENDER", emoji: "🧊", desc: "Pixar/Disney quality" },
  { id: "fantasy", name: "FANTASY", emoji: "⚔️", desc: "Magical RPG style" },
];

const PIPELINE_STEPS = [
  { num: "01", label: "UPLOAD", desc: "Upload 3-5 face photos + optional body shots. Different angles work best." },
  { num: "02", label: "ANALYZE", desc: "Gemini Vision extracts facial features, body proportions, and unique identifiers." },
  { num: "03", label: "STYLE", desc: "Pick your art style, color palette, mood, outfit, and accessories." },
  { num: "04", label: "GENERATE", desc: "Gemini Imagen creates a turnaround sheet + portrait in your chosen style." },
];

export default function CharacterCreator() {
  return (
    <section data-reveal="1" id="creator" className="relative border-t border-brutal-red/30">
      {/* Section header */}
      <div className="px-6 md:px-10 py-10 border-b border-brutal-red/20 relative">
        <span className="corner-label top-right">CHARACTER_ENGINE</span>
        <h2 className="reveal headline-massive text-[10vw] md:text-[8vw] text-brutal-red">
          CREATE YOUR
          <br />
          <span className="headline-outlined">STREAMER</span>
        </h2>
        <p className="body-text mt-6 max-w-2xl">
          Upload your photos. AI analyzes your features and generates a custom streamer
          avatar in any style — anime, cyberpunk, pixel art, or photorealistic. 30 seconds.
        </p>
      </div>

      {/* Pipeline steps */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {PIPELINE_STEPS.map((step, i) => (
          <div key={step.num} className="grid-cell min-h-[220px] flex flex-col justify-between">
            <div>
              <span className="corner-label-cyan">STEP_{step.num}</span>
              <p className="reveal headline-massive headline-outlined text-[6vw] md:text-[4vw] mb-4">
                {step.num}
              </p>
              <h3 className="font-grotesk font-bold text-lg text-brutal-red uppercase tracking-tight mb-3">
                {step.label}
              </h3>
              <p className="body-text text-sm">{step.desc}</p>
            </div>
            <p className="label-mono mt-6">BLOCK: C-00{i + 1}</p>
          </div>
        ))}
      </div>

      {/* Art styles grid */}
      <div className="border-t border-brutal-red/20">
        <div className="px-6 md:px-10 py-6 border-b border-brutal-red/10">
          <p className="label-mono-red">{"// AVAILABLE ART STYLES"}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {ART_STYLES.map((style) => (
            <div key={style.id} className="grid-cell min-h-[140px] flex flex-col justify-between group hover:bg-brutal-red/5 transition-colors">
              <div>
                <span className="corner-label-cyan">{style.id.toUpperCase()}</span>
                <p className="text-3xl mb-3">{style.emoji}</p>
                <h3 className="font-grotesk font-bold text-sm text-brutal-white uppercase tracking-tight">
                  {style.name}
                </h3>
                <p className="body-text text-xs mt-1">{style.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline diagram */}
      <div className="border-t border-brutal-red/20 px-6 md:px-10 py-10">
        <div className="bg-[#0a0a0a] border border-brutal-red/20 overflow-hidden max-w-3xl mx-auto">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-brutal-white/3 border-b border-brutal-red/10">
            <div className="w-2.5 h-2.5 rounded-full bg-brutal-red/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-brutal-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-brutal-white/20" />
            <span className="ml-3 font-mono text-[10px] text-brutal-white/30 uppercase">
              CHARACTER_PIPELINE
            </span>
          </div>
          <pre className="p-5 font-mono text-[11px] md:text-[12px] leading-relaxed text-brutal-white/60 overflow-x-auto whitespace-pre">{`  ┌─────────────┐     ┌──────────────┐     ┌─────────────┐
  │   UPLOAD     │────▸│   GEMINI     │────▸│  STYLE      │
  │  3-5 photos  │     │   VISION     │     │  CONFIG     │
  │  face + body │     │   analyze    │     │  8 styles   │
  └─────────────┘     └──────────────┘     └──────┬──────┘
                                                   │
                                                   ▼
                      ┌──────────────┐     ┌─────────────┐
                      │   DOWNLOAD   │◂────│   GEMINI    │
                      │  turnaround  │     │   IMAGEN    │
                      │  + portrait  │     │   generate  │
                      └──────────────┘     └─────────────┘`}</pre>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-brutal-red/20 px-6 md:px-10 py-12 text-center">
        <a
          href="/create"
          className="github-rainbow inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.1em] text-brutal-white px-10 py-5 transition-all duration-200"
        >
          <span className="text-xl">🎭</span>
          <span className="font-bold">LAUNCH CHARACTER CREATOR</span>
          <span className="text-brutal-white/50">→</span>
        </a>
        <p className="label-mono mt-6">FREE • NO LOGIN REQUIRED • POWERED BY GEMINI</p>
      </div>
    </section>
  );
}
