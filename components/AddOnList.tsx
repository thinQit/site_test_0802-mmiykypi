"use client";

import { Separator } from '@/components/ui/separator'

interface AddOn {
  name: string
  price: string
}

interface AddOnListProps {
  title?: string
  items?: AddOn[]
}

export default function AddOnList({
  title = 'Popular Add-ons',
  items = [
    { name: 'Second Photographer (4 hrs)', price: '$350' },
    { name: 'Rush Delivery (48 hrs)', price: '$180' },
    { name: 'Fine Art Print Box', price: '$240' },
    { name: 'Additional Retouched Images (10)', price: '$120' },
  ],
}: Partial<AddOnListProps>) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-light">{title}</h3>
      <div className="mt-4">
        {items.map((item, i) => (
          <div key={item.name}>
            <div className="flex items-center justify-between py-3 text-sm">
              <span>{item.name}</span>
              <span className="text-muted-foreground">{item.price}</span>
            </div>
            {i < items.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </div>
  )
}
