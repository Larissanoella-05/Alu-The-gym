// Program data
const programData = {
  currentWeek: 8,
  totalWeeks: 16,
  nextGate: "Gate 3: Full-Stack Development",
  nextGateDate: "2024-02-15",
}

const announcements = [
  {
    id: 1,
    title: "Google Tech Talk - Tomorrow 2PM",
    content: "Join us for an exclusive session with Google engineers discussing cloud architecture.",
    priority: "high",
    date: "2024-01-28",
  },
  {
    id: 2,
    title: "Gate 2 Results Published",
    content: "Congratulations to all participants! Individual feedback available in your portal.",
    priority: "medium",
    date: "2024-01-26",
  },
  {
    id: 3,
    title: "New Learning Resources Added",
    content: "Advanced React patterns and system design materials now available in Chapter 7.",
    priority: "low",
    date: "2024-01-25",
  },
]

const companyVisits = [
  {
    company: "Google",
    date: "2024-01-29",
    time: "14:00 - 16:00",
    topic: "Cloud Architecture & Scalability",
    speaker: "Sarah Chen, Senior SWE",
    status: "upcoming",
  },
  {
    company: "Microsoft",
    date: "2024-02-05",
    time: "15:00 - 17:00",
    topic: "Azure DevOps & CI/CD",
    speaker: "Michael Rodriguez, DevOps Lead",
    status: "upcoming",
  },
  {
    company: "Meta",
    date: "2024-01-22",
    time: "13:00 - 15:00",
    topic: "React Best Practices",
    speaker: "Alex Kim, Frontend Architect",
    status: "completed",
  },
  {
    company: "Amazon",
    date: "2024-01-15",
    time: "14:30 - 16:30",
    topic: "System Design at Scale",
    speaker: "Jennifer Liu, Principal Engineer",
    status: "completed",
  },
]

const learningChapters = [
  {
    id: 1,
    title: "Programming Fundamentals",
    duration: "2 weeks",
    status: "completed",
    progress: 100,
    resources: ["JavaScript Basics", "Data Structures", "Algorithms"],
    gate: "Gate 1: Fundamentals",
  },
  {
    id: 2,
    title: "Web Development Basics",
    duration: "2 weeks",
    status: "completed",
    progress: 100,
    resources: ["HTML/CSS", "DOM Manipulation", "Responsive Design"],
    gate: "Gate 1: Fundamentals",
  },
  {
    id: 3,
    title: "Frontend Frameworks",
    duration: "3 weeks",
    status: "completed",
    progress: 100,
    resources: ["React Fundamentals", "State Management", "Component Design"],
    gate: "Gate 2: Frontend",
  },
  {
    id: 4,
    title: "Backend Development",
    duration: "3 weeks",
    status: "in-progress",
    progress: 75,
    resources: ["Node.js", "Express.js", "Database Design", "API Development"],
    gate: "Gate 3: Full-Stack",
  },
  {
    id: 5,
    title: "Database & Storage",
    duration: "2 weeks",
    status: "upcoming",
    progress: 0,
    resources: ["SQL", "NoSQL", "Database Optimization", "Cloud Storage"],
    gate: "Gate 3: Full-Stack",
  },
  {
    id: 6,
    title: "System Design",
    duration: "2 weeks",
    status: "upcoming",
    progress: 0,
    resources: ["Scalability", "Load Balancing", "Microservices", "Caching"],
    gate: "Gate 4: Architecture",
  },
  {
    id: 7,
    title: "DevOps & Deployment",
    duration: "2 weeks",
    status: "upcoming",
    progress: 0,
    resources: ["CI/CD", "Docker", "Cloud Platforms", "Monitoring"],
    gate: "Gate 4: Architecture",
  },
]

const gates = [
  {
    id: 1,
    name: "Gate 1: Fundamentals",
    date: "2024-01-08",
    status: "passed",
    score: "92%",
    topics: ["JavaScript", "Data Structures", "Basic Algorithms"],
  },
  {
    id: 2,
    name: "Gate 2: Frontend",
    date: "2024-01-22",
    status: "passed",
    score: "88%",
    topics: ["React", "State Management", "Component Architecture"],
  },
  {
    id: 3,
    name: "Gate 3: Full-Stack",
    date: "2024-02-15",
    status: "upcoming",
    score: null,
    topics: ["Backend APIs", "Database Design", "Full-Stack Integration"],
  },
  {
    id: 4,
    name: "Gate 4: Architecture",
    date: "2024-03-01",
    status: "upcoming",
    score: null,
    topics: ["System Design", "Scalability", "DevOps Practices"],
  },
]

const weeklySchedule = [
  {
    day: "Monday",
    activities: [
      { time: "09:00", activity: "Morning Standup", icon: "clock" },
      { time: "10:00", activity: "Backend Development", icon: "book-open" },
      { time: "15:00", activity: "Peer Programming", icon: "users" },
    ],
  },
  {
    day: "Tuesday",
    activities: [
      { time: "09:00", activity: "Code Review", icon: "clock" },
      { time: "14:00", activity: "Google Tech Talk", icon: "users" },
    ],
  },
  {
    day: "Wednesday",
    activities: [
      { time: "09:00", activity: "Database Design", icon: "book-open" },
      { time: "14:00", activity: "Project Work", icon: "trophy" },
    ],
  },
  {
    day: "Thursday",
    activities: [
      { time: "09:00", activity: "System Architecture", icon: "book-open" },
      { time: "15:00", activity: "Team Collaboration", icon: "users" },
    ],
  },
  {
    day: "Friday",
    activities: [
      { time: "09:00", activity: "Weekly Review", icon: "clock" },
      { time: "14:00", activity: "Demo Presentations", icon: "trophy" },
    ],
  },
]

