"use client";

import Link from 'next/link'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  brand?: string
  links?: FooterLink[]
  location?: string
  email?: string
  copyright?: string
}

export default function Footer({
  brand = 'Lumen Studio',
  links = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  location = 'Los Angeles, California',
  email = 'hello@lumenstudio.co',
  copyright = '© 2026 Lumen Studio. All rights reserved.',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-base font-medium tracking-wide">{brand}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Freelance photography for editorials, brands, and modern stories.</p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Contact</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
            <a href={'mailto:' + email} className="mt-2 inline-block text-sm text-muted-foreground hover:text-foreground">
              {email}
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">{copyright}</p>
      </div>
    </footer>
  )
}
