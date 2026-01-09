'use client';

import { RoadmapStep } from '@/lib/roadmap-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft01Icon,
  LinkSquare01Icon,
  CheckmarkCircle01Icon,
  Time01Icon,
  CircleIcon,
  Tick01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useRoadmap } from '@/components/roadmap/roadmap-context';

interface RoadmapDetailViewProps {
  step: RoadmapStep;
}

export function RoadmapDetailView({ step }: RoadmapDetailViewProps) {
  const { getStepStatus, isResourceCompleted, toggleResource } = useRoadmap();

  const currentStatus = getStepStatus(step.id);

  const statusColor = {
    completed:
      'bg-green-500/15 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
    'in-progress':
      'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    pending:
      'bg-gray-500/15 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-800',
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
    <div className="mx-auto max-w-4xl">
      <Link href="/roadmap/epicora">
        <Button variant="ghost" className="mb-4 px-2">
          <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4 mr-0" />
          Voltar ao Roadmap
        </Button>
      </Link>

      <div className="bg-black/20 backdrop-blur-2xl! border border-gray-800 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
          <div
            className={cn(
              'p-4 rounded-xl bg-secondary',
              currentStatus === 'completed' &&
                'bg-green-100 dark:bg-green-900/30 text-green-600',
              currentStatus === 'in-progress' &&
                'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
            )}
          >
            <HugeiconsIcon
              icon={step.icon}
              className="size-12"
              strokeWidth={1.5}
            />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold">{step.title}</h1>
              <Badge
                variant="outline"
                className={cn('text-sm py-1 px-3', statusColor[currentStatus])}
              >
                <HugeiconsIcon
                  icon={statusIcon[currentStatus]}
                  className="size-4 mr-1.5"
                />
                {statusLabel[currentStatus]}
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">{step.description}</p>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Visão Geral</h2>
            <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              {step.details}
            </div>
          </section>

          {step.resources && step.resources.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Recursos de Aprendizado
              </h2>
              <div className="grid gap-4">
                {step.resources.map((resource, i) => {
                  const isCompleted = isResourceCompleted(step.id, i);
                  return (
                    <div
                      key={i}
                      className={cn(
                        'flex items-center p-4 rounded-lg border border-gray-800 transition-all duration-200',
                        isCompleted
                          ? 'bg-primary/2 border-primary/20'
                          : 'hover:bg-white/5'
                      )}
                    >
                      <button
                        onClick={() => toggleResource(step.id, i)}
                        className={cn(
                          'mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 transition-colors cursor-pointer',
                          isCompleted
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'border-input bg-transparent hover:bg-muted'
                        )}
                      >
                        {isCompleted && (
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            className="h-4 w-4"
                          />
                        )}
                      </button>

                      <div className="flex-1">
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            'font-medium hover:underline flex items-center gap-2',
                            isCompleted &&
                              'text-muted-foreground line-through decoration-muted-foreground/50'
                          )}
                        >
                          {resource.title}
                          <HugeiconsIcon
                            icon={LinkSquare01Icon}
                            className="size-4 text-muted-foreground opacity-50"
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
