import { RoadmapPageLayout } from "@/components/roadmap/roadmap-page-layout";
import { roadmapData } from "./data";
import algorithmsImage from "@/assets/algorithms.webp";

export default function AlgorithmsRoadmapPage() {
  return (
    <RoadmapPageLayout
      title="Algorithms"
      description="The Last Algorithms Course You'll Need - por ThePrimeagen. Aprenda Big O, estruturas de dados e algoritmos de busca e ordenação."
      image={algorithmsImage}
      imageAlt="Algoritmos"
      steps={roadmapData}
      basePath="/roadmap/algorithms"
      subtitle="Not really a roadmap, its just theprimeagen course, but is fantastic"
      externalLink={{
        url: "https://frontendmasters.com/courses/algorithms/",
        label: "Ver curso no Frontend Masters",
      }}
    />
  );
}
