import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight01Icon,
  Route03Icon,
  AnalyticsUpIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import epicoraImage from "@/assets/epicora.png";
import algorithmsImage from "@/assets/algorithms.webp";
import { PageLayout, SectionDivider } from "@/components/layouts/page-layout";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  image?: StaticImageData;
  icon?: any;
  href: string;
  isNew?: boolean;
  items: string[];
}

const roadmaps: RoadmapItem[] = [
  {
    id: "epicora",
    title: "Epicora  🇧🇷",
    description:
      "Guia completo utilizado para treinar desenvolvedores da epicora software house, necessita apenas de uma inscrição da udemy.",
    image: epicoraImage,
    href: "/roadmap/epicora",
    isNew: false,
    items: ["TS", "React", "Node", "Nest"],
  },
  {
    id: "algorithms",
    title: "Algorithms  🇺🇸",
    description:
      "The Last Algorithms Course You'll Need - por ThePrimeagen. Big O, estruturas de dados, busca e ordenação.",
    image: algorithmsImage,
    href: "/roadmap/algorithms",
    isNew: false,
    items: ["Big O", "Trees", "Graphs", "Sort"],
  },
];

export default function Home() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-0 inline-flex items-center justify-center">
          <HugeiconsIcon
            icon={Route03Icon}
            className="size-32 text-violet-300"
            strokeWidth={0.8}
          />
        </div>

        <h1 className="text-5xl font-light tracking-tight text-violet-200 sm:text-7xl">
          estradamapa.sh
        </h1>
        <p className="mt-6 text-lg font-light leading-relaxed text-white/60 sm:text-xl">
          Roadmaps para você se especializar em stacks de tecnologia. Escolha um
          caminho e acompanhe seu progresso.
        </p>
      </div>

      <SectionDivider label="Roadmaps disponíveis" />

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((roadmap) => (
          <Link
            key={roadmap.id}
            href={roadmap.href}
            className="group relative flex items-center justify-between rounded-xl border border-white/10 bg-white/2 px-4 py-4 shadow-sm backdrop-blur transition-colors hover:border-white/20 hover:bg-white/4"
          >
            <span className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-violet-500/20" />

            <div className="relative flex min-w-0 items-center gap-4">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                {roadmap.image ? (
                  <Image
                    src={roadmap.image}
                    alt={roadmap.title}
                    fill
                    className="object-cover opacity-90"
                    sizes="48px"
                  />
                ) : roadmap.icon ? (
                  <HugeiconsIcon
                    icon={roadmap.icon}
                    className="size-6 text-violet-300"
                    strokeWidth={1.5}
                  />
                ) : null}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div className="truncate text-base font-medium text-white/85">
                    {roadmap.title}
                  </div>
                  {roadmap.isNew && (
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-violet-400" />
                      <span className="text-xs text-white/60">Novo</span>
                    </div>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {roadmap.items.slice(0, 4).map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/5"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative ml-3 flex shrink-0 items-center gap-3 text-white/40">
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-5 transition-transform group-hover:translate-x-0.5"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between">
        <p className="text-sm text-white/45">
          estradamapa.sh — feito para treinar pessoas com stacks do mundo real.
        </p>
        <Link href="https://github.com/jnzinho/estradamapa" target="_blank">
          <Button
            variant="outline"
            className="h-10 rounded-full border-white/15 bg-transparent text-white/80 hover:bg-white/5 hover:text-white"
          >
            Contribuir no GitHub
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
}
