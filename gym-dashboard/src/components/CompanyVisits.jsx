export default function CompanyVisits() {
  const visits = [
    {
      id: 1,
      company: 'TechCorp',
      date: '2023-06-15',
      time: '10:00 AM',
      description: 'Technical interview workshop and Q&A session',
      logo: 'https://via.placeholder.com/40',
    },
    {
      id: 2,
      company: 'DataSystems',
      date: '2023-06-20',
      time: '2:00 PM',
      description: 'Data structures and algorithms deep dive',
      logo: 'https://via.placeholder.com/40',
    },
    {
      id: 3,
      company: 'CloudNine',
      date: '2023-06-25',
      time: '11:00 AM',
      description: 'Cloud infrastructure and deployment strategies',
      logo: 'https://via.placeholder.com/40',
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Company Visits</h2>
      <div className="space-y-4">
        {visits.map((visit) => (
          <div key={visit.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
            <div className="flex items-center space-x-3">
              <img src={visit.logo} alt={visit.company} className="w-10 h-10 rounded" />
              <div>
                <h3 className="font-medium text-gray-900">{visit.company}</h3>
                <p className="text-sm text-gray-500">{visit.date} at {visit.time}</p>
              </div>
            </div>
            <p className="mt-2 text-gray-600">{visit.description}</p>
            <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}