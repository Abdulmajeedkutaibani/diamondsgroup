import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6 '>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-accent'
            key={index}
          >
            <a
              className='text-3xl hover:text-cyan-400'
              href={item.href}
              target='_blank'
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
