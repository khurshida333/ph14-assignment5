import React from 'react';
import { X, Layers } from 'lucide-react';
import { Technology } from '../types';

interface SidebarProps {
  stack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ stack, onRemoveFromStack, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm sticky top-20">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Your Stack</h3>
          <p className="text-xs text-gray-500 font-medium">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Stack Content */}
      {stack.length === 0 ? (
        <div className="text-center py-12 px-4 border-2 border-dashed border-gray-100 rounded-lg">
          <Layers className="mx-auto h-8 w-8 text-gray-300 mb-2" />
          <p className="text-sm font-semibold text-gray-500">Your stack is empty</p>
          <p className="text-xs text-gray-400 mt-1">Click "Add to Stack" on any technology to build your custom stack.</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-none">{item.name}</p>
                  <span className="text-[10px] text-gray-500 font-medium">{item.category}</span>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromStack(item.id)}
                className="p-1 text-gray-400 hover:text-red-500 hover:bg-white rounded-md transition-colors"
                title="Remove item"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;