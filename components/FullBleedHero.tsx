"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Fact {
  label: string
  value: string
}

interface FullBleedHeroProps {
  title?: string
  subtitle?: string
  imageSrc?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  facts?: Fact[]
}

export default function FullBleedHero({
  title = 'Timeless Photography for Modern Stories',
  subtitle = 'Freelance photographer capturing weddings, editorials, and brand narratives with natural light and a clean cinematic style.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  primaryCtaLabel = 'View Portfolio',
  primaryCtaHref = '#portfolio',
  secondaryCtaLabel = 'Get in Touch',
  secondaryCtaHref = '#contact',
  facts = [
    { label: 'Projects', value: '150+' },
    { label: 'Years Experience', value: '8' },
    { label: 'Cities Shot In', value: '12' },
  ],
}: Partial<FullBleedHeroProps>) {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <Image src={imageSrc} alt="Photographer hero background" fill priority className="object-cover" unoptimized />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 md:px-6 py-20 md:py-24 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight">{title}</h1>
          <p className="mt-4 max-w-2xl text-sm md:text-lg text-white/85">{subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="rounded-lg px-6">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg px-6 border-white/60 text-white hover:bg-white hover:text-black">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-white/30 bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-xl md:text-2xl font-light">{fact.value}</p>
              <p className="text-xs md:text-sm text-white/80">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
