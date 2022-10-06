import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// import img
import Image from '../assets/img/logo with name.svg';

const About = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    return document.getElementById('contact').scrollIntoView();
  };

  return (
    <section className='section bg-secondary overflow-hidden' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row lg:gap-24 items-center'>
          <div className='w-full flex justify-center'>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{
                default: {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                },
                scale: {
                  type: 'spring',
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='object-cover w-96 h-96 md:mx-auto lg:mx-0 rounded-2xl'
              src={Image}
              alt=''
            />
          </div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className='flex flex-col items-center text-center lg:items-start lg:text-left'
          >
            <div className='flex flex-col'>
              <h2 className='hidden lg:block text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block text-transform: uppercase'>
                Diamonds group
              </h2>
              {/* <p className='mb-4 text-accent'>
                Freelance Frontend Web Developer
              </p> */}
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                {t('aboutUs1')} <br />
                <br />
                {t('aboutUs2')}
                <br />
                {t('aboutUs3')}
                <br />
                <br />
                {t('aboutUs4')}
                <br />
                <br />
                {t('aboutUs5')}
                <br />
              </p>
            </div>
            <button
              className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'
              onClick={handleClick}
            >
              {t('contact_us')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
