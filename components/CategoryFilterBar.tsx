'use client'

import { cn } from '@/lib/utils'

interface CategoryFilterBarProps {
  categories?: string[]
  activeCategory?: string
  onChange?: (category: string) => void
}

export default function CategoryFilterBar({
  categories = ['All', 'Wedding', 'Portrait', 'Editorial', 'Commercial'],
  activeCategory = 'All',
  onChange = () => {},
}: Partial<CategoryFilterBarProps>) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const active = activeCategory === category
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm transition-all',
              active ? 'border-black ring-2 ring-black/20 bg-black text-white' : 'border-border text-foreground/80 hover:border-foreground/30'
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
