"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Ready to create your next visual story?',
  subtitle = 'Let’s plan a photography session tailored to your vision, timeline, and budget.',
  primaryLabel = 'Book a Session',
  primaryHref = '#contact',
  secondaryLabel = 'See Pricing',
  secondaryHref = '/pricing',
}: Partial<CTASectionProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl bg-black text-white p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-light tracking-tight">{title}</h3>
          <p className="mt-3 text-white/80 max-w-2xl text-sm md:text-base">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-lg bg-white text-black hover:bg-white/90">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg border-white/40 text-white hover:bg-white hover:text-black">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
