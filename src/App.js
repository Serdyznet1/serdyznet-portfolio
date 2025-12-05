// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';

// Import ALL your components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Support from './components/Support/Support'; 

function App() {
  const [theme, setTheme] = useState('dark');
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleNavClick = () => {
    setIsSupportOpen(false);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      
      {/* Header controls the Theme and Support Modal */}
      <Header 
        toggleTheme={toggleTheme} 
        currentTheme={theme} 
        onOpenSupport={() => setIsSupportOpen(true)}
        onNavClick={handleNavClick}
        isSupportOpen={isSupportOpen}
      />
      
      {/* This is the content that was missing! */}
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Team />
        <Contact />
      </main>

      {/* The Support Modal (Hidden by default) */}
      <Support 
        isOpen={isSupportOpen} 
        onClose={() => setIsSupportOpen(false)} 
      />

      <Footer />
    </ThemeProvider>
  );
}

export default App;