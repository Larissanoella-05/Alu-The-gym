export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: 'Important: Gate 1 Schedule Update',
      date: '2023-06-10',
      content: 'The Gate 1 examination has been moved to June 18th. Please adjust your preparation schedule accordingly.',
      priority: 'high',
    },
    {
      id: 2,
      title: 'New Learning Resources Available',
      date: '2023-06-08',
      content: 'We have added new React tutorials to Chapter 2 resources. Check them out!',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Welcome to The Gym!',
      date: '2023-06-01',
      content: 'Welcome all new students to our intensive program. The journey begins now!',
      priority: 'low',
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="border-l-4 pl-4 py-2" style={{
            borderColor: announcement.priority === 'high' ? '#ef4444' : 
                         announcement.priority === 'medium' ? '#f59e0b' : '#10b981'
          }}>
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-900">{announcement.title}</h3>
              <span className="text-sm text-gray-500">{announcement.date}</span>
            </div>
            <p className="mt-1 text-gray-600">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}