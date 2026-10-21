import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] space-y-4">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
      <p className="text-gray-500 font-medium text-sm">Loading Technologies...</p>
    </div>
  );
};

export default LoadingSpinner;