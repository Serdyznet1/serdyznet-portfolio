import styled from 'styled-components';

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  /* FIX: Use function to access theme */
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const ProjectImage = styled.div`
  height: 200px;
  background-color: #4a5568; 
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  /* FIX: Use function to access theme */
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  text-shadow: 1px 1px 2px #000;
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    /* FIX: Use function to access theme */
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  p {
    /* FIX: Use function to access theme */
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;