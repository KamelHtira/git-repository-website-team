import React from 'react';
import { Switch } from './ui/switch';
import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2 p-1 rounded-md bg-muted/50 hover:bg-muted/70 transition-all duration-300">
      <FiSun size={16} className={`transition-colors duration-300 ${theme === 'dark' ? 'text-yellow-500' : 'text-muted-foreground'}`} />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="theme-transition"
      />
      <FiMoon size={16} className={`transition-colors duration-300 ${theme === 'dark' ? 'text-muted-foreground' : 'text-blue-500'}`} />
    </div>
  );
};

export default ThemeToggle;
