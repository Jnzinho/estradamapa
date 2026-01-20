import { RoadmapProvider } from '@/components/roadmap/roadmap-context';
import { PageLayout } from '@/components/layouts/page-layout';
import { roadmapData } from './data';

export default function EpicoraRoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoadmapProvider roadmapId="epicora" roadmapData={roadmapData}>
      <PageLayout containerClassName="py-10 sm:py-14">{children}</PageLayout>
    </RoadmapProvider>
  );
}
