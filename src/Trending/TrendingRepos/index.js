import React, { useEffect, useState } from 'react';

function TrendingRepos() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    const getRepositories = async () => {
      const response = await fetch(
        'https://private-anon-38c5167dc0-githubtrendingapi.apiary-mock.com/repositories'
      );
      let repositories = (await response.json()) || [];
      setRepositories(repositories);
    };
    getRepositories();
  }, []);

  return (
    <div className='min-h-screen pb-10'>
      <div className='max-w-7xl mx-auto bg-gray-900'>
        {repositories &&
          repositories.map((repository) => (
            <div className='grid grid-cols-12 border border-gray-800 py-2 px-2 '>
              <p className='col-span-6 text-xl py-4 text-blue-500'>
                {repository.author} / {repository.name}
              </p>
              <p className='col-start-12 col-end-12 py-4 text-right text-gray-400'>
                <button className='bg-gray-800 hover:text-white hover:bg-gray-700 text-grey-darkest font-normal py-2 px-4 rounded inline-flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1'
                      d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                    />
                  </svg>
                  <span className='ml-1'> Star</span>
                </button>
              </p>
              <p className='col-start-1 col-end-10 text-gray-400'>
                {repository.description}
              </p>
              <p className='col-start-1 col-span-3 py-3 text-sm text-gray-400 flex justify-between md:justify-between'>
                <p>{repository.language}</p>
                <p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline h-4 w-4 mr-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                    />
                  </svg>
                  {repository.stars}
                </p>
                <p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline h-3 w-3 mr-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'
                    />
                  </svg>
                  {repository.forks}
                </p>
              </p>
              <p className='col-start-4 col-end-9 text-sm text-gray-400 py-3 ml-2 flex items-center'>
                <p className='mr-2'>Built By:</p>
                {repository.builtBy.map((builder) => (
                  <div className='relative w-4 h-4 flex'>
                    <img
                      className='rounded-full border border-gray-100 shadow-sm '
                      src={builder.avatar}
                      alt='user image'
                    />
                  </div>
                ))}
              </p>
              <p className='flex text-xs col-start-12 col-end-12 text-gray-400 items-center '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                  />
                </svg>
                <p className='ml-2'>
                  {repository.currentPeriodStars} stars today
                </p>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TrendingRepos;
