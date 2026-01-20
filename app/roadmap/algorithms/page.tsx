import { RoadmapList } from "@/components/roadmap/roadmap-list";
import { algorithmsRoadmapData } from "@/lib/algorithms-roadmap-data";
import { SectionDivider } from "@/components/layouts/page-layout";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnalyticsUpIcon } from "@hugeicons/core-free-icons";
import algorithmsImage from "@/assets/algorithms.webp";
import Image from "next/image";

export default function AlgorithmsRoadmapPage() {
  return (
    <div>
      <div className="text-center mb-10 flex flex-col items-center justify-center">
        <Image
          src={algorithmsImage}
          alt="Algoritmos"
          width={80}
          height={80}
          className="rounded-xl mb-6 ring-1 ring-white/10"
        />
        <p className="text-white/40 text-xs font-light max-w-3xl text-center">
          Não é muito um roadmap (é um curso), mas é um conteúdo fantástico
        </p>
        <h1 className="text-4xl font-light tracking-wide text-violet-200 sm:text-6xl mb-2">
          Algorithms (Inglês)
        </h1>
        <p className="text-white/60 text-lg font-light max-w-3xl text-center">
          The Last Algorithms Course You&apos;ll Need - por ThePrimeagen.
          Aprenda Big O, estruturas de dados e algoritmos de busca e ordenação.
        </p>
        <a
          href="https://frontendmasters.com/courses/algorithms/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors"
        >
          Ver curso no Frontend Masters
        </a>
      </div>

      <SectionDivider label="Trilha" />

      <div className="mt-10">
        <RoadmapList
          steps={algorithmsRoadmapData}
          basePath="/roadmap/algorithms"
        />
      </div>
    </div>
  );
}
