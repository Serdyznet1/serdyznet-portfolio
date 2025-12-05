import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    /* FIX: Use arrow function to read the theme color */
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s linear; /* Makes the theme switch smooth */
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    /* FIX: Use arrow function here too */
    color: ${({ theme }) => theme.mode === 'light' ? theme.colors.text : theme.colors.white};
    font-weight: 600;
  }
`;