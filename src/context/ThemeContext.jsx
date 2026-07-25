import React, { createContext, useContext, useEffect, useState } from 'react';

export const THEMES = {
  LIGHT: 'light',
  INVERTED: 'inverted',
};

const STORAGE_KEY = 'debug-portfolio-theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial = stored === THEMES.INVERTED ? THEMES.INVERTED : THEMES.LIGHT;
    document.documentElement.classList.toggle('dark', initial === THEMES.INVERTED);
    return initial;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === THEMES.INVERTED);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.INVERTED : THEMES.LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
