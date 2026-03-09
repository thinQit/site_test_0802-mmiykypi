"use client";

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand?: string;
  description?: string;
  columns?: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = 'Noirframe Photography',
  description = 'Minimal, story-led photography for weddings, portraits, and brands. Freelance photographer Maya Rivera based in Brooklyn, NY.',
  columns = [],
  copyright = '',
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-light tracking-tight">{brand}</h3>
            <p className="mt-3 text-sm font-light text-background/70">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-medium uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm font-light text-background/70 transition-colors hover:text-background">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm font-light text-background/50">
          {copyright || '\u00a9 ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
