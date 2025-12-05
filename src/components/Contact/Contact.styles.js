// src/components/Contact/Contact.styles.js
import styled, { keyframes } from 'styled-components'; // All imports at the top

/* --- ANIMATIONS --- */
const popIn = keyframes`
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

export const ContactSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem; /* Reduced gap between columns */
  
  /* Centers the form vertically against the info list */
  align-items: center; 
  
  margin-top: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr; /* Stack on smaller screens */
    gap: 3rem;
  }
`;

/* --- LEFT SIDE: INFO CARDS --- */
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* Compact gap between cards */
  gap: 1rem; 
  
  text-align: center;
  align-items: center;

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 1.5rem;
    line-height: 1.5;
    max-width: 400px;
  }
`;

export const InfoItem = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem; /* Reduced gap inside card */
  text-decoration: none;
  
  /* Compact padding to reduce height */
  padding: 0.8rem 1.2rem; 
  
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: left;

  /* Smaller Icon Box */
  div {
    width: 40px; 
    height: 40px;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s;
    flex-shrink: 0;
    
    svg { width: 20px; height: 20px; }
  }

  /* Text Info */
  span {
    display: flex;
    flex-direction: column;
    
    strong {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.text};
    }
    
    small {
      color: ${({ theme }) => theme.colors.textLight};
      font-size: 0.85rem;
    }
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    
    div {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;

/* --- RIGHT SIDE: FORM --- */
export const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.bgLight};
  
  /* Increase padding to make form look bigger/balanced */
  padding: 3rem; 
  
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(135, 228, 13, 0.1);
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  
  /* Increase min-height to match left side height */
  min-height: 180px; 
  
  resize: vertical;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(135, 228, 13, 0.1);
  }
`;

export const FormButton = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bg};
  padding: 1rem 1.5rem;
  border-radius: 10px;
  font-weight: 700;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  svg { width: 20px; height: 20px; }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadow};
    opacity: 0.9;
  }
`;

/* --- SUCCESS MODAL STYLES --- */
export const SuccessOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 9999;
`;

export const SuccessCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  text-align: center;
  z-index: 10000;
  animation: ${popIn} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid ${({ theme }) => theme.colors.border};
  min-width: 300px;

  /* The Icon Container */
  div {
    width: 80px;
    height: 80px;
    background-color: rgba(37, 211, 102, 0.1); /* Light Green bg */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    
    svg {
      width: 40px;
      height: 40px;
      color: #25D366; /* WhatsApp/Success Green */
    }
  }

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 2rem;
  }

  button {
    background-color: #25D366;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 700;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
    }
  }
`;