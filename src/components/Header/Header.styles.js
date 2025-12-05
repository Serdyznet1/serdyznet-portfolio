// src/components/Header/Header.styles.js
import styled, { css } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

/* --- NAV BAR (Top) --- */
export const HeaderNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  
  /* FIX: Check both $isScrolled AND $forceSolid */
  background-color: ${({ $isScrolled, $forceSolid, theme }) =>
    ($isScrolled || $forceSolid) ? theme.colors.bg : 'transparent'};
    
  border-bottom: 1px solid ${({ $isScrolled, $forceSolid, theme }) =>
    ($isScrolled || $forceSolid) ? theme.colors.border : 'transparent'};
    
  ${({ $isScrolled, $forceSolid }) => ($isScrolled || $forceSolid) && `backdrop-filter: blur(10px);`}
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(ScrollLink)`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  span { color: ${({ theme }) => theme.colors.primary}; }
  
  @media (min-width: 768px) { font-size: 3rem; }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  z-index: 1002; /* Ensure it stays above overlay if needed */
  
  @media (max-width: 768px) { display: block; }
`;

export const DesktopNavMenu = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 768px) { display: none; }
`;

/* --- DESKTOP LINKS --- */
export const NavLink = styled(ScrollLink)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover, &.active { color: ${({ theme }) => theme.colors.primary}; }
`;

/* --- DESKTOP CONTROLS --- */
export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 768px) {
    .desktop-only { display: none; }
  }
`;

export const HeaderIcon = styled.a`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  svg { width: 24px; height: 24px; }
  &:hover { color: ${({ theme }) => theme.colors.primary}; }
`;

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover { color: ${({ theme }) => theme.colors.primary}; transform: scale(1.1); }
  svg { width: 24px; height: 24px; }
`;

/* =========================================
   MOBILE SIDEBAR STYLES (Matching Image)
   ========================================= */

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  backdrop-filter: blur(8px); /* Blur effect */
  z-index: 2000;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px; /* Slightly wider */
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  z-index: 2001;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: 4px 0 20px rgba(0,0,0,0.1);
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
`;

/* 1. Header Section: Profile + Close Button */
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 47px;
    height: 51px;
    border-radius: 50%;
    margin: 0;
    object-fit: cover;
    padding: 0px;
    border: 0.3px solid ${({ theme }) => theme.colors.primary};
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLight};
  transition: 0.3s;
  &:hover { color: ${({ theme }) => theme.colors.primary}; }
  svg { width: 24px; height: 24px; }
`;

/* 2. Navigation Links */
export const SidebarLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SidebarLinkItem = styled(ScrollLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.textLight};
  }

  /* Hover & Active State */
  &:hover, &.active {
    background-color: ${({ theme }) => theme.mode === 'light' ? '#f3f0ff' : 'rgba(255,255,255,0.1)'};
    color: ${({ theme }) => theme.colors.primary};
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

/* 3. Socials Section */
export const ConnectSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 1rem;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SidebarSocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.mode === 'light' ? '#f0f4f8' : 'rgba(255,255,255,0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }

  svg { width: 18px; height: 18px; }
`;

/* 4. Bottom Theme Toggle */
export const SidebarFooter = styled.div`
  margin-top: auto; /* Pushes this to the very bottom */
`;

export const ModeToggleBtn = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  svg { width: 20px; height: 20px; }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.mode === 'light' ? '#fff' : 'rgba(255,255,255,0.05)'};
  }
`;
// src/components/Header/Header.styles.js

// ... other styles ...

export const BuyCoffeeBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  
  svg {
    width: 45px;
    height: 45px;
  }

  &:hover {
    color: #ba3808ff; /* Signature "Buy Me a Coffee" Yellow */
    transform: translateY(-2px) rotate(-10deg); /* Fun little tilt on hover */
  }
`;