"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { roadmapData, RoadmapStepStatus } from "@/lib/roadmap-data";

interface RoadmapState {
  completedResources: Record<string, number[]>; // stepId -> array of completed resource indices
}

interface RoadmapContextType {
  isResourceCompleted: (stepId: string, resourceIndex: number) => boolean;
  toggleResource: (stepId: string, resourceIndex: number) => void;
  getStepStatus: (stepId: string) => RoadmapStepStatus;
  resetProgress: () => void;
}

const RoadmapContext = createContext<RoadmapContextType | undefined>(undefined);

export function RoadmapProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<RoadmapState>({
    completedResources: {},
  });

  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("roadmap-progress");
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse roadmap progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("roadmap-progress", JSON.stringify(state));
    }
  }, [state, isLoaded]);

  const isResourceCompleted = (stepId: string, resourceIndex: number) => {
    return state.completedResources[stepId]?.includes(resourceIndex) ?? false;
  };

  const toggleResource = (stepId: string, resourceIndex: number) => {
    setState((prev) => {
      const currentCompleted = prev.completedResources[stepId] || [];
      const isCompleted = currentCompleted.includes(resourceIndex);
      
      let newCompleted;
      if (isCompleted) {
        newCompleted = currentCompleted.filter((i) => i !== resourceIndex);
      } else {
        newCompleted = [...currentCompleted, resourceIndex];
      }

      return {
        ...prev,
        completedResources: {
          ...prev.completedResources,
          [stepId]: newCompleted,
        },
      };
    });
  };

  const getStepStatus = (stepId: string): RoadmapStepStatus => {
    const step = roadmapData.find((s) => s.id === stepId);
    if (!step) return "pending";

    // Check if user has interacted with this step
    const completedIndices = state.completedResources[stepId] || [];
    const totalResources = step.resources?.length || 0;

    // Logic: 
    // 1. If totalResources > 0 AND all completed -> completed
    // 2. If totalResources > 0 AND some completed -> in-progress
    // 3. If totalResources > 0 AND none completed -> pending
    
    if (totalResources > 0) {
      if (completedIndices.length === totalResources) {
        return "completed";
      }
      if (completedIndices.length > 0) {
        return "in-progress";
      }
      return "pending";
    }

    return step.status; 
  };

  const resetProgress = () => {
    setState({ completedResources: {} });
  };

  return (
    <RoadmapContext.Provider
      value={{
        isResourceCompleted,
        toggleResource,
        getStepStatus,
        resetProgress,
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
}

export function useRoadmap() {
  const context = useContext(RoadmapContext);
  if (context === undefined) {
    throw new Error("useRoadmap must be used within a RoadmapProvider");
  }
  return context;
}
