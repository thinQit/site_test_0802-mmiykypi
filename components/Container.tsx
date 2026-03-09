"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children?: ReactNode
  className?: string
  fullBleed?: boolean
}

export default function Container({
  children = null,
  className = '',
  fullBleed = false,
}: Partial<ContainerProps>) {
  if (fullBleed) {
    return <div className={cn('w-full', className)}>{children}</div>
  }

  return <div className={cn('mx-auto w-full max-w-7xl px-4 md:px-6', className)}>{children}</div>
}
