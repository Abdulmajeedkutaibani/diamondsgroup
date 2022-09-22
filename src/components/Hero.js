import React from 'react';
import { motion } from 'framer-motion';

// import woman image
import heroImage from '../assets/img/hero picture.svg';

const Hero = () => {
  const handleClick = () => {
    return document.getElementById('contact').scrollIntoView();
  };

  return (
    <section
      id='home'
      className='lg:h-screen max-h-[1200px] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat pt-32 pb-20 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-16'>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Diamonds Group for Trading & <br /> Investments.
            </h1>
            {/* <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p> */}
            <button
              onClick={handleClick}
              className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'
            >
              Work With Us
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <motion.img
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={heroImage}
              alt=''
              className='h-full w-full '
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
