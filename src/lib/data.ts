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
    title: 'Associate Application Developer',
    location: 'Parsippany, NJ',
    description:
      'I worked as a full-stack developer for 1 year. I used Typescript, React and Redux on the frontend and Java, Spring Boot, Hibernate, and Oracle on the backend.',
    date: '2018 - 2020',
    company: 'ADP',
  },
  {
    title: 'Application Developer',
    location: 'Parsippany, NJ',
    description:
      'I continued working as a full-stack web developer. My largest project was a global payroll platform that allowed users to manage the payrolls for employees in over 100 countries. I also began mentoring and performing code reviews for other teammembers.',
    date: '2020 - 2022',
    company: 'ADP',
  },
  {
    title: 'Senior Application Developer',
    location: 'Parsippany, NJ',
    description:
      "I worked as a senior developer building out ADP's new payroll dashboard. This product would be used by over 10,000 live clients.",
    date: '2022 - 2022',
    company: 'ADP',
  },
  {
    title: 'Software Engineer',
    location: 'Remote, United States',
    description:
      'I worked as a full-stack and mobile developer for a sports based social media company. I used React Native, Node.js, Express, and Sequelize for the mobile application, where my key achievement was delivering a real-time chat. I also used React, Next.js, TypeScript, Tailwind, to build user profile pages for the web application.',
    date: '2022 - 2023',
    company: 'VarsityLink',
  },
] as const;

export const projectsData = [
  {
    title: 'Baike',
    description:
      'An app to find, organize, and import recipes. Users can chat with an AI bot to get recipes, create new recipes, or answer recipe/cooking related questions.',
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
