import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import TrendingHome from './Trending/Home';
import TrendingRepos from './Trending/TrendingRepos';
import TrendingDevelopers from './Trending/TrendingDevelopers';
import './App.css';

function App() {
  let routes = (
    <Switch>
      <Redirect exact from='/' to='/trending' />
      <Route exact path='/trending'>
        <TrendingRepos />
      </Route>
      <Route exact path='/trending/developers'>
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
