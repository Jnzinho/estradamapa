import { RoadmapList } from '@/components/roadmap/roadmap-list';
import { SectionDivider } from '@/components/layouts/page-layout';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons';
import { RoadmapStep } from '@/lib/types';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface RoadmapPageLayoutProps {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  steps: RoadmapStep[];
  basePath: string;
  subtitle?: string;
  externalLink?: {
    url: string;
    label: string;
  };
}

export function RoadmapPageLayout({
  title,
  description,
  image,
  imageAlt,
  steps,
  basePath,
  subtitle,
  externalLink,
}: RoadmapPageLayoutProps) {
  return (
    <div>
      <Link href="/">
        <Button variant="ghost" className="mb-6 px-2">
          <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4 mr-1" />
          Voltar ao Início
        </Button>
      </Link>

      <div className="text-center mb-10 flex flex-col items-center justify-center">
        <Image
          src={image}
          alt={imageAlt}
          width={80}
          height={80}
          className="rounded-xl mb-6 ring-1 ring-white/10"
        />
        {subtitle && (
          <p className="text-white/40 text-xs font-light max-w-3xl text-center">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl font-light tracking-wide text-violet-200 sm:text-6xl mb-2">
          {title}
        </h1>
        <p className="text-white/60 text-lg font-light max-w-3xl text-center">
          {description}
        </p>
        {externalLink && (
          <a
            href={externalLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors"
          >
            {externalLink.label}
          </a>
        )}
      </div>

      <SectionDivider label="Trilha" />

      <div className="mt-10">
        <RoadmapList steps={steps} basePath={basePath} />
      </div>
    </div>
  );
}
