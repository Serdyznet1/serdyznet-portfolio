// src/components/About/About.styles.js
import styled, { css } from 'styled-components';
import { slideInLeft, slideInRight } from '../../styles/animations';

// We need to re-import ImageGlow from Home.styles.js
import { ImageGlow as HomeImageGlow } from '../Home/Home.styles';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// FIX: Read '$inView' instead of 'inView'
export const AboutImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.8rem;
  opacity: 0;
  ${({ $inView }) =>
    $inView &&
    css`
      animation: ${slideInLeft} 1s ease-out forwards;
    `}
`;

export const AboutImage = styled.img`
  width: 450px;
  height: 500px;
  border-radius: 12px;
  object-fit: cover;
  border: 5px solid ${({ theme }) => theme.colors.primary};
  z-index: 1;
`;

export const AboutImageGlow = styled(HomeImageGlow)`
  width: 350px;
  height: 490px;
  border-radius: 12px;
`;

// FIX: Read '$inView' instead of 'inView'
export const AboutContent = styled.div`
  h3 {
    font-size: 2.75rem;
    
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.7;
    margin: 1.5rem 0;
    font-size: 1.05rem;
  }
  opacity: 0;
  ${({ $inView }) =>
    $inView &&
    css`
      animation: ${slideInRight} 2s ease-out forwards;
      animation-delay: 0.4s;
    `}
`;