// Import Lucide icons library
import lucide from "lucide"

// Initialize the dashboard
document.addEventListener("DOMContentLoaded", () => {
  initializeDashboard()
  setupTabNavigation()
  populateContent()
})

function initializeDashboard() {
  // Update progress bar
  const progressPercentage = (programData.currentWeek / programData.totalWeeks) * 100
  document.getElementById("progress-bar").style.width = `${progressPercentage}%`

  // Update header information
  document.getElementById("current-week").textContent = programData.currentWeek
  document.getElementById("total-weeks").textContent = programData.totalWeeks
  document.getElementById("next-gate").textContent = programData.nextGate
  document.getElementById("next-gate-date").textContent = programData.nextGateDate
}

function setupTabNavigation() {
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => {
        content.classList.remove("active")
        content.classList.add("hidden")
      })

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      const targetContent = document.getElementById(`${targetTab}-tab`)
      targetContent.classList.add("active")
      targetContent.classList.remove("hidden")
    })
  })
}

function populateContent() {
  populateAnnouncements()
  populateSchedule()
  populateCompanyVisits()
  populateLearningPath()
  populateGates()
}

function populateAnnouncements() {
  const container = document.getElementById("announcements-container")
  container.innerHTML = announcements
    .map(
      (announcement) => `
        <div class="flex items-start gap-4 p-4 border rounded-lg">
            <div class="status-dot ${announcement.priority} mt-2"></div>
            <div class="flex-1">
                <h3 class="font-semibold">${announcement.title}</h3>
                <p class="text-gray-600 text-sm mt-1">${announcement.content}</p>
                <p class="text-xs text-gray-400 mt-2">${announcement.date}</p>
            </div>
        </div>
    `,
    )
    .join("")
}

function populateSchedule() {
  const container = document.getElementById("schedule-container")
  container.innerHTML = weeklySchedule
    .map(
      (day) => `
        <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">${day.day}</h3>
            <div class="space-y-2 text-sm">
                ${day.activities
                  .map(
                    (activity) => `
                    <div class="flex items-center gap-2">
                        <i data-lucide="${activity.icon}" class="w-4 h-4"></i>
                        <span>${activity.time} - ${activity.activity}</span>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("")

  // Re-initialize Lucide icons for the new content
  lucide.createIcons()
}

function populateCompanyVisits() {
  const container = document.getElementById("companies-container")
  container.innerHTML = companyVisits
    .map(
      (visit) => `
        <div class="flex items-center gap-4 p-4 border rounded-lg">
            <div class="company-avatar">
                ${visit.company.charAt(0)}
            </div>
            <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                    <h3 class="font-semibold">${visit.company}</h3>
                    <span class="badge ${visit.status === "completed" ? "secondary" : "default"}">${visit.status}</span>
                </div>
                <p class="text-sm text-gray-600 mb-1">${visit.topic}</p>
                <p class="text-xs text-gray-500">${visit.speaker}</p>
            </div>
            <div class="text-right">
                <p class="font-semibold">${visit.date}</p>
                <p class="text-sm text-gray-600">${visit.time}</p>
            </div>
            <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400"></i>
        </div>
    `,
    )
    .join("")

  lucide.createIcons()
}

function populateLearningPath() {
  const container = document.getElementById("learning-container")
  container.innerHTML = learningChapters
    .map(
      (chapter) => `
        <div class="border rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                    <div class="chapter-number ${chapter.status}">
                        ${chapter.id}
                    </div>
                    <div>
                        <h3 class="font-semibold">${chapter.title}</h3>
                        <p class="text-sm text-gray-600">${chapter.duration} • ${chapter.gate}</p>
                    </div>
                </div>
                <span class="badge ${chapter.status === "completed" ? "secondary" : chapter.status === "in-progress" ? "default" : "outline"}">${chapter.status}</span>
            </div>
            ${
              chapter.status === "in-progress"
                ? `
                <div class="mb-3">
                    <div class="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>${chapter.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${chapter.progress}%"></div>
                    </div>
                </div>
            `
                : ""
            }
            <div class="flex flex-wrap gap-2">
                ${chapter.resources
                  .map(
                    (resource) => `
                    <span class="badge outline">${resource}</span>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("")
}

function populateGates() {
  const container = document.getElementById("gates-container")
  container.innerHTML = gates
    .map(
      (gate) => `
        <div class="border rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
                <h3 class="font-semibold">${gate.name}</h3>
                <span class="badge ${gate.status === "passed" ? "secondary" : "outline"}">${gate.status}</span>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between text-sm">
                    <span>Date:</span>
                    <span>${gate.date}</span>
                </div>
                ${
                  gate.score
                    ? `
                    <div class="flex justify-between text-sm">
                        <span>Score:</span>
                        <span class="font-semibold text-green-600">${gate.score}</span>
                    </div>
                `
                    : ""
                }
                <div class="mt-3">
                    <p class="text-sm font-medium mb-2">Topics Covered:</p>
                    <div class="flex flex-wrap gap-1">
                        ${gate.topics
                          .map(
                            (topic) => `
                            <span class="badge outline">${topic}</span>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}
