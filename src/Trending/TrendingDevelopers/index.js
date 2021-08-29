import React, { useEffect, useState } from 'react';
import githubTrends from 'github-trends-api';

function TrendingDevelopers() {
  const [developers, setDevelopers] = useState([]);
  useEffect(() => {
    // githubTrends({ section: 'developers', since: 'weekly' })
    //   .then((result) => {
    //     console.log(result, 'areear area');
    //   })
    //   .catch((error) => {
    //     console.log(error, 'asdasdas');
    //   });
    const getDevelopers = async () => {
      const response = await fetch(
        'https://gh-trending-api.herokuapp.com/developers'
      );
      let developers = (await response.json()) || [];

      setDevelopers(developers);
    };

    getDevelopers();
  }, []);
  console.log(developers, 'sada');
  return (
    <div className='min-h-screen'>
      <p class='text-xl py-4 text-gray-400'>Trending Developers content</p>
    </div>
  );
}

export default TrendingDevelopers;
