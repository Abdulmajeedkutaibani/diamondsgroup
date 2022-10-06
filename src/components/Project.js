import React from 'react';
import { useTranslation } from 'react-i18next';

const Project = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div
      key={item.id}
      className='flex flex-col items-center text-center hover:scale-110'
    >
      <div className='mb-8 '>
        <img className='rounded-lg w-96 h-56' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-base font-bold mb-3'>
        {t(item.category)}
      </p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{t(item.name)}</h3>
    </div>
  );
};

export default Project;
