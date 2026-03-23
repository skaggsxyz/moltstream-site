"use client";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started. See what's possible.",
    features: [
      "1 AI streamer",
      "10 hours / month",
      "Single platform",
      "MoltStream watermark",
      "Community support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Starter",
    price: "$149",
    period: "/mo",
    description: "For creators ready to experiment.",
    features: [
      "1 AI streamer",
      "200 hours / month",
      "Single platform",
      "No watermark",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Early Access",
    popular: false,
  },
  {
    name: "Pro",
    price: "$399",
    period: "/mo",
    description: "Go live 24/7 across platforms.",
    features: [
      "1 AI streamer",
      "Unlimited hours (24/7)",
      "Multi-platform streaming",
      "Advanced analytics",
      "Consciousness visualization",
      "Priority support",
      "Custom persona fine-tuning",
    ],
    cta: "Get Early Access",
    popular: true,
  },
  {
    name: "Business",
    price: "$999",
    period: "/mo",
    description: "Scale your AI streaming operation.",
    features: [
      "3 AI streamers",
      "Unlimited hours (24/7)",
      "Multi-platform streaming",
      "Custom avatars",
      "Full API access",
      "Dedicated support",
      "Multi-agent interactions",
      "White-label option",
    ],
    cta: "Get Early Access",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-mono text-primary tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Start free. Scale when you&apos;re ready. No hidden fees, no
            surprise charges.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div
                className={`relative p-6 rounded-2xl border h-full flex flex-col transition-all duration-300 card-glow ${
                  plan.popular
                    ? "pricing-popular border-primary/30 bg-bg-card"
                    : "border-border-subtle bg-bg-card hover:bg-bg-card-hover"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-bg text-[10px] font-mono font-semibold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-text-muted">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={`block text-center py-2.5 rounded-xl text-sm font-medium transition-all ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-dark text-bg btn-glow"
                      : "border border-border-subtle hover:border-primary/30 text-text-primary"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-text-muted mt-8 reveal">
          All plans include security updates and platform maintenance. Prices in
          USD. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
