
export default function CompanyVisits() {
  const visits = [
    {
      id: 1,
      company: 'Luxembourg Embassy',
      date: 'CW 46',
      description: 'Discussion about international tech opportunities and partnerships',
      logo: '/logos/luxembourg-embassy.png'
    },
    {
      id: 2,
      company: 'MINICT',
      date: 'CW 47',
      description: 'Rwanda government perspective on tech development and policies',
      logo: '/logos/minict.png'
    },
    {
      id: 3,
      company: 'GBS Rwanda',
      date: 'CW 48',
      description: 'Building scalable business solutions in the African context',
      logo: '/logos/gbs-rwanda.png'
    },
    {
      id: 4,
      company: 'ITS',
      date: 'CW 50',
      description: 'Innovative technology solutions for global markets',
      logo: '/logos/its.png'
    },
    {
      id: 5,
      company: 'TEST SOLUTION',
      date: 'CW 3',
      description: 'European software testing methodologies and best practices',
      logo: '/logos/test-solution.png'
    },
    {
      id: 6,
      company: 'Lufthansa Team',
      date: 'CW 7',
      description: 'Tech in aviation: Germany\'s largest airline shares their digital transformation',
      logo: '/logos/lufthansa.png'
    },
    {
      id: 7,
      company: 'GIZ Visitors',
      date: 'CW 10',
      description: 'International cooperation for sustainable tech development',
      logo: '/logos/giz.png'
    },
    {
      id: 8,
      company: 'Comza',
      date: 'CW 15',
      description: 'African tech innovation and entrepreneurship',
      logo: '/logos/comza.png'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Company Visits</h2>
      <div className="space-y-4">
        {visits.map((visit) => (
          <div key={visit.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                <img src={visit.logo} alt={visit.company} className="max-h-8 max-w-8" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{visit.company}</h3>
                <p className="text-sm text-gray-500">Calendar Week {visit.date}</p>
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
  );
}