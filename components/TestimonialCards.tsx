"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  name: string
  role: string
}

interface TestimonialCardsProps {
  testimonials?: Testimonial[]
  muted?: boolean
}

export default function TestimonialCards({
  testimonials = [
    { quote: 'The photos felt honest, cinematic, and deeply personal. We cried when we saw the gallery.', name: 'Amelia Chen', role: 'Wedding Client' },
    { quote: 'Professional, calm, and wildly creative. Our campaign visuals finally feel premium.', name: 'Jonah Reed', role: 'Brand Founder' },
    { quote: 'Every frame had intention. Working together was seamless from brief to delivery.', name: 'Maya Torres', role: 'Magazine Editor' },
  ],
  muted = true,
}: Partial<TestimonialCardsProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((item) => (
        <Card key={item.name + item.role} className={cn('rounded-xl border border-border p-6', muted ? 'bg-muted/40' : 'bg-card')}>
          <p className="text-sm leading-relaxed">“{item.quote}”</p>
          <div className="mt-5">
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.role}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
