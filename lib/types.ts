export type RoadmapStepStatus = 'completed' | 'in-progress' | 'pending';

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  status: RoadmapStepStatus;
  icon: any;
  details: string;
  resources?: { title: string; url: string }[];
}
