export default function GatesSchedule() {
  const gates = [
    {
      id: 1,
      name: 'Gate 1: JavaScript Fundamentals',
      date: '2023-06-18',
      time: '9:00 AM - 12:00 PM',
      status: 'upcoming',
      topics: ['Variables', 'Functions', 'Arrays', 'Objects'],
    },
    {
      id: 2,
      name: 'Gate 2: React Basics',
      date: '2023-07-10',
      time: '9:00 AM - 12:00 PM',
      status: 'upcoming',
      topics: ['Components', 'Props', 'State', 'Hooks'],
    },
    {
      id: 3,
      name: 'Gate 0: Orientation',
      date: '2023-06-01',
      time: '10:00 AM - 11:00 AM',
      status: 'completed',
      score: 'Pass',
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Gates Schedule</h2>
      <div className="space-y-4">
        {gates.map((gate) => (
          <div key={gate.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{gate.name}</h3>
                <p className="text-sm text-gray-500">
                  {gate.date} | {gate.time}
                </p>
              </div>
              {gate.status === 'completed' ? (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Completed: {gate.score}
                </span>
              ) : (
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Upcoming
                </span>
              )}
            </div>
            {gate.topics && (
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Topics Covered:</p>
                <div className="flex flex-wrap gap-2">
                  {gate.topics.map((topic, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium">
              {gate.status === 'completed' ? 'View Results' : 'View Preparation Materials'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}