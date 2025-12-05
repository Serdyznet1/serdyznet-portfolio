// src/components/Footer/Footer.styles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2rem;
  
  /* FIX: Use the arrow function syntax */
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  
  text-align: center;
  
  /* FIX: Use the arrow function syntax */
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  
  span {
    /* FIX: Use the arrow function syntax */
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;