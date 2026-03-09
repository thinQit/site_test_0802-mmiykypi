'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'

interface LightboxItem {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

interface LightboxModalProps {
  items?: LightboxItem[]
  initialIndex?: number
  open?: boolean
  onClose?: () => void
}

export default function LightboxModal({
  items = [{ src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', alt: 'Gallery image', width: 1600, height: 900, caption: 'Portfolio highlight' }],
  initialIndex = 0,
  open = false,
  onClose = () => {},
}: Partial<LightboxModalProps>) {
  const [index, setIndex] = useState(initialIndex)
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => setIndex(initialIndex), [initialIndex])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((v) => (v + 1) % items.length)
      if (e.key === 'ArrowLeft') setIndex((v) => (v - 1 + items.length) % items.length)
      if (e.key.toLowerCase() === 'z') setZoomed((v) => !v)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [items.length, onClose, open])

  if (!open) return null
  const item = items[index] || items[0]

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 text-white" role="dialog" aria-modal="true">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button className="rounded-md border border-white/30 p-2" onClick={() => setZoomed((v) => !v)} aria-label="Toggle zoom">
          {zoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
        </button>
        <button className="rounded-md border border-white/30 p-2" onClick={onClose} aria-label="Close lightbox">
          <X className="h-5 w-5" />
        </button>
      </div>

      <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-md border border-white/30 p-2" onClick={() => setIndex((v) => (v - 1 + items.length) % items.length)} aria-label="Previous image">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md border border-white/30 p-2" onClick={() => setIndex((v) => (v + 1) % items.length)} aria-label="Next image">
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex h-full w-full items-center justify-center p-6 md:p-16">
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className={zoomed ? 'max-h-[90vh] w-auto cursor-zoom-out scale-110 transition-transform' : 'max-h-[85vh] w-auto cursor-zoom-in transition-transform'}
          unoptimized
        />
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center px-6">
        <p className="text-sm text-white/80">{item.caption || item.alt}</p>
      </div>
    </div>
  )
}
