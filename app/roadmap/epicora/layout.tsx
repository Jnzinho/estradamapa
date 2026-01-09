import { RoadmapProvider } from '@/components/roadmap/roadmap-context';
import { PageLayout } from '@/components/layouts/page-layout';

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoadmapProvider>
      <PageLayout containerClassName="py-10 sm:py-14">{children}</PageLayout>
    </RoadmapProvider>
  );
}
