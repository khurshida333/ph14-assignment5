import React from 'react';
import { Star, Check } from 'lucide-react';
import { Technology } from '../types';

interface TechCardProps {
  tech: Technology;
  onAddToStack: (tech: Technology) => void;
  isAdded: boolean;
}

const TechCard: React.FC<TechCardProps> = ({ tech, onAddToStack, isAdded }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Top Header: Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-gray-50 p-2 border border-gray-100 flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            {tech.badge}
          </span>
        </div>

        {/* Name and Description */}
        <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
        <p className="text-xs text-gray-500 mb-4 line-clamp-3 leading-relaxed">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Chips: Category & Difficulty */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs px-2.5 py-0.5 rounded-md bg-gray-100 font-medium text-gray-700">
            {tech.category}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
            {tech.difficulty}
          </span>
        </div>

        {/* Rating and Action Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-gray-700">{tech.rating}</span>
          </div>

          <button
            onClick={() => onAddToStack(tech)}
            disabled={isAdded}
            className={`text-xs font-medium px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              isAdded 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-900 text-white hover:bg-gray-800 active:scale-95'
            }`}
          >
            {isAdded ? (
              <>
                <Check size={14} /> ✓ Added to Stack
              </>
            ) : (
              'Add to Stack'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;