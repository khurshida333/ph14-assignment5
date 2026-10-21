import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Build Your Ideal <br />
              <span className="brand-gradient-text">Development Stack</span>
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
              Explore frontend, backend, databases, and hosting options, compare them side-by-side, and put together the stack that powers your next project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
              <a 
                href="#technologies"
                className="w-full sm:w-auto px-6 py-3 text-white font-medium brand-gradient-bg rounded-lg hover:opacity-90 transition-opacity text-center shadow-md"
              >
                Explore Technologies
              </a>
              <button className="w-full sm:w-auto px-6 py-3 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Development Stack Illustration" 
                className="rounded-2xl shadow-2xl object-cover w-full h-80 md:h-96 border border-gray-100"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden sm:block">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Fast Setup</span>
                <p className="text-sm font-bold text-gray-900">Custom Stack Builder</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;