"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline?: string;
  subheadline?: string;
  title?: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "Client Stories",
  subheadline = "Thoughtful words from couples, founders, and families.",
  title,
  subtitle,
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  // Accept both legacy (headline/subheadline) and new (title/subtitle) prop names
  const resolvedHeadline = title ?? headline;
  const resolvedSubheadline = subtitle ?? subheadline;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">{resolvedHeadline}</h2>
          {resolvedSubheadline && <p className="mt-4 text-lg font-light text-muted-foreground">{resolvedSubheadline}</p>}
        </div>
        {testimonials.length > 0 &&
          <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
        }
      </div>
    </section>
  );
}
