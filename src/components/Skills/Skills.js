// src/components/Skills/Skills.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SkillsGrid, SkillCategory, SkillItem, SkillInfo, ProgressBar, Progress } from './Skills.styles';
import { skills } from '../../utils/data';
import { Section, SectionTitle, SectionSubtitle } from '../../styles/common';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="skills" ref={ref}>
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>My technical and professional experiences</SectionSubtitle>

      <SkillsGrid>
        {Object.keys(skills).map((key) => (
          <SkillCategory key={key}>
            {/* Capitalize category name */}
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            
            {skills[key].map(skill => {
              // BULLETPROOF: Check if data uses 'p' or 'percentage'
              const percent = skill.percentage || skill.p; 
              
              return (
                <SkillItem key={skill.name}>
                  <SkillInfo>
                    <span>{skill.name}</span>
                    <span>{percent}%</span>
                  </SkillInfo>
                  <ProgressBar>
                    {/* FIX: We use $inView here to match the style file */}
                    <Progress percentage={percent} $inView={inView} />
                  </ProgressBar>
                </SkillItem>
              );
            })}
          </SkillCategory>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default Skills;