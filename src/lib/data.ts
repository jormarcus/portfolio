import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaGlobeAmericas, FaMobileAlt, FaReact } from 'react-icons/fa';
import { TbDeviceDesktopDollar } from 'react-icons/tb';
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
    icon: React.createElement(CgWorkAlt),
    date: '2018 - 2020',
  },
  {
    title: 'Application Developer',
    location: 'Parsippany, NJ',
    description:
      'I continued working as a full-stack web developer. My largest project was a global payroll platform that allowed users to manage the payrolls for employees in over 100 countries. I also began mentoring and performing code reviews for other teammembers.',
    icon: React.createElement(FaGlobeAmericas),
    date: '2020 - 2022',
  },
  {
    title: 'Senior Application Developer',
    location: 'Parsippany, NJ',
    description:
      "I worked as a senior developer building out ADP's new payroll dashboard. This product would be used by over 10,000 live clients.",
    icon: React.createElement(TbDeviceDesktopDollar),
    date: '2022 - 2022',
  },
  {
    title: 'Software Engineer',
    location: 'Remote, United States',
    description:
      'I worked as a full-stack and mobile developer for a sports based social media company. I used React Native, Node.js, Express, and Sequelize for the mobile application, where my key achievement was delivering a real-time chat. I also used React, Next.js, TypeScript, Tailwind, to build user profile pages for the web application.',
    icon: React.createElement(FaMobileAlt),
    date: '2022 - 2023',
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
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Sequelize',
  'Redux',
  'Java',
  'Spring Boot',
  'Hibernate',
  'Express',
  'PostgreSQL',
  'Oracle',
  'MongoDB',
  'Redis',
  'Kafka',
  'Framer Motion',
  'AWS S3',
  'AWS Lambda',
  'Docker',
] as const;
