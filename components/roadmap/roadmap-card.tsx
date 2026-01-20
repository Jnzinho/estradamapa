'use client';

import { RoadmapStep } from '@/lib/roadmap-data';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  CircleIcon,
  Time01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useRoadmap } from '@/components/roadmap/roadmap-context';

interface RoadmapCardProps {
  step: RoadmapStep;
  index: number;
  basePath?: string;
}

export function RoadmapCard({ step, index, basePath = "/roadmap/epicora" }: RoadmapCardProps) {
  const { getStepStatus } = useRoadmap();
  const currentStatus = getStepStatus(step.id);

  const statusColor = {
    completed:
      'bg-green-500/15 text-green-700 dark:text-green-400 dark:bg-green-500/20 hover:bg-green-500/25',
    'in-progress':
      'bg-blue-500/15 text-blue-700 dark:text-blue-400 dark:bg-blue-500/20 hover:bg-blue-500/25',
    pending:
      'bg-gray-500/15 text-gray-700 dark:text-gray-400 dark:bg-gray-500/20 hover:bg-gray-500/25',
  };

  const statusIcon = {
    completed: CheckmarkCircle01Icon,
    'in-progress': Time01Icon,
    pending: CircleIcon,
  };

  const statusLabel = {
    completed: 'Concluído',
    'in-progress': 'Em Progresso',
    pending: 'Não Realizado',
  };

  return (
    <Link href={`${basePath}/${step.id}`} className="block group h-full">
      <Card className="bg-black/10 backdrop-blur-sm h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg relative overflow-hidden">
        {/* Step Number Background */}
        <div className="absolute -right-4 -top-4 text-9xl font-bold text-muted/20 rotate-12 select-none group-hover:text-primary/10 transition-colors">
          {index + 1}
        </div>

        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div
              className={cn(
                'p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors',
                currentStatus === 'completed' &&
                  'text-green-600 bg-green-100 dark:bg-green-900/30',
                currentStatus === 'in-progress' &&
                  'text-blue-600 bg-blue-100 dark:bg-blue-900/30'
              )}
            >
              <HugeiconsIcon
                icon={step.icon}
                className="size-6"
                strokeWidth={1.5}
              />
            </div>
            <Badge
              variant="secondary"
              className={cn(
                'capitalize transition-colors',
                statusColor[currentStatus]
              )}
            >
              <HugeiconsIcon
                icon={statusIcon[currentStatus]}
                className="size-3.5 mr-1.5"
              />
              <span>{statusLabel[currentStatus]}</span>
            </Badge>
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {step.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {step.description}
          </CardDescription>
        </CardHeader>

        <CardContent>{/* Add more content here if needed */}</CardContent>

        <CardFooter className="mt-auto">
          <Button
            variant="ghost"
            className="bg-transparent! hover:bg-transparent! hover:text-primary! px-0 w-full group-hover:text-primary group-hover:bg-transparent justify-between"
          >
            Ver Detalhes
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
