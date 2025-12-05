// src/components/Home/Home.styles.js
import styled, { css, keyframes } from 'styled-components'; // <-- Added 'keyframes'
import { slideInLeft, slideInRight } from '../../styles/animations';

// --- NEW: Floating Animation ---
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); } /* Moves up 20px */
  100% { transform: translateY(0px); }
`;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`;

export const HomeContent = styled.div`
  @media (max-width: 768px) { order: 2; }
  opacity: 0;
  ${({ $inView }) =>
    $inView &&
    css`
      animation: ${slideInLeft} 1s ease-out forwards;
    `}
`;

export const HomeGreeting = styled.p`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const HomeName = styled.h1`
  font-size: 3.5rem;
  margin: 0.5rem 0;
  @media (max-width: 768px) { font-size: 2.5rem; }
`;

export const HomeRole = styled.h2`
  font-size: 2.25rem; /* Kept your increased font size */
  margin-bottom: 2rem;
  span { color: ${({ theme }) => theme.colors.primary}; font-weight: 700; }
  @media (max-width: 768px) { font-size: 1.5rem; }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) { justify-content: center; }
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  transition: all 0.3s ease;
  svg { width: 20px; height: 20px; }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

export const HomeImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: start; /* Kept your top alignment */

  @media (max-width: 768px) {
    order: 1;
    margin-top: 2rem;
    align-self: center;
  }
  opacity: 0;
  ${({ $inView }) =>
    $inView &&
    css`
      animation: ${slideInRight} 1s ease-out forwards;
      animation-delay: 0.2s;
    `}
`;

export const HomeImage = styled.img`
  width: 312px; 
  height: 380px; 
  border-radius: 50%; 
  object-fit: cover;
  object-position: center 25%; /* Kept your centering fix */
  border: 5px solid ${({ theme }) => theme.colors.primary};
  z-index: 1;

  /* --- APPLY FLOAT ANIMATION HERE --- */
  animation: ${float} 4s ease-in-out infinite;
`;

export const ImageGlow = styled.div`
  position: absolute;
  width: 310px;
  height: 390px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow};
  filter: blur(15px);
  z-index: 0;

  /* --- APPLY FLOAT ANIMATION HERE TOO (SYNCED) --- */
  animation: ${float} 4s ease-in-out infinite;
`;

export const WhatsAppButton = styled.a`
  position: absolute;
  bottom: 0; 
  right: 0; 
  
  width: 60px;
  height: 60px;
  background-color: #25D366; 
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.4);
  
  transition: all 0.3s ease;
  z-index: 10; 

  /* OPTIONAL: Make the WhatsApp button float too! */
  animation: ${float} 4s ease-in-out infinite;

  svg {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.7);
  }

  @media (max-width: 768px) {
    right: 0; 
    bottom: -10px;
    width: 50px;
    height: 50px;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;