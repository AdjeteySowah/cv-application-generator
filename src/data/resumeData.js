const blankPersonalDetails = {
  address: '',
  email: '',
  fullName: '',
  phone: '',
};

const exampleResume = {
  personal: {
    address: 'London, UK',
    email: 'josephine.meyers@mail.co.uk',
    fullName: 'Josephine Meyers',
    phone: '+44 3245 5521 5521',
  },
  education: [
    {
      degree: 'Bachelors in Economics',
      endDate: 'present',
      id: 'education-london-city',
      isVisible: true,
      location: 'New York City, US',
      school: 'London City University',
      startDate: '08/2020',
    },
    {
      degree: 'Interaction Design',
      endDate: '06/2019',
      id: 'education-hidden-university',
      isVisible: false,
      location: 'London, UK',
      school: 'Hidden University',
      startDate: '09/2016',
    },
  ],
  experience: [
    {
      company: 'Umbrella Inc.',
      endDate: 'present',
      id: 'experience-umbrella',
      isVisible: true,
      location: 'New York City, US',
      role: 'UX & UI Designer',
      startDate: '08/2020',
      summary:
        'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
    },
    {
      company: 'Black Mesa Labs',
      endDate: '02/2019',
      id: 'experience-black-mesa',
      isVisible: true,
      location: 'Berlin, Germany',
      role: 'UX Research Assistant',
      startDate: '04/2018',
      summary:
        'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
    },
  ],
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
    isVisible: true,
    location: '',
    school: '',
    startDate: '',
  };
}

export function createBlankExperience() {
  return {
    company: '',
    endDate: '',
    id: createEntryId('experience'),
    isVisible: true,
    location: '',
    role: '',
    startDate: '',
    summary: '',
  };
}

export function createEmptyResume() {
  return {
    education: [],
    experience: [],
    personal: { ...blankPersonalDetails },
  };
}

export function createExampleResume() {
  return cloneResume(exampleResume);
}
