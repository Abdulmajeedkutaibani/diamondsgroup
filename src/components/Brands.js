import React from 'react';

// import brands data
import { brands } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center py-2'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly gap-2'>
        {brands.map((brand, idx) => {
          return (
            <div
              key={idx}
              className='w-40 flex-col justify-center text-center '
            >
              <img src={brand.img} alt='' />
              <p className='text-base font-medium text-white p-2 mb-2 rounded text-transform: uppercase'>
                {brand.service}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
