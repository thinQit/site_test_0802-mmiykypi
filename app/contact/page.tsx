export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp"
import ContactForm from "@/components/ContactForm"
import CTASparkles from "@/components/CTASparkles"
import ScrollReveal from "@/components/ScrollReveal"

export default function ContactPage() {
  return (
    <main>
      <ScrollReveal>
        <HeroLamp
          title="Contact"
          words={["Portraits", "Brand", "Weddings", "Events"]}
          subtitle="Tell me what you need and when. I’ll respond within 1–2 business days."
          primaryCta={{ label: "Email: hello@noirframe.photo", href: "mailto:hello@noirframe.photo" }}
          secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ContactForm
          headline="Inquiry form"
          subheadline="The more context you share, the faster I can confirm availability and recommend a package."
          contactInfo={[
            { icon: "Phone", label: "Phone", value: "+1 (718) 555-0194" },
            { icon: "MapPin", label: "Service area", value: "NYC + travel" },
            { icon: "Clock3", label: "Hours", value: "Mon–Fri, 10am–6pm" },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <CTASparkles
          title="What happens next"
          subtitle="Reply & availability → Plan the shoot → Shoot day → Delivery."
          ctaLabel="View Pricing"
          ctaHref="/pricing"
          secondaryCtaLabel="About Maya"
          secondaryCtaHref="/about"
        />
      </ScrollReveal>
    </main>
  )
}
