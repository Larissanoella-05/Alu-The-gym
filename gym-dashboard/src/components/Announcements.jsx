import { useState } from 'react'
import Navbar from './components/Navbar'
import CompanyVisits from './components/CompanyVisits'
import LearningResources from './components/LearningResources'
import GatesSchedule from './components/GatesSchedule'
import Announcements from './components/Announcements'
import ProgressTracker from './components/ProgressTracker'

function App() {
  const [activeTab, setActiveTab] = useState('schedule')

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 font-medium ${activeTab === 'schedule' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Schedule
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 font-medium ${activeTab === 'resources' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Learning Resources
          </button>
          <button
            onClick={() => setActiveTab('gates')}
            className={`px-4 py-2 font-medium ${activeTab === 'gates' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Gates
          </button>
          <button
            onClick={() => setActiveTab('announcements')}
            className={`px-4 py-2 font-medium ${activeTab === 'announcements' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Announcements
          </button>
        </div>

        {activeTab === 'schedule' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CompanyVisits />
            </div>
            <div>
              <ProgressTracker />
            </div>
          </div>
        )}

        {activeTab === 'resources' && <LearningResources />}
        {activeTab === 'gates' && <GatesSchedule />}
        {activeTab === 'announcements' && <Announcements />}
      </div>
    </div>
  )
}

export default App