"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Action {
  label: string
  href: string
  variant?: 'default' | 'outline'
}

interface SectionHeaderProps {
  headline?: string
  subheadline?: string
  align?: 'left' | 'center'
  actions?: Action[]
  className?: string
}

export default function SectionHeader({
  headline = 'Section Title',
  subheadline = 'Short supporting copy that gives context for this section.',
  align = 'left',
  actions = [],
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('flex flex-col gap-5', align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight">{headline}</h2>
        <p className="mt-3 text-sm md:text-base text-muted-foreground">{subheadline}</p>
      </div>
      {actions.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {actions.map((action) => (
            <Button key={action.href + action.label} variant={action.variant === 'outline' ? 'outline' : 'default'} asChild>
              <Link href={action.href}>{action.label}</Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
