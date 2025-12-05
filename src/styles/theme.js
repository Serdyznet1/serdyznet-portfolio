// src/styles/theme.js

// Common values that don't change (like the green primary color)
const common = {
  colors: {
    primary: '#87e40dff', // Your green
    white: '#FFFFFF',
    // We keep 'border' generic here, or specific in themes
  },
  shadow: '0 0 25px rgba(135, 228, 13, 0.3)',
};

export const darkTheme = {
  ...common,
  mode: 'dark',
  colors: {
    ...common.colors,
    bg: '#1a202c',        // Dark background
    bgLight: '#2D3748',   // Slightly lighter dark (for cards)
    text: '#E2E8F0',      // Light text
    textLight: '#A0AEC0', // Grey text
    border: '#4A5568',
    icon: '#E2E8F0',      // Icon color
  },
};

export const lightTheme = {
  ...common,
  mode: 'light',
  colors: {
    ...common.colors,
    bg: '#f7f9fc',        // Very light grey/white background
    bgLight: '#ffffff',   // Pure white (for cards)
    text: '#1a202c',      // Dark text
    textLight: '#4A5568', // Grey text
    border: '#E2E8F0',
    icon: '#2D3748',      // Icon color
  },
};