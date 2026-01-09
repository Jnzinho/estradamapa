import { RoadmapStep } from "@/lib/roadmap-data";
import { RoadmapCard } from "./roadmap-card";

interface RoadmapListProps {
  steps: RoadmapStep[];
}

export function RoadmapList({ steps }: RoadmapListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {steps.map((step, index) => (
        <RoadmapCard key={step.id} step={step} index={index} />
      ))}
    </div>
  );
}
