import React from 'react';

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

const Nav = () => {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get('i18next') || 'en';

  return (
    <nav>
      <ul
        className={`flex gap-8 capitalize text-[15px] ${
          currentLanguageCode === 'ar' ? ' flex-row-reverse' : 'text-left'
        }`}
      >
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {t(item.name)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
