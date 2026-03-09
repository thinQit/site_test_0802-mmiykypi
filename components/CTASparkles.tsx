"use client";
import { SparklesCore } from "@/components/ui/backgrounds/sparkles";
import { Button } from "@/components/ui/button";

interface CTASparklesProps {
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  sparkleColor?: string;
  title?: string;
  subtitle?: string;
}

export default function CTASparkles({
  headline = "Ready to Create Something Beautiful?",
  description = "Reserve your date and let’s craft a visual story that feels personal, cinematic, and timeless.",
  ctaLabel = "Book Now",
  ctaHref = "#contact",
  secondaryCtaLabel = "See Services",
  secondaryCtaHref = "#services",
  sparkleColor = "#f59e0b",
  title,
  subtitle,
}: Partial<CTASparklesProps>) {
  // Accept both legacy (headline/description) and new (title/subtitle) prop names
  const resolvedHeadline = title ?? headline;
  const resolvedDescription = subtitle ?? description;

  return (
    <section className="relative flex h-[30rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="cta-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          particleColor={sparkleColor}
        />
      </div>
      <div className="relative z-10 px-4 text-center">
        <h2 className="text-center text-3xl font-light text-white md:text-5xl lg:text-6xl">{resolvedHeadline}</h2>
        {resolvedDescription && (
          <p className="mx-auto mt-4 max-w-xl text-sm font-light text-white/60 md:text-lg">{resolvedDescription}</p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="rounded-lg bg-white px-8 py-6 text-lg text-black hover:bg-white/90" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="rounded-lg border-white/30 px-8 py-6 text-lg text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
