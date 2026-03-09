export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  location?: string;
  caption?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface PricingTier {
  name: string;
  price: number;
  unit: string;
  description: string;
  highlights: string[];
  featured?: boolean;
  cta: CTA;
}

export interface ContactField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required: boolean;
  placeholder?: string;
  options?: string[];
}
