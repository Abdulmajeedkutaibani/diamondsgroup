import React from 'react';

// import brands data
import { brands } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center py-2'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        {brands.map((brand, idx) => {
          return (
            <div
              key={idx}
              className='w-40 flex-col justify-center text-center hover:border-2 hover:border-green-600'
            >
              <img src={brand.img} alt='' />
              <p className='text-lg font-semibold text-white p-2 mb-2 rounded text-transform: uppercase'>
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
