// src/components/Team/Team.styles.js
import styled from 'styled-components';

export const TeamGrid = styled.div`
  display: grid;
  width: 100%;
  padding: 1rem 0;
  justify-items: center;
  
  /* DEFAULT (Mobile/iPad): 2 columns */
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem;

  /* DESKTOP (Large screens): 4 columns */
  /* This fits 8 items in 2 neat rows */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); 
    gap: 2rem;
  }
`;

export const TeamCard = styled.div`
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  /* Ensure card doesn't get too wide on mobile */
  max-width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageWrapper = styled.div`
  /* Slightly smaller images for the 4-column layout */
  width: 200px;
  height: 200px;
  margin-bottom: 1.5rem;
  border-radius: 20%;
  padding: px; 
  background: ${({ theme }) => theme.colors.bg}; 
  border: 2px solid ${({ theme }) => theme.colors.primary}; 
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 20%;
    object-fit: cover;
  }
`;

export const MemberName = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.3rem;
  font-weight: 700;
`;

export const MemberRole = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;