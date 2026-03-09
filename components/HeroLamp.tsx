"use client";
import { LampContainer } from "@/components/ui/effects/lamp-effect";
import { FlipWords } from "@/components/ui/text/flip-words";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroLampProps {
  headline?: string;
  flipWords?: string[];
  subheadline?: string;
  title?: string;
  words?: string[];
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroLamp({
  headline = "Timeless Photography for",
  flipWords = [],
  subheadline = "Editorial elegance with a minimal visual language, crafted around your moments.",
  title,
  words,
  subtitle,
  primaryCta = { label: "View Portfolio", href: "#portfolio" },
  secondaryCta = { label: "Book a Session", href: "#contact" },
}: Partial<HeroLampProps>) {
  // Allow both prop shapes for backward compatibility
  const resolvedHeadline = title ?? headline;
  const resolvedWords = words ?? flipWords ?? [];
  const resolvedSubheadline = subtitle ?? subheadline;

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-8 bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 py-4 bg-clip-text text-center text-4xl font-light tracking-tight text-transparent md:text-7xl"
      >
        {resolvedHeadline} <br />
        <FlipWords
          words={
            resolvedWords.length ? resolvedWords : ["Weddings", "Portraits", "Brands"]
          }
          className="text-amber-300"
        />
      </motion.h1>
      {resolvedSubheadline && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 max-w-2xl text-center text-lg font-light text-slate-300"
        >
          {resolvedSubheadline}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <Button size="lg" className="rounded-lg bg-amber-500 px-8 py-6 text-lg text-black hover:bg-amber-400" asChild>
          <a href={primaryCta?.href}>{primaryCta?.label}</a>
        </Button>
        {secondaryCta && (
          <Button variant="outline" size="lg" className="rounded-lg border-slate-500 px-8 py-6 text-lg text-slate-200 hover:bg-slate-800" asChild>
            <a href={secondaryCta.href}>{secondaryCta.label}</a>
          </Button>
        )}
      </motion.div>
    </LampContainer>
  );
}
