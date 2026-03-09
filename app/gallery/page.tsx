export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp"
import GalleryMasonry from "@/components/GalleryMasonry"
import CTASparkles from "@/components/CTASparkles"
import ScrollReveal from "@/components/ScrollReveal"

export default function GalleryPage() {
  return (
    <main>
      <ScrollReveal>
        <HeroLamp
          title="Gallery"
          words={["Portraits", "Weddings", "Brand", "Editorial", "Events"]}
          subtitle="A curated mix of portraits, weddings, and brand work."
          primaryCta={{ label: "Inquire", href: "/contact" }}
          secondaryCta={{ label: "Pricing", href: "/pricing" }}
        />
      </ScrollReveal>

      <ScrollReveal>
        <GalleryMasonry
          headline="Browse by mood"
          subheadline="Minimal UI—let the work lead."
          images={[
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg", alt: "Close-up portrait with soft shadows", caption: "Window light portrait — Williamsburg" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Coffee shop lifestyle scene with hands and cup", caption: "Lifestyle brand set — Fort Greene" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Couple laughing during ceremony exit", caption: "Ceremony exit — Brooklyn" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg", alt: "Fashion editorial with dramatic side light", caption: "Editorial test — Greenpoint" },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <CTASparkles
          title="Want images like this for your next launch or milestone?"
          subtitle="Send a few details and I’ll suggest the best package (or build a custom quote)."
          ctaLabel="Start an Inquiry"
          ctaHref="/contact"
          secondaryCtaLabel="See Packages"
          secondaryCtaHref="/pricing"
        />
      </ScrollReveal>
    </main>
  )
}
