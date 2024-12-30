import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Define navigation functions
  const gotoHome = () => {
    navigate('/');
  };

  const gotoAbout = () => {
    navigate('/about');
  };

  const gotoSkills = () => {
    navigate('/skills');
  };

  const gotoContact = () => {
    navigate('/contact');
  };

  // Update navItems to store function references
  const navItems = [
    { action: gotoHome, text: 'HOME' },
    { action: gotoAbout, text: 'ABOUT' },
    { action: gotoSkills, text: 'SKILLS' },
    { action: gotoContact, text: 'CONTACT' },
  ];

  return (
    <nav className='block sticky top-0 z-50 max-w-screen-xl p-4 ml-12 text-[#32012F] bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 md:px-8 md:py-4 lg:px-8'>
      <ul className="flex flex-row items-center justify-center gap-4 mt-2 mb-2 pl-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-28">
        {navItems.map((item, index) => (
          <li key={index} className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
            <button onClick={item.action}>{item.text}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
