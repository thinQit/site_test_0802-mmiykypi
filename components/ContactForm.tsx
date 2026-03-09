'use client';

import { Button } from '@/components/ui/button';
import { AceternityInput } from '@/components/ui/aceternity-input';
import { Textarea } from '@/components/ui/textarea';
import { AceternityLabel } from '@/components/ui/aceternity-label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Camera, LucideIcon } from 'lucide-react';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const iconMap: Record<string, LucideIcon> = {
  Mail,
  MapPin,
  Phone,
  Camera,
};

export default function ContactForm({
  headline = 'Let’s Plan Your Shoot',
  subheadline = 'Share your vision, timeline, and location. We’ll reply within 24 hours.',
  contactInfo = [],
}: Partial<ContactFormProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg font-light text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="rounded-xl border border-border bg-card shadow-sm">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <AceternityLabel htmlFor="name">Name</AceternityLabel>
                    <AceternityInput id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <AceternityLabel htmlFor="email">Email</AceternityLabel>
                    <AceternityInput id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <AceternityLabel htmlFor="subject">Subject</AceternityLabel>
                  <AceternityInput id="subject" placeholder="Wedding, portrait, brand, or event" />
                </div>
                <div className="space-y-2">
                  <AceternityLabel htmlFor="message">Message</AceternityLabel>
                  <Textarea id="message" placeholder="Tell us more about your story..." rows={5} />
                </div>
                <Button type="submit" className="w-full rounded-lg px-6 py-3 font-medium tracking-tight">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function (info, i) {
                const Icon = iconMap[info.icon] || Mail;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <Icon className="mt-1 h-5 w-5 text-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="font-light text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
