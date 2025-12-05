// src/components/About/About.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AboutContainer,
  AboutImageContainer,
  AboutImage,
  AboutImageGlow,
  AboutContent
} from './About.styles';

// 1. IMPORT Section, SectionTitle, and SectionSubtitle
import { Button, Section, SectionTitle, SectionSubtitle } from '../../styles/common';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // 2. USE the normal <Section> wrapper
    <Section id="about" ref={ref}>
    
      {/* 3. ADD THE TITLES BACK IN */}
      <SectionTitle>About Me</SectionTitle>
      

      <AboutContainer>
        <AboutImageContainer $inView={inView}>
          <AboutImageGlow />
          <AboutImage src="/serdyznetabout.jpg" alt="About Me" />
        </AboutImageContainer>
        <AboutContent $inView={inView}>
          {/* Headline */}
<h4>Full-Stack, Blockchain & Cyber Security Expert</h4>

{/* Paragraph 1: Intro & Core Tech */}
<p>
  Hi, I'm Isah Sadis Suleiman, a passionate Technologist with a solid background in creating secure, decentralized, and visually appealing digital solutions. I specialize in Full-Stack Development, Blockchain integration, and Cybersecurity — and I'm always looking for ways to improve digital safety while pushing the boundaries of Web3 technology.
</p>

{/* Paragraph 2: Design & Code Philosophy */}
<p>
  I have a strong eye for design and a "security-first" mindset. I love turning complex ideas into seamless, interactive, and secure experiences. I enjoy writing clean, scalable, and well-documented code, and I believe in continuous learning to stay updated with the latest advancements in crypto, financial markets, and ethical hacking.
</p>

{/* Paragraph 3: Work Ethic & Goals */}
<p>
  Whether I'm auditing smart contracts, analyzing financial data, or building a brand identity, I always aim to deliver high-quality work that solves real problems. My goal is to contribute to impactful projects in the Fintech and Web3 space and grow as a leader in the tech industry.
</p>
          <Button href="#projects">Read More</Button>
        </AboutContent>
      </AboutContainer>
    </Section>
  );
};

export default About;