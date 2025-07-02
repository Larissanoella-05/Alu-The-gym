export default function LearningResources() {
  const phases = [
    {
      id: 1,
      title: 'Phase 1: JS Fundamentals & DOM (Completed)',
      weeks: 'CW 45-51',
      status: 'completed',
      resources: [
        { 
          name: 'JavaScript Fundamentals - Scrimba', 
          type: 'Interactive Course', 
          link: 'https://scrimba.com/learn/learnjavascript',
          format: 'video',
          hours: 7
        },
        { 
          name: 'JavaScript.info - The Modern Tutorial', 
          type: 'Comprehensive Guide', 
          link: 'https://javascript.info/',
          format: 'reading',
          hours: 20
        },
        { 
          name: 'DOM Crash Course - Traversy Media', 
          type: 'YouTube Tutorial', 
          link: 'https://youtu.be/0ik6X4DJKCc',
          format: 'video',
          hours: 1.5,
        },
        {
          name: 'Git/GitHub Crash Course - FreeCodeCamp',
          type: 'Tutorial',
          link: 'https://youtu.be/RGOj5yH7evk',
          format: 'video',
          hours: 1
        },
        {
          name: 'JavaScript30 - Wes Bos',
          type: '30-Day Challenge',
          link: 'https://javascript30.com/',
          format: 'video',
          hours: 30
        }
      ]
    },
    {
      id: 2,
      title: 'Phase 2: CSS & ES6 (Completed)',
      weeks: 'CW 1-6',
      status: 'completed',
      resources: [
        { 
          name: 'CSS Grid - Scrimba', 
          type: 'Interactive Course', 
          link: 'https://scrimba.com/learn/cssgrid',
          format: 'video',
          hours: 4
        },
        { 
          name: 'Flexbox Zombies', 
          type: 'Game-based Learning', 
          link: 'https://mastery.games/flexboxzombies/',
          format: 'interactive',
          hours: 8
        },
        { 
          name: 'Modern ES6 - FreeCodeCamp', 
          type: 'YouTube Course', 
          link: 'https://youtu.be/nZ1DMMsyVyI',
          format: 'video',
          hours: 3
        },
        {
          name: 'CSS Tricks Complete Guide',
          type: 'Reference',
          link: 'https://css-tricks.com/',
          format: 'reading',
          hours: 10
        },
        {
          name: 'ES6 for Everyone - Wes Bos',
          type: 'Premium Course',
          link: 'https://es6.io/',
          format: 'video',
          hours: 20
        }
      ]
    },
    {
      id: 3,
      title: 'Phase 3: Async & TypeScript (Completed)',
      weeks: 'CW 7-14',
      status: 'completed',
      resources: [
        { 
          name: 'JavaScript Async/Await - Scrimba', 
          type: 'Interactive Course', 
          link: 'https://scrimba.com/learn/asyncawait',
          format: 'video',
          hours: 3
        },
        { 
          name: 'TypeScript Crash Course - Academind', 
          type: 'YouTube Tutorial', 
          link: 'https://youtu.be/BwuLxPH8IDs',
          format: 'video',
          hours: 2
        },
        {
          name: "You Don't Know JS: Async & Performance",
          type: 'Book',
          link: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20&%20performance/README.md',
          format: 'reading',
          hours: 10
        },
        {
          name: 'TypeScript Official Documentation',
          type: 'Docs',
          link: 'https://www.typescriptlang.org/docs/',
          format: 'reading',
          hours: 5
        },
        {
          name: 'Event Loop Visualization',
          type: 'Interactive Tool',
          link: 'https://www.jsv9000.app/',
          format: 'interactive',
          hours: 1
        }
      ]
    },
    {
      id: 4,
      title: 'Phase 4: React (Current)',
      weeks: 'CW 15-22',
      status: 'current',
      resources: [
        { 
          name: 'Learn React - Scrimba', 
          type: 'Interactive Course', 
          link: 'https://scrimba.com/learn/learnreact',
          format: 'video',
          hours: 12
        },
        { 
          name: 'React Docs Beta', 
          type: 'Official Documentation', 
          link: 'https://beta.reactjs.org/',
          format: 'reading',
          hours: 8
        },
        {
          name: 'React Hooks Crash Course',
          type: 'YouTube Tutorial',
          link: 'https://youtu.be/w7ejDZ8SWv8',
          format: 'video',
          hours: 1.5
        },
        {
          name: 'Frontend Masters - React Course',
          type: 'Comprehensive Course',
          link: 'https://frontendmasters.com/courses/complete-react-v6/',
          format: 'video',
          hours: 15
        },
        {
          name: 'React Router Tutorial',
          type: 'Interactive Tutorial',
          link: 'https://reactrouter.com/en/main/start/tutorial',
          format: 'interactive',
          hours: 3
        },
        {
          name: 'Redux Essentials Tutorial',
          type: 'Official Tutorial',
          link: 'https://redux.js.org/tutorials/essentials/part-1-overview-concepts',
          format: 'reading',
          hours: 4
        }
      ]
    },
    {
      id: 5,
      title: 'Phase 5: Node.js & Final Project',
      weeks: 'CW 23-51',
      status: 'upcoming',
      resources: [
        { 
          name: 'Node.js Crash Course - Traversy Media', 
          type: 'YouTube Tutorial', 
          link: 'https://youtu.be/fBNz5xF-Kx4',
          format: 'video',
          hours: 1.5
        },
        { 
          name: 'Express.js - Scrimba', 
          type: 'Interactive Course', 
          link: 'https://scrimba.com/learn/express',
          format: 'video',
          hours: 5
        },
        {
          name: 'MongoDB University',
          type: 'Free Courses',
          link: 'https://university.mongodb.com/',
          format: 'video',
          hours: 10
        },
        {
          name: 'Node.js Best Practices',
          type: 'GitHub Repository',
          link: 'https://github.com/goldbergyoni/nodebestpractices',
          format: 'reading',
          hours: 5
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Learning Resources by Phase</h2>
      <div className="space-y-6">
        {phases.map((phase) => (
          <div key={phase.id} className={`border rounded-lg p-5 ${
            phase.status === 'completed' ? 'border-green-200 bg-green-50' :
            phase.status === 'current' ? 'border-blue-200 bg-blue-50' :
            'border-gray-200'
          }`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{phase.title}</h3>
                <p className="text-sm text-gray-500">{phase.weeks}</p>
              </div>
              {phase.status === 'completed' ? (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Completed
                </span>
              ) : phase.status === 'current' ? (
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  In Progress
                </span>
              ) : (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Upcoming
                </span>
              )}
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Resources:</h4>
              <ul className="space-y-3">
                {phase.resources.map((resource, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`inline-block mt-1 flex-shrink-0 ${
                      resource.format === 'video' ? 'text-red-500' : 
                      resource.format === 'interactive' ? 'text-purple-500' : 'text-blue-500'
                    }`}>
                      {resource.format === 'video' ? (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                        </svg>
                      ) : resource.format === 'interactive' ? (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                    <div className="ml-2">
                      <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {resource.name}
                      </a>
                      <div className="flex flex-wrap items-center mt-1">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded mr-2">
                          {resource.type}
                        </span>
                        <span className="text-xs text-gray-500">
                          {resource.hours} {resource.hours === 1 ? 'hour' : 'hours'}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}