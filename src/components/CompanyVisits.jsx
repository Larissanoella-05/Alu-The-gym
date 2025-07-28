export default function CompanyVisits({ darkMode }) {
  const visits = [
    {
      id: 1,
      company: 'Luxembourg Embassy',
      date: 'CW 46',
      time: '10:00 AM - 12:00 PM',
      description: 'Discussion about international tech opportunities and partnerships with Luxembourg',
      topics: ['International collaboration', 'Tech diplomacy', 'Cross-border opportunities']
    },
    {
      id: 2,
      company: 'MINICT',
      date: 'CW 47',
      time: '2:00 PM - 4:00 PM',
      description: 'Rwanda government perspective on tech development and digital transformation policies',
      topics: ['Government tech policy', 'Digital transformation', 'National ICT strategy']
    },
    {
      id: 3,
      company: 'GBS Rwanda',
      date: 'CW 48',
      time: '9:30 AM - 11:30 AM',
      description: 'Building scalable business solutions in the African context',
      topics: ['African tech ecosystem', 'Business scalability', 'Local solutions']
    },
    {
      id: 4,
      company: 'ITS',
      date: 'CW 50',
      time: '1:00 PM - 3:00 PM',
      description: 'Innovative technology solutions for global markets',
      topics: ['Global tech solutions', 'Innovation frameworks', 'Market adaptation']
    },
    {
      id: 5,
      company: 'TEST SOLUTION',
      date: 'CW 3',
      time: '10:30 AM - 12:30 PM',
      description: 'European software testing methodologies and best practices',
      topics: ['QA processes', 'Testing frameworks', 'European standards']
    },
    {
      id: 6,
      company: 'Lufthansa Team',
      date: 'CW 7',
      time: '3:00 PM - 5:00 PM',
      description: 'Tech in aviation: Germany\'s largest airline shares their digital transformation journey',
      topics: ['Aviation tech', 'Digital transformation', 'Large-scale systems']
    },
    {
      id: 7,
      company: 'GIZ Visitors',
      date: 'CW 10',
      time: '11:00 AM - 1:00 PM',
      description: 'International cooperation for sustainable tech development',
      topics: ['Sustainable tech', 'International cooperation', 'Development projects']
    },
    {
      id: 8,
      company: 'Comza',
      date: 'CW 15',
      time: '2:30 PM - 4:30 PM',
      description: 'African tech innovation and entrepreneurship success stories',
      topics: ['African innovation', 'Entrepreneurship', 'Tech startups']
    }
  ];

  return (
    <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
      darkMode ? 'bg-gray-700' : 'bg-white'
    }`}>
      <h2 className={`text-2xl font-bold mb-6 ${
        darkMode ? 'text-beige-200' : 'text-gray-800'
      }`}>Upcoming Company Visits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visits.map((visit) => (
          <div 
            key={visit.id} 
            className={`border rounded-xl p-5 transition-all hover:shadow-md ${
              darkMode 
                ? 'border-gray-600 hover:bg-gray-600' 
                : 'border-beige-200 hover:bg-beige-50'
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className={`text-lg font-semibold ${
                  darkMode ? 'text-beige-100' : 'text-gray-900'
                }`}>
                  {visit.company}
                </h3>
                <span className={`text-sm px-2 py-1 rounded ${
                  darkMode ? 'bg-gray-800 text-beige-300' : 'bg-beige-100 text-gray-700'
                }`}>
                  CW {visit.date}
                </span>
              </div>
              
              <p className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {visit.time}
              </p>
              
              <p className={`${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {visit.description}
              </p>
              
              <div className="mt-2">
                <h4 className={`text-sm font-medium mb-2 ${
                  darkMode ? 'text-beige-200' : 'text-gray-800'
                }`}>
                  Discussion Topics:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {visit.topics.map((topic, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded ${
                        darkMode 
                          ? 'bg-gray-600 text-beige-200' 
                          : 'bg-beige-100 text-gray-700'
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className={`mt-4 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-beige-600 text-white hover:bg-beige-700' 
                  : 'bg-beige-500 text-gray-800 hover:bg-beige-600'
              }`}>
                View Details & Prepare
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}