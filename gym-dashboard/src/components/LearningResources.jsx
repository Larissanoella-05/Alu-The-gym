export default function LearningResources() {
  const chapters = [
    {
      id: 1,
      title: 'Chapter 1: JavaScript Fundamentals',
      duration: '2 weeks',
      resources: [
        { name: 'Eloquent JavaScript', type: 'Book', link: '#' },
        { name: 'JavaScript.info', type: 'Website', link: '#' },
        { name: 'Variables & Functions', type: 'Video', link: '#' },
      ],
    },
    {
      id: 2,
      title: 'Chapter 2: React Basics',
      duration: '3 weeks',
      resources: [
        { name: 'React Official Docs', type: 'Documentation', link: '#' },
        { name: 'React for Beginners', type: 'Course', link: '#' },
        { name: 'Hooks Explained', type: 'Video', link: '#' },
      ],
    },
    {
      id: 3,
      title: 'Chapter 3: Advanced React Patterns',
      duration: '4 weeks',
      resources: [
        { name: 'Advanced React', type: 'Book', link: '#' },
        { name: 'React Design Patterns', type: 'Article', link: '#' },
        { name: 'Context API Deep Dive', type: 'Video', link: '#' },
      ],
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Learning Resources by Chapter</h2>
      <div className="space-y-6">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="border border-gray-200 rounded-lg p-5">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-gray-900">{chapter.title}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {chapter.duration}
              </span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Resources:</h4>
              <ul className="space-y-2">
                {chapter.resources.map((resource, index) => (
                  <li key={index} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    <a href={resource.link} className="text-blue-600 hover:underline">
                      {resource.name}
                    </a>
                    <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {resource.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}