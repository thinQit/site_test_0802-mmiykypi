'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = 'Portfolio Highlights',
  subheadline = 'A curated selection of recent frames.',
  images = [],
}: Partial<GalleryMasonryProps>) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Accessibility: handle Escape key to close modal
  useEffect(() => {
    if (selectedIndex === null) return;
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft" && images && selectedIndex! > 0) {
        setSelectedIndex(selectedIndex! - 1);
      }
      if (e.key === "ArrowRight" && images && selectedIndex! < images.length - 1) {
        setSelectedIndex(selectedIndex! + 1);
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [selectedIndex, images]);

  // Accessibility: focus close button on open
  useEffect(() => {
    if (selectedIndex !== null) {
      const timeout = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [selectedIndex]);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg font-light text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(function (img, i) {
            return (
              <button
                key={i}
                type="button"
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-accent"
                tabIndex={0}
                aria-label={`Open image: ${img.alt}`}
                onClick={() => setSelectedIndex(i)}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={800}
                  height={800}
                  unoptimized
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-white">{img.caption}</p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
        {selectedIndex !== null && images[selectedIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative flex flex-col items-center"
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/70 border border-white/40 p-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close lightbox"
              >
                <svg width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" fill="none">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <Image
                src={images[selectedIndex].url}
                alt={images[selectedIndex].alt}
                width={1600}
                height={1000}
                unoptimized
                className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              />
              {images[selectedIndex].caption && (
                <div className="mt-4 max-w-lg px-2">
                  <p className="text-sm text-white drop-shadow">{images[selectedIndex].caption}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
