import "@/app/globals.css";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";
import type { ReactNode } from "react";

export const metadata = {
  title: "Noirframe Photography — Freelance Photographer in Brooklyn, NY",
  description:
    "Modern, minimal photography portfolio for Maya Rivera. Editorial portraits, brand campaigns, weddings, and events in NYC and beyond. View gallery, packages, and contact to book.",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Brooklyn, NY", href: "#" },
      { label: "hello@noirframe.photo", href: "mailto:hello@noirframe.photo" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "https://instagram.com/noirframe.photo" },
      { label: "Behance", href: "https://www.behance.net/noirframe" },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarSticky
          logo="Noirframe"
          navItems={navItems}
          ctaLabel="Book Now"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Noirframe Photography"
          description="Minimal, story-led photography for weddings, portraits, and brands. Freelance photographer Maya Rivera based in Brooklyn, NY."
          columns={footerColumns}
          copyright="© 2026 Noirframe Photography. All rights reserved."
        />
      </body>
    </html>
  );
}
