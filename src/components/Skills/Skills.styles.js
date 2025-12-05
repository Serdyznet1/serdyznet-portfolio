// src/components/Skills/Skills.styles.js
import styled from 'styled-components';

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const SkillCategory = styled.div`
  /* Access theme using function */
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  h3 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1.5rem;
    text-align: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 0.5rem;
  }
`;

export const SkillItem = styled.div`
  margin-bottom: 1rem;
`;

export const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: 500;
  
  span:first-child { color: ${({ theme }) => theme.colors.text}; }
  span:last-child { color: ${({ theme }) => theme.colors.primary}; }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

export const Progress = styled.div`
  /* FIX: We read $inView here. If true, use percentage. If false, use 0% */
  width: ${({ percentage, $inView }) => ($inView ? `${percentage}%` : '0%')};
  
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadow};
  
  transition: width 1.5s ease-in-out; 
`;