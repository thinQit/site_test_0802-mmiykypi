export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp"
import GalleryMasonry from "@/components/GalleryMasonry"
import ServiceCards from "@/components/ServiceCards"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import ContactForm from "@/components/ContactForm"
import CTASparkles from "@/components/CTASparkles"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <main>
      <ScrollReveal>
        <HeroLamp
          title="Photos that feel like a scene, not a pose."
          words={["Editorial", "Weddings", "Brand", "Portraits"]}
          subtitle="I’m Maya Rivera, a freelance photographer in Brooklyn specializing in editorial portraits, brand campaigns, and intimate weddings—shot with clean composition, honest light, and minimal retouching."
          primaryCta={{ label: "View Gallery", href: "/gallery" }}
          secondaryCta={{ label: "Check Availability", href: "/contact" }}
        />
      </ScrollReveal>

      <ScrollReveal>
        <GalleryMasonry
          headline="Selected work"
          subheadline="A tight edit across portraits, weddings, and brand storytelling."
          images={[
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg", alt: "Studio portrait with hard light and clean backdrop", caption: "Portraits — Williamsburg, NYC" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Candid couple walking under city lights", caption: "Weddings — DUMBO, NYC" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Product and hands detail shot for skincare brand", caption: "Brand — SoHo, NYC" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg", alt: "Editorial fashion portrait with dramatic shadows", caption: "Editorial — Greenpoint, NYC" },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ServiceCards />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialsAnimated
          title="Kind words from clients"
          subtitle="A smooth shoot matters as much as the final images."
          testimonials={[
            {
              quote:
                "Maya nailed our brand tone—clean, warm, and premium. She came in with a shot list, kept the day moving, and delivered a gallery we used across our site and launch ads.",
              name: "Alyssa Chen",
              designation: "Founder, Field & Form Skincare",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "The portraits felt effortless. Direction was clear, the set was calm, and the final edits looked like me on my best day—no over-retouching.",
              name: "Jordan Patel",
              designation: "Creative Director",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "We wanted candid photos with a little edge. Maya captured the energy perfectly and the sneak peeks made us cry (in the best way).",
              name: "Sam & Elena",
              designation: "Wedding clients",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            },
          ]}
          autoplay
        />
      </ScrollReveal>

      <ScrollReveal>
        <ContactForm
          headline="Tell me what you’re making"
          subheadline="Share your date, location, and what you need the photos for. I’ll reply within 1–2 business days with next steps."
          contactInfo={[
            { icon: "Mail", label: "Email", value: "hello@noirframe.photo" },
            { icon: "Phone", label: "Phone", value: "+1 (718) 555-0194" },
            { icon: "MapPin", label: "Location", value: "Brooklyn, NY (travel available)" },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <CTASparkles
          title="Ready to create something timeless?"
          subtitle="Currently booking April–September 2026 with limited weekend wedding availability."
          ctaLabel="Send Message"
          ctaHref="/contact"
          secondaryCtaLabel="See Pricing"
          secondaryCtaHref="/pricing"
        />
      </ScrollReveal>
    </main>
  )
}
