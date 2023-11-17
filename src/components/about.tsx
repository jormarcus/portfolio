'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/src/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-6">
        After graduating with a degree in{' '}
        <span className="font-medium">Economics</span>, I worked in accounting,
        while learning to code in my free time. I decided to pursue my passion
        for programming. I enrolled in a coding bootcamp and learned{' '}
        <span className="font-medium">fullstack web development</span>.
      </p>
      <p className="mb-6">
        My first job as a developer was at{' '}
        <span className="font-medium">ADP</span>, where I spent nearly four
        years working on multiple fullstack projects. These included a redesign
        and transformation of <span className="font-medium">ADP</span>
        &apos;s main payroll application and an innovative product that allows
        payrolls from 100+ countries to be run from a single system of record.
      </p>
      <p className="mb-6">
        I wanted a new challenge and began a role at{' '}
        <span className="font-medium">HiLyte</span>, a startup building a social
        media application with the mission to help high school athletes get
        recruited for college sports. One of the core features I worked on was a
        real-time chat built with React Native and Node.js.
      </p>
      <p className="mb-6">
        My core stack is{' '}
        <span className="font-medium">
          Typescript, React, Next.js, Node.js, Java, and PostgresSQL
        </span>
        . I enjoy learning new frameworks and tools and using them to build
        projects. Some of the technologies I have been using recently include,{' '}
        <span className="font-medium">Next.js 14, OpenAI API, Prisma, and</span>{' '}
        <span className="font-medium">React Native</span>. I am currently
        seeking a <span className="font-medium">full-time position</span> as a{' '}
        <span className="font-medium">software engineer</span>.
      </p>
      <p>
        When I&apos;m not coding, I enjoy playing tennis, pickleball, cooking,
        video games, movies, reading, and hiking with my dog.
      </p>
    </motion.section>
  );
};

export default About;
