import React, { FC } from 'react';
import Section from '../Section/Section';
import styles from './ProjectsSection.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import Projects from '../../util/projects';

const ProjectsSection: FC = () => {
  return (
    <Section id="project-section">
      <h2 className={styles.sectionHeader}>Projects</h2>
      <div className={styles.flex}>
        {Projects.map((project, idx) => (
          <ProjectCard
            title={project.title}
            desc={project.description}
            imageSrc={project.image}
            link={project.link}
            key={`project-card-${idx}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
