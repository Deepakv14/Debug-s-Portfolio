import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col  sticky bottom-0 z-50 items-center justify-center p-4 mx-10 mt-2 max-w-screen-xl text-[#32012F] bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      {/* <div className="mt-2 text-[#32012F] italic items-center justify-center">
        <ul className="flex flex-col md:flex-row lg:flex-row">
          <li className="m-2 p-2 lg:m-4">
            <span>
              <i className="fa fa-github mr-2"></i>
            </span>
            <a href="https://github.com/Deepakv14">Deepakv14</a>
          </li>
          <li className="m-2 p-2 lg:m-4">
            <span>
              <i className="fa fa-envelope mr-2"></i>
            </span>
            <a href="#Contact">dnkv1403@gmail.com</a>
          </li>
          <li className="m-2 p-2 lg:m-4">
            <span>
              <i className="fa fa-linkedin-square mr-2"></i>
            </span>
            <a href="https://www.linkedin.com/in/deepak-verma-1403">Lucknow, UP, INDIA</a>
          </li>
        </ul>
      </div> */}
      <p className="text-[#32012F] font-sans mt-4">Made by Deepak Verma :)</p>
    </div>
  );
};

export default Footer;
