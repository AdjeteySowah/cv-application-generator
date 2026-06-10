const blankPersonalDetails = {
  dateOfBirth: '',
  email: '',
  fullName: '',
  github: '',
  jobTitle: '',
  linkedin: '',
  location: '',
  nationality: '',
  phone: '',
  xTwitter: '',
};

const blankSkills = {
  hard: '',
  soft: '',
};

const exampleResume = {
  certifications: [
    {
      dateAcquired: '2023',
      id: 'certification-freecodecamp-responsive-web-design',
      issuer: 'freeCodeCamp',
      name: 'Responsive Web Design',
    },
  ],
  education: [
    {
      degree: 'Business',
      endDate: 'October 2021',
      id: 'education-accra-academy',
      location: 'Kaneshie',
      school: 'Accra Academy (High School)',
      startDate: 'October 2018',
    },
  ],
  experience: [
    {
      achievements: [
        "Delivered prepared proposals and presentations to targeted schools to introduce the company's ongoing digital education platform.",
        'Collaborated with school administrators in discussions to assess interest and gather feedback on proposed educational initiatives.',
        'Gathered detailed records of outreach progress and school responses, revisiting contacts as needed.',
        'Compiled and submitted monthly field reports, highlighting trends, feedback, and potential partnership opportunities.',
      ],
      company: 'Quantum Talents Consulting (Research and Business Development)',
      endDate: 'September 2024',
      id: 'experience-field-engagement-coordinator',
      jobTitle: 'Field Engagement Coordinator',
      startDate: 'August 2023',
    },
  ],
  personal: {
    dateOfBirth: '31/05/2003',
    email: 'adjetey.sowah.321@gmail.com',
    fullName: 'Emmanuel Sowah Adjetey',
    github: '',
    jobTitle: 'Front End Developer (Intern)',
    linkedin: '',
    location: 'Kasoa',
    nationality: 'Ghanaian',
    phone: '+233 55 143 5350',
    xTwitter: '',
  },
  projects: [
    {
      accomplishments: [
        'Building a modular to-do app that allows users to manage tasks across projects with prioritization and persistent storage.',
        'Organized the codebase using ES6 modules and configured Webpack for bundling and live reloading.',
        'Deepened experience in scalable JavaScript architecture and modern build tools.',
      ],
      dateFinished: 'April 2025',
      id: 'project-to-do-list-application',
      link: '',
      name: 'To-Do List Application',
      tools: 'HTML, CSS, JavaScript (ES6), Webpack, Node.js(package installation & management)',
    },
    {
      accomplishments: [
        'Created a browser-based game with real-time score tracking and dynamic UI using JavaScript and the DOM.',
        'Programmed core game logic with randomized computer selections and user input handling.',
        'Strengthened knowledge of control flow, functions, and DOM interactions.',
      ],
      dateFinished: 'October 2024',
      id: 'project-rock-paper-scissors-game',
      link: '',
      name: 'Rock Paper Scissors Game',
      tools: 'HTML, CSS, JavaScript',
    },
    {
      accomplishments: [
        'Built a functional calculator that handles addition, subtraction, multiplication, division, and percentage calculations.',
        'Designed an intuitive user interface with keyboard support, input validation, and edge-case handling for reliable performance.',
        'Improved understanding of DOM manipulation and event-driven programming through JavaScript.',
      ],
      dateFinished: 'December 2024',
      id: 'project-calculator-web-app',
      link: '',
      name: 'Calculator Web App',
      tools: 'HTML, CSS, JavaScript',
    },
  ],
  skills: {
    hard: 'HTML, CSS, Bootstrap, JavaScript, Webpack, Git & GitHub',
    soft: '',
  },
  summary:
    "Aspiring Front-End Developer with a strong foundation in HTML, CSS, JavaScript, Git, GitHub, and Webpack. Actively sharpening skills through The Odin Project's Full-Stack JavaScript curriculum, with hands-on projects including games (Rock Paper Scissors, Tic Tac Toe), a calculator, a to-do list app, and responsive websites. Backed by real-world communication experience from outreach roles, I'm eager to grow through a Front-End Development Internship, contribute to meaningful projects, and build a career in tech.",
};

function cloneResume(resume) {
  return JSON.parse(JSON.stringify(resume));
}

function createEntryId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

export function createBlankEducation() {
  return {
    degree: '',
    endDate: '',
    id: createEntryId('education'),
    location: '',
    school: '',
    startDate: '',
  };
}

export function createBlankExperience() {
  return {
    achievements: [],
    company: '',
    endDate: '',
    id: createEntryId('experience'),
    jobTitle: '',
    startDate: '',
  };
}

export function createBlankProject() {
  return {
    accomplishments: [],
    dateFinished: '',
    id: createEntryId('project'),
    link: '',
    name: '',
    tools: '',
  };
}

export function createBlankCertification() {
  return {
    dateAcquired: '',
    id: createEntryId('certification'),
    issuer: '',
    name: '',
  };
}

export function createEmptyResume() {
  return {
    certifications: [],
    education: [],
    experience: [],
    personal: { ...blankPersonalDetails },
    projects: [],
    skills: { ...blankSkills },
    summary: '',
  };
}

export function createExampleResume() {
  return cloneResume(exampleResume);
}
