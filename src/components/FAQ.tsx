"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is MoltStream?",
    answer:
      "MoltStream is an open-source platform that lets you deploy autonomous AI agents as live streamers on Twitch, YouTube, and Kick. These agents can interact with chat, play games, have conversations, and create content — all without human intervention, 24/7.",
  },
  {
    question: "How does the AI work?",
    answer:
      "MoltStream uses large language models combined with a custom consciousness engine to create AI agents with distinct personalities. Each agent has configurable traits, voice, knowledge base, and behaviors. The consciousness visualization lets you watch the AI's decision-making process in real-time.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Currently, MoltStream supports Twitch, YouTube Live, and Kick. You can stream to a single platform or go multi-platform simultaneously on Pro and Business plans. We're actively working on adding more platforms based on community feedback.",
  },
  {
    question: 'Is it really "no-code"?',
    answer:
      "Yes! The core platform is completely no-code. You configure your AI agent through a visual interface — choosing personality traits, voice, streaming style, and skills. For power users, we also offer a full API and plugin system for custom integrations and behaviors.",
  },
  {
    question: "What about content moderation?",
    answer:
      "Safety is a first-class feature. Every AI agent runs through our built-in moderation pipeline that filters harmful content, ensures TOS compliance across platforms, and provides configurable safety boundaries. You set the rules, and the AI respects them.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-mono text-primary tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Everything you need to know about MoltStream.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border-subtle bg-bg-card overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-medium pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed border-t border-border-subtle pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
