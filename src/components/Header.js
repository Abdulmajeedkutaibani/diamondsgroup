import React, { useEffect, useState } from 'react';

// import components
import Logo from '../assets/img/logo.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';
import { BsCurrencyExchange } from 'react-icons/bs';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  const handleWidgetButton = () => {
    return (
      document
        .getElementById('currency-widget')
        .classList.toggle('right-[-20rem]'),
      document
        .getElementById('currency-widget')
        .classList.toggle('right-[2.75rem]')
    );
  };

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='#' className=' w-44 h-44'>
          <img src={Logo} alt='' />
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
      <div
        id='currency-widget'
        className='absolute w-[200px] right-[-20rem] top-[6rem] text-xl border border-cyan-500 border-2 rounded-lg tranform: transition-all duration-300'
      >
        <fxwidget-er
          inverse='false'
          amount='1'
          decimals='2'
          large='true'
          shadow='true'
          symbol='true'
          flag='true'
          changes='true'
          grouping='true'
          border='true'
          main-curr='USD'
          sel-curr='EUR,GBP,TRY,AED,KWD,SAR'
          background-color='#16a34a'
          border-radius='0.5'
          background='linear-gradient(161deg,#141E30,#243B55)'
        ></fxwidget-er>
      </div>
      <button
        onClick={handleWidgetButton}
        className='absolute w-12 h-12 right-[7.5rem] top-[1.1rem] rounded-xl flex justify-center items-center bg-[#141E30] text-gray-200 text-3xl hover:bg-cyan-500'
      >
        <BsCurrencyExchange />
      </button>
    </header>
  );
};

export default Header;
