import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechGrid from './components/TechGrid';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Technology } from './types';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load JSON Data
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching technology data:', err);
        setLoading(false);
      });
  }, []);

  // Add to Stack Functionality
  const handleAddToStack = (tech: Technology) => {
    const exists = stack.some((item) => item.id === tech.id);

    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 2500,
      });
      return;
    }

    setStack([...stack, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  // Remove Single Item Functionality
  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`Removed ${itemToRemove?.name || 'item'} from your stack.`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  // Remove All Functionality
  const handleRemoveAll = () => {
    setStack([]);
    toast.error('Cleared all technologies from your stack.', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const stackIds = stack.map((item) => item.id);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-gray-800">
      <ToastContainer />
      <Navbar />
      
      <main className="flex-grow">
        <Banner />

        <div id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Technology Cards Grid (3 Columns on Large Screens) */}
              <div className="lg:col-span-3">
                <TechGrid
                  technologies={technologies}
                  onAddToStack={handleAddToStack}
                  stackIds={stackIds}
                />
              </div>

              {/* Sidebar (1 Column) */}
              <div className="lg:col-span-1">
                <Sidebar
                  stack={stack}
                  onRemoveFromStack={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;