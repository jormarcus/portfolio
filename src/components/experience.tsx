'use client';

import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../lib/data';
import React from 'react';
import { useSectionInView } from '../lib/hooks';
import { useInView } from 'react-intersection-observer';
import { useTheme } from 'next-themes';
import CompanyLogo from './company-logo';

type TimelineElementProps = {
  item: (typeof experiencesData)[number];
  theme: string | undefined;
};

const TimelineElement: React.FC<TimelineElementProps> = ({ item, theme }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background:
            theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          textAlign: 'left',
          padding: '1.3rem 2rem',
        }}
        contentArrowStyle={{
          borderRight:
            theme === 'light'
              ? '0.4rem solid #9ca3af'
              : '0.4rem solid rgba(255, 255, 255, 0.5)',
        }}
        date={item.date}
        icon={<CompanyLogo company={item.company} />}
        iconStyle={{
          background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
          fontSize: '1.5rem',
        }}
        visible={inView}
      >
        <h3 className="font-semibold text-xl">{item.company}</h3>
        <h4 className="font-normal">{item.title}</h4>
        <p className="!mt-0 font-normal italic">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
};

const Experience = () => {
  const { ref } = useSectionInView('Experience', 0.5);
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <TimelineElement key={index} item={item} theme={theme} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
