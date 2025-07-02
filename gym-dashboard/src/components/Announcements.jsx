export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: 'Gate 1 Results: JS Fundamentals & DOM',
      date: '2023-12-15',
      content: 'Congratulations! You passed Gate 1 with excellent results. 92% of students passed this gate.',
      priority: 'high',
      type: 'result'
    },
    {
      id: 2,
      title: 'Gate 2 Results: CSS & ES6',
      date: '2024-02-10',
      content: 'Great job! You scored 88% in Gate 2. The average score was 85%.',
      priority: 'high',
      type: 'result'
    },
    {
      id: 3,
      title: 'Gate 3 Results: Async & TypeScript',
      date: '2024-04-05',
      content: 'Excellent work! You achieved 90% in Gate 3. Now moving to React!',
      priority: 'high',
      type: 'result'
    },
    {
      id: 4,
      title: 'New Chapter Added: React Fundamentals',
      date: '2024-04-15',
      content: 'The React chapter is now available on the dashboard. Start with the Scrimba course and official docs.',
      priority: 'medium',
      type: 'new-content'
    },
    {
      id: 5,
      title: 'Upcoming: React Projects Week',
      date: '2024-05-20',
      content: 'Prepare for hands-on React projects starting next week. Review components and hooks.',
      priority: 'medium',
      type: 'reminder'
    },
    {
      id: 6,
      title: 'New Resources Added',
      date: '2024-04-18',
      content: 'Additional React tutorials and exercises have been added to your learning resources.',
      priority: 'low',
      type: 'update'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div 
            key={announcement.id} 
            className={`border-l-4 pl-4 py-2 ${
              announcement.type === 'result' ? 'bg-green-50' :
              announcement.type === 'new-content' ? 'bg-blue-50' :
              'bg-gray-50'
            }`}
            style={{
              borderColor: announcement.priority === 'high' ? '#ef4444' : 
                           announcement.priority === 'medium' ? '#f59e0b' : '#10b981'
            }}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-900">{announcement.title}</h3>
              <span className="text-sm text-gray-500">{announcement.date}</span>
            </div>
            <p className="mt-1 text-gray-600">{announcement.content}</p>
            {announcement.type === 'result' && (
              <div className="mt-2 flex items-center text-sm text-green-700">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Completed successfully
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}