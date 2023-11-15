import baikePreviewImage from '@/public/images/baike-preview.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Senior Software Engineer',
    location: 'Remote, United States',
    description: [
      'Led development for a college sports recruiting social media application by writing RESTful APIs in Node.js with a Postgres database and a Redis cache',
      'Added real-time chat functionality to a mobile React Native application by integrating GetStream, a third-party chat SDK, significantly reducing latency, and enhancing user experience',
      'Developed an interface to input and display user profiles and dynamic statistics for various sports in a React Next.js web application',
    ],
    date: '2022 - 2023',
    company: 'VarsityLink',
  },
  {
    title: 'Senior Application Developer',
    location: 'Parsippany, NJ',
    description: [
      "Collaborated with stakeholders and led development for the redesign and enhancement of ADP's main payroll platform used by over 10,000 live clients",
      "Designed and implemented an event driven, distributed service to integrate a third-party insurance product with ADP's payroll process, saving users thousands of hours of manual work",
    ],
    date: '2022 - 2022',
    company: 'ADP',
  },
  {
    title: 'Application Developer',
    location: 'Parsippany, NJ',
    description: [
      'Wrote RESTful APIs with Java and Spring Boot and led UI development for a flagship product providing global payroll processing for more than 100 countries',
      'Mentored junior team members, providing technical expertise, code reviews, and constructive feedback to foster their professional growth',
    ],
    date: '2020 - 2022',
    company: 'ADP',
  },
  {
    title: 'Associate Application Developer',
    location: 'Parsippany, NJ',
    description: [
      'Debugged and fixed software issues, identifying root causes and implementing timely solutions',
      'Wrote clean, well-documented, unit-tested code using Typescript, React, Redux and Java, following established coding standards and best practices',
    ],
    date: '2018 - 2020',
    company: 'ADP',
  },
] as const;

export const projectsData = [
  {
    title: 'Baike',
    description:
      'An app to find, organize, and import recipes. Users can chat with an AI bot to get recipes, create new recipes, or to answer questions related to food, recipes, or cooking.',
    tags: ['React', 'Next.js', 'Postgres', 'Tailwind', 'Prisma'],
    imageUrl: baikePreviewImage,
  },
] as const;

export const skillsData = [
  'TypeScript',
  'JavaScript',
  'Java',
  'React',
  'React Native',
  'Redux',
  'Next.js',
  'Node.js',
  'HTML',
  'CSS',
  'Express',
  'PostgreSQL',
  'Oracle',
  'MongoDB',
  'Redis',
  'Kafka',
  'Spring Boot',
  'Hibernate',
  'Git',
  'Tailwind',
  'Prisma',
  'Sequelize',
  'AWS S3',
  'AWS Lambda',
  'Docker',
  'Framer Motion',
] as const;
