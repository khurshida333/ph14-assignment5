import React from 'react';
import TechCard from './TechCard';
import { Technology } from '../types';

interface TechGridProps {
  technologies: Technology[];
  onAddToStack: (tech: Technology) => void;
  stackIds: string[];
}

const TechGrid: React.FC<TechGridProps> = ({ technologies, onAddToStack, stackIds }) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="text-xs text-gray-500">Pick and build your technology stack seamlessly below.</p>
      </div>

      {/* 3-column layout (1 on mobile, 2 on tablet, 3 on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            onAddToStack={onAddToStack}
            isAdded={stackIds.includes(tech.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TechGrid;