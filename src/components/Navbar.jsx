import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define navigation functions
  const gotoHome = () => {
    setActiveTab('home');
    navigate('/');
  };

  const gotoAbout = () => {
    setActiveTab('about');
    navigate('/about');
  };

  const gotoSkills = () => {
    setActiveTab('skills');
    navigate('/skills');
  };

  const gotoContact = () => {
    setActiveTab('contact');
    navigate('/contact');
  };
  const gotoResume = () => {
    setActiveTab('resume');
    navigate('/resume');
  };

  // Update navItems to store function references
  const navItems = [
    { action: gotoHome, text: 'HOME' },
    { action: gotoAbout, text: 'ABOUT' },
    { action: gotoResume, text: 'RESUME' },
    { action: gotoSkills, text: 'SKILLS' },
    { action: gotoContact, text: 'CONTACT' },
  ];

  const handleNavClick = (action) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <nav className='sticky top-4 z-50 mx-4 sm:mx-8 text-[#32012F] dark:text-white bg-white dark:bg-[#121212] border shadow-md rounded-xl border-white/80 dark:border-white/10 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200'>
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <button
          onClick={() => handleNavClick(gotoHome)}
          className="flex-shrink-0 font-syne text-xl font-extrabold tracking-tight text-[#32012F] dark:text-white sm:text-2xl"
        >
          Debug.
        </button>

        <ul className="hidden flex-row items-center gap-6 sm:flex lg:gap-10">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center whitespace-nowrap font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 dark:text-white">
              <button
                onClick={() => handleNavClick(item.action)}
                className={`pb-1 border-b-2 transition-colors duration-200 hover:border-b-[#32012F]/40 dark:hover:border-b-white/40 ${
                  activeTab.toLowerCase() === item.text.toLowerCase()
                    ? 'font-bold border-b-[#32012F] dark:border-b-white'
                    : 'border-b-transparent'
                }`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle inverted theme"
            aria-pressed={theme === 'inverted'}
            className="flex items-center justify-center rounded-full p-2 border border-[#32012F]/20 dark:border-white/20 transition-colors duration-200 hover:bg-[#32012F]/5 dark:hover:bg-white/10"
          >
            <span className="text-base leading-none">{theme === 'inverted' ? <i class="fa fa-lightbulb-o" aria-hidden="true"></i> : <i class="fa fa-moon-o" aria-hidden="true"></i>
}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="flex flex-col items-center justify-center gap-1.5 p-2 sm:hidden"
          >
            <span className={`block h-0.5 w-6 rounded-full bg-[#32012F] dark:bg-white transition-transform duration-200 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-[#32012F] dark:bg-white transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-[#32012F] dark:bg-white transition-transform duration-200 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col items-start gap-1 border-t border-[#32012F]/10 dark:border-white/10 px-4 pb-3 pt-2 sm:hidden">
          {navItems.map((item, index) => (
            <li key={index} className="w-full font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 dark:text-white">
              <button
                onClick={() => handleNavClick(item.action)}
                className={`w-full rounded-md px-2 py-2 text-left transition-colors duration-200 hover:bg-[#32012F]/5 dark:hover:bg-white/10 ${
                  activeTab.toLowerCase() === item.text.toLowerCase() ? 'font-bold text-[#32012F] dark:text-white' : ''
                }`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
