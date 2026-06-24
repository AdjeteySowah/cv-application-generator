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
      dateAcquired: '2024',
      id: 'certification-google-digital-marketing',
      issuer: 'Google',
      name: 'Fundamentals of Digital Marketing',
    },
  ],
  education: [
    {
      degree: 'Bachelor of Business Administration (Marketing)',
      endDate: 'June 2023',
      id: 'education-university-of-ghana',
      location: 'Legon',
      school: 'University of Ghana',
      startDate: 'August 2019',
    },
  ],
  experience: [
    {
      achievements: [
        'Managed social media campaigns across multiple platforms, increasing audience engagement and brand visibility.',
        'Created marketing content including newsletters, promotional materials, and blog articles.',
        'Analyzed campaign performance metrics and prepared reports for management.',
        'Collaborated with designers and sales teams to execute successful marketing initiatives.',
      ],
      company: 'Bright Horizon Media',
      endDate: 'Present',
      id: 'experience-digital-marketing-associate',
      jobTitle: 'Digital Marketing Associate',
      startDate: 'July 2023',
    },
  ],
  personal: {
    dateOfBirth: '2001-09-15',
    email: 'aisha.abdullah@example.com',
    fullName: 'Aisha Abdullah',
    github: 'https://github.com/username',
    jobTitle: 'Digital Marketing Associate',
    linkedin: 'https://linkedin.com/in/username',
    location: 'Accra',
    nationality: 'Ghanaian',
    phone: '+233245551234',
    xTwitter: 'https://x.com/username',
  },
  projects: [
    {
      accomplishments: [
        'Developed a comprehensive social media strategy for a local fashion brand.',
        'Increased follower growth by 40% within three months through targeted campaigns.',
        'Produced engaging content calendars and performance reports.',
      ],
      dateFinished: 'March 2025',
      id: 'project-fashion-brand-campaign',
      link: 'https://example.com/fashion-campaign',
      name: 'Fashion Brand Social Media Campaign',
      tools: 'Canva, Meta Business Suite, Google Analytics',
    },
    {
      accomplishments: [
        'Created and managed an email marketing campaign for a nonprofit organization.',
        'Improved email open rates through audience segmentation and A/B testing.',
        'Tracked campaign performance and presented actionable insights.',
      ],
      dateFinished: 'November 2024',
      id: 'project-email-marketing-campaign',
      link: 'https://example.com/email-campaign',
      name: 'Nonprofit Email Marketing Campaign',
      tools: 'Mailchimp, Google Sheets, Canva',
    },
    {
      accomplishments: [
        'Designed a content marketing plan focused on educational blog articles.',
        'Conducted keyword research and optimized content for search engines.',
        'Contributed to increased website traffic over a six-month period.',
      ],
      dateFinished: 'July 2024',
      id: 'project-content-marketing-strategy',
      link: 'https://example.com/content-strategy',
      name: 'Content Marketing Strategy',
      tools: 'Google Analytics, SEMrush, WordPress',
    },
  ],
  skills: {
    hard: 'Digital Marketing, Content Creation, SEO, Google Analytics, Email Marketing, Canva, Social Media Management',
    soft: 'Communication, Creativity, Teamwork, Time Management, Problem Solving',
  },
  summary:
    'Dedicated Digital Marketing Associate with experience in content creation, social media management, and campaign analytics. Skilled in developing marketing strategies that improve engagement and brand awareness. Passionate about leveraging data-driven insights and creative storytelling to help organizations achieve their marketing goals.',
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
