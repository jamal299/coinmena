import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useLocation, Redirect } from 'react-router-dom';
import TrendingHome from './Trending/Home';
import TrendingRepos from './Trending/TrendingRepos';
import TrendingDevelopers from './Trending/TrendingDevelopers';
import './App.css';

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log('Location changed', location);
    if (location.pathname !== '/trending/developers') {
      <Redirect to='/trending' />;
    }
  }, [location]);
  let routes = (
    <Switch>
      <Route path='/'>
        <TrendingRepos />
      </Route>
      <Route path='/trending'>
        <TrendingRepos />
      </Route>
      <Route path='/trending/developers'>
        <TrendingDevelopers />
      </Route>
    </Switch>
  );
  return (
    <div className='App bg-gray-900'>
      <TrendingHome />
      {routes}
    </div>
  );
}

export default App;
