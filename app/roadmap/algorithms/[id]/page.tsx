import { algorithmsRoadmapData } from '@/lib/algorithms-roadmap-data';
import { RoadmapDetailView } from '@/components/roadmap/roadmap-detail-view';
import { notFound } from 'next/navigation';

interface RoadmapDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return algorithmsRoadmapData.map((step) => ({
    id: step.id,
  }));
}

export default async function AlgorithmsDetailPage({
  params,
}: RoadmapDetailPageProps) {
  const { id } = await params;
  const step = algorithmsRoadmapData.find((s) => s.id === id);

  if (!step) {
    notFound();
  }

  return <RoadmapDetailView step={step} backPath="/roadmap/algorithms" />;
}
