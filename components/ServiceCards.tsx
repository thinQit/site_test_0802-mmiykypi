"use client";

import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Service {
  title: string
  description: string
  bullets: string[]
}

interface ServiceCardsProps {
  services?: Service[]
}

export default function ServiceCards({
  services = [
    {
      title: 'Wedding Coverage',
      description: 'Documentary-style full-day coverage with natural edits and timeless tones.',
      bullets: ['8-10 hours coverage', 'Online gallery delivery', 'Highlight preview in 72 hours'],
    },
    {
      title: 'Portrait Sessions',
      description: 'Personal or couple portraits designed around light, movement, and mood.',
      bullets: ['Location planning', 'Style direction', 'Retouched final selects'],
    },
    {
      title: 'Brand & Editorial',
      description: 'Visual storytelling for campaigns, founders, and publications.',
      bullets: ['Creative concepting', 'Shot list support', 'Commercial licensing options'],
    },
  ],
}: Partial<ServiceCardsProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Card key={service.title} className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-light">{service.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
          <ul className="mt-4 space-y-2">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}
