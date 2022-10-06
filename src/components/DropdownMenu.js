import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '../assets/img/chevrondown';
import GlobeImage from '../assets/img/earth-globe.png';
import i18next from 'i18next';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DropdownMenu() {
  const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'العربية',
      country_code: 'sa',
    },
  ];
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center items-center rounded-full px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
          <img src={GlobeImage} alt='' className='w-8 h-8' />
          <div className='w-8 h-8 hidden md:flex justify-center items-center'>
            <ChevronDownIcon />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1 flex flex-col'>
            {languages.map(({ code, name, country_code }) => (
              <Menu.Item
                key={country_code}
                onClick={() => i18next.changeLanguage(code)}
              >
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? ' bg-gray-100 text-gray-900' : 'text-gray-700',
                      'px-4 py-2 text-sm flex justify-between items-center'
                    )}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code}`}
                    ></span>
                    {name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
          {/* <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Archive
                </a>
              )}
            </Menu.Item>
          </div> */}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
