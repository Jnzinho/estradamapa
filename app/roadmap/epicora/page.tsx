import { RoadmapList } from '@/components/roadmap/roadmap-list';
import { roadmapData } from '@/lib/roadmap-data';
import logo from '@/assets/epicora.png';
import Image from 'next/image';
import { SectionDivider } from '@/components/layouts/page-layout';

export default function RoadmapPage() {
  return (
    <div>
      <div className="text-center mb-10 flex flex-col items-center justify-center">
        <Image
          src={logo}
          alt="Epicora"
          width={80}
          height={80}
          className="rounded-xl mb-3 ring-1 ring-white/10"
        />
        <h1 className="text-4xl font-light tracking-wide text-violet-200 sm:text-6xl mb-2">
          Roadmap Epicora
        </h1>
        <p className="text-white/60 text-lg font-light max-w-3xl text-center">
          Conteúdo pensado em se especializar na stack typescript utilizada na
          Epicora Software House
        </p>
      </div>

      <SectionDivider label="Trilha" />

      <div className="mt-10">
        <RoadmapList steps={roadmapData} />
      </div>
    </div>
  );
}
