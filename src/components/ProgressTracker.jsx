export default function ProgressTracker({ darkMode }) {
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
    <div className={`rounded-lg shadow p-6 transition-colors duration-300 ${
      darkMode ? 'bg-gray-700' : 'bg-white'
    }`}>
      <h2 className={`text-xl font-bold mb-6 ${
        darkMode ? 'text-beige-200' : 'text-gray-800'
      }`}>Your Progress</h2>
      
      <div className="space-y-4 mb-8">
        {progressData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm font-medium mb-1">
              <span className={darkMode ? 'text-gray-200' : 'text-gray-700'}>
                {item.name}
              </span>
              <span className={darkMode ? 'text-beige-300' : 'text-gray-800'}>
                {item.value}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${
                  item.value === 100 ? 'bg-green-500' :
                  item.value > 0 ? 'bg-blue-500' : 
                  darkMode ? 'bg-gray-500' : 'bg-gray-300'
                }`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div>
        <h3 className={`font-medium text-lg mb-3 ${
          darkMode ? 'text-beige-200' : 'text-gray-800'
        }`}>
          Upcoming Chapters
        </h3>
        <ul className="space-y-3">
          {upcomingChapters.map((chapter, index) => (
            <li key={index} className="flex items-center">
              <span className={`inline-block w-3 h-3 rounded-full mr-3 ${
                index === 0 ? 'bg-blue-500' : 'bg-beige-500'
              }`}></span>
              <span className={`font-medium ${
                darkMode ? 
                  index === 0 ? 'text-blue-300' : 'text-beige-200' : 
                  index === 0 ? 'text-blue-600' : 'text-gray-700'
              }`}>
                {chapter}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}