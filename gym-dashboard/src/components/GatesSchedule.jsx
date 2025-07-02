// Updated GatesSchedule.jsx
export default function GatesSchedule() {
  const gates = [
    {
      id: 1,
      name: 'Trial Gate: JS Fundamentals',
      date: 'CW 45 - End of Week',
      status: 'completed',
      score: '92%',
      topics: ['Variables', 'Functions', 'Arrays', 'Objects'],
      result: 'Passed with distinction'
    },
    {
      id: 2,
      name: 'Gate 1: JS Fundamentals and JS DOM',
      date: 'CW 49',
      status: 'completed',
      score: '89%',
      topics: ['DOM Manipulation', 'Events', 'Git Basics'],
      result: 'Passed - excellent work'
    },
    {
      id: 3,
      name: 'Gate 2: English + CSS + ES6',
      date: 'CW 5-6',
      status: 'completed',
      score: '88%',
      parts: [
        'Part 1: English verbal assessment - 90%',
        'Part 2: CSS (website cloning) - 85%',
        'Part 3: ES6 - 89%'
      ],
      result: 'Passed - strong performance'
    },
    {
      id: 4,
      name: 'Gate 3: Async & TypeScript',
      date: 'CW 13-14',
      status: 'completed',
      score: '90%',
      parts: [
        'Trial interview: Async Programming - 92%',
        'Part 1: Async Programming - 88%',
        'Part 2: TypeScript - 91%'
      ],
      result: 'Passed - ready for React'
    },
    {
      id: 5,
      name: 'Gate 4: React',
      date: 'CW 22',
      status: 'upcoming',
      topics: ['React Components', 'Hooks', 'State Management'],
      preparation: 'Focus on React hooks and context API'
    },
    {
      id: 6,
      name: 'Gate 5: Node.js',
      date: 'CW 30',
      status: 'upcoming',
      topics: ['Express.js', 'MongoDB', 'REST APIs']
    },
    {
      id: 7,
      name: 'Final Gate: Core Skills',
      date: 'CW 51',
      status: 'upcoming',
      description: 'Comprehensive assessment of all learned skills'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Gates Schedule</h2>
      <div className="space-y-4">
        {gates.map((gate) => (
          <div key={gate.id} className={`border rounded-lg p-4 ${
            gate.status === 'completed' ? 'border-green-200 bg-green-50' : 'border-gray-200'
          }`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{gate.name}</h3>
                <p className="text-sm text-gray-500">{gate.date}</p>
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
            
            {gate.parts && (
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Parts:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {gate.parts.map((part, index) => (
                    <li key={index}>{part}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {gate.result && (
              <div className="mt-2 flex items-center text-sm text-green-700">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {gate.result}
              </div>
            )}
            
            {gate.preparation && (
              <div className="mt-2 text-sm text-blue-700">
                <strong>Preparation:</strong> {gate.preparation}
              </div>
            )}
            
            <button className={`mt-3 text-sm font-medium ${
              gate.status === 'completed' ? 'text-green-600 hover:text-green-800' : 'text-blue-600 hover:text-blue-800'
            }`}>
              {gate.status === 'completed' ? 'View Detailed Results' : 'View Preparation Materials'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}