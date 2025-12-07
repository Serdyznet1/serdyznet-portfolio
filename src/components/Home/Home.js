// src/components/Home/Home.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import {
  HomeContainer,
  HomeContent,
  HomeGreeting,
  HomeName,
  HomeRole,
  SocialLinks,
  SocialIcon,
  HomeImageContainer,
  HomeImage,
  ImageGlow,
  WhatsAppButton // <-- ADDED: Import the button style
} from './Home.styles';
import { Button } from '../../styles/common';
import { socialMedia } from '../../utils/data';
import * as Icons from '../../utils/icons';

// 1. IMPORT THE NEW FullScreenSection
import { FullScreenSection } from '../../styles/common'; 

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconComponents = {
    x: Icons.XIcon,
    facebook: Icons.FacebookIcon,
    linkedin: Icons.LinkedInIcon,
    github: Icons.GitHubIcon,
    instagram: Icons.InstagramIcon,
  };

  return (
    // 2. USE THE FullScreenSection
    <FullScreenSection id="home" ref={ref}>
      <HomeContainer>
        <HomeContent $inView={inView}>
          <HomeGreeting>Hello, My names are ..</HomeGreeting>
          <HomeName>Isah Sadis Suleiman</HomeName>
          <HomeRole>
            I'm a&nbsp;
            <span>
              <Typewriter
                words={['Full-Stack Developer', 'Blockchain Developer',  'UI/UX Designer', 'Graphic Designer','Financial Analyst', 'Cyber Security Analyst, ']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </HomeRole>
          <SocialLinks>
            {socialMedia.map(social => {
              const IconComponent = iconComponents[social.icon];
              return (
                <SocialIcon key={social.url} href={social.url} target="_blank" rel="noopener noreferrer">
                  <IconComponent />
                </SocialIcon>
              );
            })}
          </SocialLinks>
          <Button href="/serdyznetCV1.pdf" download>DOWNLOAD CV</Button>
        </HomeContent>
        
        <HomeImageContainer $inView={inView}>
          <ImageGlow />
          <HomeImage src={process.env.PUBLIC_URL +"/serdyznethome.jpg"} alt="Isah Sadis Suleiman" />
          
          {/* --- ADDED: WhatsApp Button --- */}
          {/* Replace the number below with your actual WhatsApp number */}
          <WhatsAppButton href="https://wa.me/2348140429566" target="_blank" rel="noopener noreferrer">
            <Icons.WhatsAppIcon />
          </WhatsAppButton>

        </HomeImageContainer>
      </HomeContainer>
    </FullScreenSection>
  );
};

export default Home;