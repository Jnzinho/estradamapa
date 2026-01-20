import { RoadmapPageLayout } from "@/components/roadmap/roadmap-page-layout";
import { roadmapData } from "./data";
import logo from "@/assets/epicora.png";

export default function EpicoraRoadmapPage() {
  return (
    <RoadmapPageLayout
      title="Roadmap Epicora"
      description="Conteúdo pensado em se especializar na stack typescript utilizada na Epicora Software House"
      image={logo}
      imageAlt="Epicora"
      steps={roadmapData}
      basePath="/roadmap/epicora"
    />
  );
}
