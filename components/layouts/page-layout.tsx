import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function PageLayout({
  children,
  containerClassName,
}: {
  children: ReactNode;
  containerClassName?: string;
}) {
  return (
    <div className="min-h-screen bg-[#070B18] text-foreground">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#0B1026] via-[#070B18] to-[#070B18]" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-linear-to-b from-violet-500/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-64 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-linear-to-t from-sky-500/10 to-transparent blur-3xl" />
      </div>

      <div
        className={cn(
          'relative mx-auto w-full max-w-6xl px-4 py-16 sm:py-20',
          containerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mt-14 flex items-center gap-6">
      <div className="h-px flex-1 bg-white/10" />
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 shadow-sm backdrop-blur">
        {label}
      </span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

