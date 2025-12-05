// src/components/Support/Support.styles.js
import styled, { keyframes } from 'styled-components';

const slideUpFade = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

/* --- FULL PAGE OVERLAY WRAPPERS --- */
export const FullPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  z-index: 950; 
  padding-top: 100px;
  padding-bottom: 2rem;
  overflow-y: auto;
  animation: ${slideUpFade} 0.4s ease-out;

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 2rem;
  background: ${({ theme }) => theme.colors.bgLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: rotate(90deg);
    border-color: ${({ theme }) => theme.colors.primary};
  }
  svg { width: 24px; height: 24px; }
`;

/* --- HEADER & LAYOUT --- */
export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  .icon-box {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #00ff00ff, #010604ff);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    box-shadow: 0 10px 25px rgba(40, 202, 45, 0.4);
    svg { width: 35px; height: 35px; }
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    background: -webkit-linear-gradient(0deg, #00ff00ff, #000b07ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
    font-size: 1.15rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 4rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

/* --- DONATION FORM --- */
export const DonationCard = styled.div`
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 2.5rem;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);

  h3 {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }
`;

export const AmountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const AmountBox = styled.div`
  border: 2px solid ${({ $active, theme }) => $active ? '#00ff2fff' : theme.colors.border};
  background-color: ${({ $active, theme }) => $active ? 'rgba(255, 0, 128, 0.05)' : theme.colors.bg};
  border-radius: 12px;
  padding: 1rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #00ff00ff;
    transform: translateY(-2px);
  }

  span { display: block; font-size: 1.4rem; margin-bottom: 0.4rem; }
  strong { display: block; font-size: 1rem; color: ${({ theme }) => theme.colors.text}; }
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  input, textarea {
    width: 100%;
    padding: 1.1rem;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: #00ff00ff;
      box-shadow: 0 0 0 3px rgba(255, 0, 128, 0.1);
    }
  }
  
  textarea { resize: vertical; min-height: 100px; }
`;

export const PayButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(90deg, #00ff00ff, #28caacff);
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
  margin-top: 1rem;
  box-shadow: 0 10px 20px rgba(8, 1, 15, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(8, 1, 14, 0.4);
  }
`;

/* --- INFO COLUMN --- */
export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 1rem;
`;

export const InfoHeader = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #00ff04ff;
    margin-bottom: 1rem;
    font-weight: 800;
  }
  p { color: ${({ theme }) => theme.colors.textLight}; line-height: 1.7; font-size: 1.05rem; }
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  gap: 1.2rem;
  
  .icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: white;
    &.pink { background-color: #00ff08ff; }
    &.purple { background-color: #021b1cff; }
    &.orange { background-color: #ffaa00; }
  }
  
  div {
    h4 { margin-bottom: 0.4rem; font-size: 1.1rem; color: ${({ theme }) => theme.colors.text}; font-weight: 700; }
    p { font-size: 0.95rem; color: ${({ theme }) => theme.colors.textLight}; line-height: 1.5; }
  }
`;

export const QuoteCard = styled.div`
  background: ${({ theme }) => theme.mode === 'light' ? '#fff0f5' : 'rgba(12, 148, 64, 0.1)'};
  border-left: 4px solid #44ff00ff;
  padding: 2rem;
  border-radius: 12px;
  margin-top: 1rem;
  
  .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    img { width: 100px; height: 100px; border-radius: 45%; border: 2px solid #327c0bff; }
  }

  p {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  
  span { font-weight: 800; color: ${({ theme }) => theme.colors.text}; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px; }
`;

/* --- REVIEWS SECTION (Missing in previous code) --- */
export const ReviewsSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 3rem;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 2rem;
  }
`;

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const ReviewCard = styled.div`
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: left;
  
  p {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  div {
    strong { display: block; color: ${({ theme }) => theme.colors.primary}; font-size: 1rem; }
    small { color: ${({ theme }) => theme.colors.textLight}; font-size: 0.85rem; }
  }
`;

/* --- FLOATING BUTTON --- */
export const WhatsAppFloat = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
  z-index: 1000;
  transition: transform 0.3s;

  &:hover { transform: scale(1.1); }
  svg { width: 32px; height: 32px; }
`;