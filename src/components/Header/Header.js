// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import { 
  HeaderNav, NavContainer, NavLogo, DesktopNavMenu, NavLink, 
  MobileMenuIcon, HeaderIcon, ThemeButton, ControlsContainer, BuyCoffeeBtn,
  Overlay, SidebarContainer, SidebarHeader, ProfileInfo, CloseBtn,
  SidebarLinks, SidebarLinkItem, ConnectSection, SocialRow, SidebarSocialIcon,
  SidebarFooter, ModeToggleBtn 
} from './Header.styles';
import * as Icons from '../../utils/icons';
import { navLinks } from '../../utils/data';

const getNavIcon = (name) => {
  switch(name) {
    case 'HOME': return <Icons.HomeIcon />;
    case 'ABOUT ME': return <Icons.UserIcon />;
    case 'PROJECTS': return <Icons.ProjectIcon />;
    case 'OUR TEAM': return <Icons.TeamIcon />;
    case 'SKILLS': return <Icons.SkillIcon />;
    case 'CONTACT ME': return <Icons.ContactIcon />;
    default: return <Icons.UserIcon />;
  }
};

// FIX: Added 'isSupportOpen' to props
const Header = ({ toggleTheme, currentTheme, onOpenSupport, onNavClick, isSupportOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    if (onNavClick) onNavClick();
  };

  return (
    <>
      {/* FIX: Pass $forceSolid prop based on isSupportOpen */}
      <HeaderNav $isScrolled={isScrolled} $forceSolid={isSupportOpen}>
        <NavContainer>
          <NavLogo to="home" smooth={true} duration={500} onClick={handleLinkClick}>
            Serdyz<span>Net.</span>
          </NavLogo>

          <DesktopNavMenu>
            {navLinks.map(link => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </DesktopNavMenu>

          <ControlsContainer>
            <BuyCoffeeBtn 
              onClick={onOpenSupport} 
              title="Support my work"
            >
              <Icons.ModernCoffeeCupWithHandleAndCleanSteam /> 
            </BuyCoffeeBtn>

            <HeaderIcon href="https://github.com/serdyznet1" target="_blank" rel="noopener noreferrer" className="desktop-only">
              <Icons.GitHubIcon />
            </HeaderIcon>

            <ThemeButton onClick={toggleTheme} className="desktop-only">
              {currentTheme === 'dark' ? <Icons.SunIcon /> : <Icons.MoonIcon />}
            </ThemeButton>

            <MobileMenuIcon onClick={() => setMenuOpen(true)}>
              <Icons.MenuIcon />
            </MobileMenuIcon>
          </ControlsContainer>
        </NavContainer>
      </HeaderNav>

      {/* ... Mobile Sidebar logic ... (Keep existing sidebar code here) */}
      <Overlay $isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
      <SidebarContainer $isOpen={menuOpen}>
        <SidebarHeader>
          <ProfileInfo>
            <img src="/profile-pic.jpg" alt="Isah Sadis" />
            <div><h4>Isah Sadis</h4><span>Full Stack Developer</span></div>
          </ProfileInfo>
          <CloseBtn onClick={() => setMenuOpen(false)}><Icons.CloseIcon /></CloseBtn>
        </SidebarHeader>
        <SidebarLinks>
          {navLinks.map(link => (
            <li key={link.name}>
              <SidebarLinkItem
                to={link.to} spy={true} smooth={true} offset={-70} duration={500}
                onClick={handleLinkClick} activeClass="active"
              >
                {getNavIcon(link.name)}
                {link.name.charAt(0) + link.name.slice(1).toLowerCase().replace(' me', '')} 
              </SidebarLinkItem>
            </li>
          ))}
        </SidebarLinks>
        <ConnectSection>
          <p>Connect with me</p>
          <SocialRow>
            <SidebarSocialIcon href="https://x.com/serdyznet1" target="_blank"><Icons.XIcon /></SidebarSocialIcon>
            <SidebarSocialIcon href="https://github.com/serdyznet1" target="_blank"><Icons.GitHubIcon /></SidebarSocialIcon>
            <SidebarSocialIcon href="https://linkedin.com/in/serdyznet1" target="_blank"><Icons.LinkedInIcon /></SidebarSocialIcon>
            <SidebarSocialIcon href="https://instagram.com/serdyznet1" target="_blank"><Icons.InstagramIcon /></SidebarSocialIcon>
          </SocialRow>
        </ConnectSection>
        <SidebarFooter>
          <ModeToggleBtn onClick={toggleTheme}>
            {currentTheme === 'dark' ? <Icons.SunIcon /> : <Icons.MoonIcon />}
            {currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </ModeToggleBtn>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
};

export default Header;