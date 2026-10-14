import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { applyTheme, getInitialTheme, saveTheme } from '../theme';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    saveTheme(nextTheme);
  };

  const label = theme === 'light' ? 'Gece görünümüne geç' : 'Gündüz görünümüne geç';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
