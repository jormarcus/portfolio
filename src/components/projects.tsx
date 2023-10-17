'use client';

import SectionHeading from './section-heading';
import { projectsData } from '@/src/lib/data';
import Project from './project';
import { useSectionInView } from '@/src/lib/hooks';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <div key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
