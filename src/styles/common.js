// src/styles/common.js
import styled from 'styled-components';
// NOTICE: We do NOT import 'theme' here anymore.

/* This is the NEW default Section. */
export const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

/* This is ONLY for the Home page. */
export const FullScreenSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  &::after {
    content: '';
    width: 80px;
    height: 4px;
    /* Using props to get the theme color */
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
  @media (max-width: 768px) { font-size: 2rem; }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  /* Using props to get the theme color */
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 4rem;
`;

export const Button = styled.a`
  display: inline-block;
  /* Using props to get the theme color */
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bg};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(135, 228, 13, 0.2);
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;