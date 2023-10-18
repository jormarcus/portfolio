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

type TimelineElementProps = {
  item: (typeof experiencesData)[number];
};

const TimelineElement: React.FC<TimelineElementProps> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const theme = 'light';
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
        icon={item.icon}
        iconStyle={{
          background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
          fontSize: '1.5rem',
        }}
        visible={inView}
      >
        <h4 className="font-semibold">{item.title}</h4>
        <p className="!mt-0 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-zinc-700">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

const Experience = () => {
  const { ref, inView } = useSectionInView('Experience', 0.5, true);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <TimelineElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
