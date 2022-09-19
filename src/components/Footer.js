import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/logo without name.svg';

const Footer = () => {
  const handleClick = () => {
    return document.getElementById('about').scrollIntoView();
  };
  return (
    <footer className='bg-tertiary py-12 lg:p-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className='text-accent text-3xl hover:text-cyan-400'
                  href={href}
                  key={index}
                  target='_blank'
                >
                  {icon}
                </a>
              );
            })}
          </div>
          <img
            src={Logo}
            alt=''
            className='w-20 h-20 p-2 cursor-pointer'
            onClick={handleClick}
          />
          <p className='text-paragraph opacity-80 text-[15px] text-center'>
            &copy; 2022{' '}
            <a
              href='https://wa.me/905527264403'
              target='_blank'
              className='underline underline-offset-4 hover:text-cyan-400'
            >
              Abdulmajeed Kutaibani.
            </a>
            <br /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
