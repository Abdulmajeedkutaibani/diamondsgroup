import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/logo 2.svg';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12 lg:p-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img src={Logo} alt='' className='w-20 h-20' />
          </div>
          <p className='text-paragraph opacity-80 text-[15px] text-center'>
            &copy; 2022 Abdulmajeed Kutaibani.
            <br /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
