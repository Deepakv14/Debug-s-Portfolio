import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

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
    <nav className='sticky top-4 z-50 mx-4 sm:mx-8 text-[#32012F] bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200'>
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <button
          onClick={() => handleNavClick(gotoHome)}
          className="flex-shrink-0 font-syne text-xl font-extrabold tracking-tight text-[#32012F] sm:text-2xl"
        >
          Debug.
        </button>

        <ul className="hidden flex-row items-center gap-6 sm:flex lg:gap-10">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center whitespace-nowrap font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <button
                onClick={() => handleNavClick(item.action)}
                className={`pb-1 border-b-2 transition-colors duration-200 hover:border-b-[#32012F]/40 ${
                  activeTab.toLowerCase() === item.text.toLowerCase()
                    ? 'font-bold border-b-[#32012F]'
                    : 'border-b-transparent'
                }`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="flex flex-col items-center justify-center gap-1.5 p-2 sm:hidden"
        >
          <span className={`block h-0.5 w-6 rounded-full bg-[#32012F] transition-transform duration-200 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-[#32012F] transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-[#32012F] transition-transform duration-200 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col items-start gap-1 border-t border-[#32012F]/10 px-4 pb-3 pt-2 sm:hidden">
          {navItems.map((item, index) => (
            <li key={index} className="w-full font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <button
                onClick={() => handleNavClick(item.action)}
                className={`w-full rounded-md px-2 py-2 text-left transition-colors duration-200 hover:bg-[#32012F]/5 ${
                  activeTab.toLowerCase() === item.text.toLowerCase() ? 'font-bold text-[#32012F]' : ''
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
