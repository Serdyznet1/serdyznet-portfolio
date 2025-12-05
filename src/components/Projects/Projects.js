import React from 'react';
import { ProjectsGrid, ProjectCard, ProjectImage, ProjectContent } from './Projects.styles';
import { Button } from '../../styles/common';
// FIX: Ensure this path is correct
import { projects } from '../../utils/data'; 
import { Section, SectionTitle, SectionSubtitle } from '../../styles/common';

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle>Latest Projects</SectionTitle>
      <SectionSubtitle>Check out some of my recent work</SectionSubtitle>

      <ProjectsGrid>
        {/* Check if projects exist before mapping */}
        {projects && projects.map((project, index) => (
          <ProjectCard key={index}>
            {/* Pass background image as $bg */}
            <ProjectImage $bg={project.image} />
            <ProjectContent>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Button href={project.link} target="_blank" rel="noopener noreferrer">Visit</Button>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default Projects;