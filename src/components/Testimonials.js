import React from 'react';
import { useTranslation } from 'react-i18next';

// import components
import TestiSlider from './TestiSlider';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center '>
          <h2 className='section-title  relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block lg:mb-20 '>
            {t('our_founders')}
          </h2>
          {/* <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p> */}
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
