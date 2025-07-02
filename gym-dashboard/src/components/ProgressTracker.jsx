export default function ProgressTracker() {
  const progressData = [
    { name: 'JS Fundamentals', value: 100 },
    { name: 'DOM Manipulation', value: 100 },
    { name: 'CSS & ES6', value: 100 },
    { name: 'Async JavaScript', value: 100 },
    { name: 'TypeScript', value: 100 },
    { name: 'React Basics', value: 30 },
    { name: 'React Hooks', value: 0 },
    { name: 'React Router', value: 0 },
    { name: 'Redux', value: 0 }
  ];

  const upcomingChapters = [
    'React Hooks (CW 16)',
    'React Projects (CW 17-18)',
    'React Router (CW 19)',
    'Redux & Context API (CW 20-21)',
    'Node.js Fundamentals (CW 23)'
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Your Progress</h2>
      <div className="space-y-4">
        {progressData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>{item.name}</span>
              <span>{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${
                  item.value === 100 ? 'bg-green-600' :
                  item.value > 0 ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="font-medium text-gray-900 mb-3">Upcoming Chapters</h3>
        <ul className="space-y-2">
          {upcomingChapters.map((chapter, index) => (
            <li key={index} className="flex items-center">
              <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                index === 0 ? 'bg-blue-500' : 'bg-gray-400'
              }`}></span>
              <span className="text-sm">{chapter}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}