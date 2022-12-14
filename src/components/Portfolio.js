import React from 'react';
import { useTranslation } from 'react-i18next';

// import components
import Projects from './Projects';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[3rem] before:-left-32 before:hidden before:lg:block'>
            {t('our_products_include')}
          </h2>
          {/* <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p> */}
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
