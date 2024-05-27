import React from 'react';
// import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  const navItems=[
    {href:"#home",text:"HOME"},
    {href:"#about",text:"ABOUT"},
    {href:"#skills",text:"SKILLS"},
    {href:"#contact",text:"CONTACT"},
  ];

  return (
    <nav className='block sticky top-0 z-50 max-w-screen-xl p-4 py-2 m-4 ml-12 text-[#32012F] bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 md:px-8 md:py-4 lg:px-8 lg:py-4'>
    <ul className="flex flex-row  items-center justify-center gap-4 mt-2 mb-2 pl-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-28">
     {
       navItems.map(item=>(
         <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
         <a href={item.href}>{item.text}</a>
        </li>
       ))
     }
    </ul>

 </nav>
  );
};

export default Navbar