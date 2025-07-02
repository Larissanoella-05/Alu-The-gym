import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CompanyVisits from './components/CompanyVisits';
import LearningResources from './components/LearningResources';
import GatesSchedule from './components/GatesSchedule';
import Announcements from './components/Announcements';
import ProgressTracker from './components/ProgressTracker';

function App() {
  const [activeTab, setActiveTab] = useState('schedule');
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 text-gray-100' : 'bg-beige-50 text-gray-800'
    }`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container mx-auto px-4 py-8">
        <div className={`flex mb-6 border-b ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'schedule' 
                ? darkMode 
                  ? 'text-beige-300 border-b-2 border-beige-300' 
                  : 'text-gray-800 border-b-2 border-gray-800'
                : darkMode 
                  ? 'text-gray-400' 
                  : 'text-gray-500'
            }`}
          >
            Schedule
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'resources' 
                ? darkMode 
                  ? 'text-beige-300 border-b-2 border-beige-300' 
                  : 'text-gray-800 border-b-2 border-gray-800'
                : darkMode 
                  ? 'text-gray-400' 
                  : 'text-gray-500'
            }`}
          >
            Learning Resources
          </button>
          <button
            onClick={() => setActiveTab('gates')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'gates' 
                ? darkMode 
                  ? 'text-beige-300 border-b-2 border-beige-300' 
                  : 'text-gray-800 border-b-2 border-gray-800'
                : darkMode 
                  ? 'text-gray-400' 
                  : 'text-gray-500'
            }`}
          >
            Gates
          </button>
          <button
            onClick={() => setActiveTab('announcements')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'announcements' 
                ? darkMode 
                  ? 'text-beige-300 border-b-2 border-beige-300' 
                  : 'text-gray-800 border-b-2 border-gray-800'
                : darkMode 
                  ? 'text-gray-400' 
                  : 'text-gray-500'
            }`}
          >
            Announcements
          </button>
        </div>

        {activeTab === 'schedule' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CompanyVisits darkMode={darkMode} />
            </div>
            <div>
              <ProgressTracker darkMode={darkMode} />
            </div>
          </div>
        )}

        {activeTab === 'resources' && <LearningResources darkMode={darkMode} />}
        {activeTab === 'gates' && <GatesSchedule darkMode={darkMode} />}
        {activeTab === 'announcements' && <Announcements darkMode={darkMode} />}
      </div>
    </div>
  );
}

export default App;