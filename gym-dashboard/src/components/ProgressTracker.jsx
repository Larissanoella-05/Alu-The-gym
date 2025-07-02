export default function ProgressTracker() {
  const progressData = [
    { name: 'Chapter 1', value: 100 },
    { name: 'Chapter 2', value: 65 },
    { name: 'Chapter 3', value: 10 },
  ]

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
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <h3 className="font-medium text-gray-900 mb-2">Upcoming Deadlines</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            <span className="text-sm">Gate 1 - June 18</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            <span className="text-sm">Chapter 2 - July 1</span>
          </li>
        </ul>
      </div>
    </div>
  )
}