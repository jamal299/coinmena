import React, { useEffect, useState } from 'react';

function TrendingDevelopers() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const getDevelopers = async () => {
      const response = await fetch(
        'https://private-anon-38c5167dc0-githubtrendingapi.apiary-mock.com/developers'
      );
      let developers = (await response.json()) || [];
      setDevelopers(developers);
    };
    getDevelopers();
  }, []);
  console.log(developers, 'sada');
  return (
    <div className='min-h-screen pb-10'>
      <div className='max-w-7xl mx-auto bg-gray-900'>
        {developers &&
          developers.map((developer, index) => (
            <div className='grid grid-cols-12 border border-gray-800 py-2 px-2 '>
              <p class='col-span-1 py-4 text-gray-400'>
                <p className='inline align-top text-xs text-gray-400'>
                  {index + 1}
                </p>
                <img
                  className='inline object-cover w-12 h-12 ml-2 rounded-full'
                  src={developer.avatar}
                  alt='Developer image'
                />
              </p>
              <p className=' col-span-3 text-xl py-4 text-blue-500'>
                {developer.name}
                <p className=' text-sm text-gray-300'>{developer.username}</p>
              </p>
              <p className='col-span-4 py-4 text-gray-400'>
                <p className='text-sm align-middle'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3 w-3 inline'
                    viewBox='0 0 20 20'
                    fill='orange'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  <p className='inline uppercase font-bold text-xs ml-1'>
                    Popular Repo
                  </p>
                </p>
                <p className='text-sm text-blue-500'>{developer.repo.name}</p>
                <p className='text-sm'>{developer.repo.description}</p>
              </p>
              <p class='col-start-11  py-4 text-right text-gray-400'>
                <button className='bg-gray-800 hover:text-white hover:bg-gray-700 text-grey-darkest font-sm py-2 px-4 rounded inline-flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='pink'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1'
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                  <span className='ml-1'> Sponsor</span>
                </button>
              </p>
              <p class='col-start-12 px-4 py-4 text-right text-gray-400'>
                <button className='ml-1 bg-gray-800 hover:text-white hover:bg-gray-700 text-grey-darkest font-xs py-2 px-4 rounded inline-flex items-center'>
                  <span className='ml-1'> Follow</span>
                </button>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TrendingDevelopers;
