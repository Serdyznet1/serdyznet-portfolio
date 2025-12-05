import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TeamGrid, TeamCard, ImageWrapper, MemberName, MemberRole } from './Team.styles';
import { teamMembers } from '../../utils/data';
import { Section, SectionTitle, SectionSubtitle } from '../../styles/common';

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="team" ref={ref}>
      <SectionTitle>Meet My Team</SectionTitle>
      <SectionSubtitle>The creative minds behind the projects</SectionSubtitle>

      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard key={index}>
            <ImageWrapper>
              {/* Ensure you have member images in /public folder */}
              <img src={member.image} alt={member.name} />
            </ImageWrapper>
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </TeamCard>
        ))}
      </TeamGrid>
      
    </Section>
  );
};

export default Team;