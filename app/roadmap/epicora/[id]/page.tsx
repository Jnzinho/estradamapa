import { roadmapData } from '@/lib/roadmap-data';
import { RoadmapDetailView } from '@/components/roadmap/roadmap-detail-view';
import { notFound } from 'next/navigation';

interface RoadmapDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return roadmapData.map((step) => ({
    id: step.id,
  }));
}

export default async function RoadmapDetailPage({
  params,
}: RoadmapDetailPageProps) {
  const { id } = await params;
  const step = roadmapData.find((s) => s.id === id);

  if (!step) {
    notFound();
  }

  return <RoadmapDetailView step={step} />;
}
