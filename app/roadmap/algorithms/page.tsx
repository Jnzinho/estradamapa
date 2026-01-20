import { RoadmapPageLayout } from "@/components/roadmap/roadmap-page-layout";
import { roadmapData } from "./data";
import algorithmsImage from "@/assets/algorithms.webp";

export default function AlgorithmsRoadmapPage() {
  return (
    <RoadmapPageLayout
      title="Algorithms"
      description="The Last Algorithms Course You'll Need - by ThePrimeagen. Learn Big O, data structures, search and sorting algorithms."
      image={algorithmsImage}
      imageAlt="Algoritmos"
      steps={roadmapData}
      basePath="/roadmap/algorithms"
      externalLink={{
        url: "https://frontendmasters.com/courses/algorithms/",
        label: "Ver curso no Frontend Masters",
      }}
    />
  );
}
