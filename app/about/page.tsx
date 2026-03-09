export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp"
import CTASparkles from "@/components/CTASparkles"
import ScrollReveal from "@/components/ScrollReveal"

export default function AboutPage() {
  return (
    <main>
      <ScrollReveal>
        <HeroLamp
          title="Hi, I’m Maya"
          words={["Photographer", "Storyteller", "Creative Partner"]}
          subtitle="I photograph people and brands with a minimal, editorial approach—so the story stays front and center."
          primaryCta={{ label: "See Work", href: "/gallery" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
        />
      </ScrollReveal>

      <ScrollReveal>
        <CTASparkles
          title="Let’s make something you’ll still love in five years"
          subtitle="If you have a date in mind, send it over—especially for weekend weddings."
          ctaLabel="Contact"
          ctaHref="/contact"
          secondaryCtaLabel="Pricing"
          secondaryCtaHref="/pricing"
        />
      </ScrollReveal>
    </main>
  )
}
