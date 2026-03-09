'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface GalleryItem {
  id: string
  title: string
  category: string
  imageSrc: string
  width: number
  height: number
}

interface MasonryGalleryProps {
  items?: GalleryItem[]
  gapClass?: 'gap-2' | 'gap-3' | 'gap-4'
  onImageClick?: (index: number) => void
}

export default function MasonryGallery({
  items = [
    { id: '1', title: 'Editorial Light', category: 'Editorial', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', width: 1200, height: 1600 },
    { id: '2', title: 'City Portrait', category: 'Portrait', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', width: 800, height: 1000 },
    { id: '3', title: 'Brand Story', category: 'Commercial', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', width: 900, height: 1100 },
    { id: '4', title: 'Ceremony Frame', category: 'Wedding', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', width: 1400, height: 1000 },
    { id: '5', title: 'Quiet Moment', category: 'Portrait', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', width: 800, height: 1200 },
    { id: '6', title: 'Studio Motion', category: 'Editorial', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', width: 900, height: 1300 },
  ],
  gapClass = 'gap-3',
  onImageClick,
}: Partial<MasonryGalleryProps>) {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = useMemo(() => ['All', ...Array.from(new Set(items.map((item) => item.category)))], [items])
  const filtered = activeCategory === 'All' ? items : items.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-all',
                activeCategory === cat ? 'border-black ring-2 ring-black/20' : 'border-border text-muted-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={cn('columns-1 md:columns-2 lg:columns-3', gapClass)}>
          {filtered.map((item, index) => (
            <button
              key={item.id}
              className={cn('mb-2 md:mb-3 lg:mb-4 w-full break-inside-avoid overflow-hidden rounded-xl group')}
              onClick={() => onImageClick?.(index)}
              aria-label={'Open ' + item.title}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                unoptimized
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
