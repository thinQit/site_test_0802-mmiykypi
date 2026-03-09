export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp"
import PricingTable from "@/components/PricingTable"
import FAQAccordion from "@/components/FAQAccordion"
import CTASparkles from "@/components/CTASparkles"
import ScrollReveal from "@/components/ScrollReveal"

export default function PricingPage() {
  return (
    <main>
      <ScrollReveal>
        <HeroLamp
          title="Pricing"
          words={["Portraits", "Brand", "Weddings", "Events"]}
          subtitle="Straightforward packages with room to customize."
          primaryCta={{ label: "Check Availability", href: "/contact" }}
          secondaryCta={{ label: "View Gallery", href: "/gallery" }}
        />
      </ScrollReveal>

      <ScrollReveal>
        <PricingTable
          headline="Packages"
          subheadline="Most clients choose Signature for portraits and Brand Half-Day for campaigns."
          tiers={[
            {
              name: "Portrait Mini",
              price: "$350",
              period: "session",
              description: "Quick, clean portraits for profiles and announcements.",
              features: ["30 minutes", "1 location", "10 edited images", "48-hour delivery"],
              ctaLabel: "Inquire about Mini",
              ctaHref: "/contact?package=portrait-mini",
            },
            {
              name: "Portrait Signature",
              price: "$650",
              period: "session",
              description: "A relaxed session with variety and time to get comfortable.",
              features: ["90 minutes", "Up to 2 nearby locations", "35 edited images", "7–10 day delivery"],
              ctaLabel: "Book Signature",
              ctaHref: "/contact?package=portrait-signature",
              highlighted: true,
            },
            {
              name: "Brand Half-Day",
              price: "$1200",
              period: "half-day",
              description: "For small campaigns, product + lifestyle, and website refreshes.",
              features: ["Up to 4 hours", "Shot list + moodboard", "60 edited images", "Web + social usage"],
              ctaLabel: "Inquire about Brand Half-Day",
              ctaHref: "/contact?package=brand-half-day",
            },
            {
              name: "Wedding Essentials",
              price: "$2800",
              period: "day",
              description: "Intimate weddings and city elopements with candid coverage.",
              features: ["6 hours coverage", "Sneak peeks in 72 hours", "400+ edited images", "3–4 week delivery"],
              ctaLabel: "Check Wedding Availability",
              ctaHref: "/contact?package=wedding-essentials",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <FAQAccordion
          headline="FAQ"
          subheadline="A few quick answers—happy to cover anything else on a call."
          items={[
            {
              question: "How do I book?",
              answer:
                "Send an inquiry with your preferred date(s) and shoot type. I’ll confirm availability, then we’ll lock it in with a simple agreement and a 30% retainer.",
            },
            {
              question: "Do you travel?",
              answer:
                "Yes. NYC is easiest, but I regularly travel to Philadelphia, Boston, and Hudson Valley. For destination weddings, travel is billed at cost.",
            },
            {
              question: "Can you help with posing?",
              answer: "Absolutely. I’ll guide you with simple prompts and micro-adjustments so you look natural—not stiff.",
            },
            {
              question: "What’s your editing style?",
              answer:
                "Clean and true-to-life with gentle contrast. Skin texture stays real; I avoid heavy smoothing and trendy color casts.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <CTASparkles
          title="Ready when you are"
          subtitle="Tell me your date, location, and what the images are for. I’ll recommend the best package and next steps."
          ctaLabel="Contact"
          ctaHref="/contact"
          secondaryCtaLabel="View Gallery"
          secondaryCtaHref="/gallery"
        />
      </ScrollReveal>
    </main>
  )
}
