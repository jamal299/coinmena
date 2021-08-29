import { useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  {
    name: 'Repositories',
    href: '/trending',
    current: false,
    path: '/trending',
  },
  {
    name: 'Developers',
    href: '/trending',
    current: false,
    path: '/trending/developers',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function TrendingHome() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <p class='text-5xl pt-10  text-gray-400 font-semibold'>Trending</p>
      <p class='text-xl py-4 text-gray-400'>
        See what the GitHub community is most excited about today
      </p>
      <Disclosure as='nav' className='mt-8'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-gray-800'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? <span> xIcon</span> : <span>Menu Icon</span>}
                  </Disclosure.Button>
                </div>
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <Link
                          to={item.path}
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.path === pathname
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.path === pathname
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.path === pathname ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default TrendingHome;
