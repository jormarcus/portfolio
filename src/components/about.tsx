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
      <p className="mb-3">
        After graduating with a degree in{' '}
        <span className="font-medium">Economics</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{' '}
        <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is
        building new products. My core stack is{' '}
        <span className="font-medium">
          Typescript, React, Next.js, Node.js, Java, and PostgresSQL
        </span>
        . I am also familiar with React Native. I am always looking to learn new
        technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">{`When I'm not coding`}</span>, I enjoy playing
        tennis, pickleball, video games, watching movies, reading, and hiking
        with my dog.
      </p>
    </motion.section>
  );
};

export default About;
