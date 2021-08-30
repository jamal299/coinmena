import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import TrendingHome from './Trending/Home';
import TrendingRepos from './Trending/TrendingRepos';
import TrendingDevelopers from './Trending/TrendingDevelopers';
import './App.css';
const queryClient = new QueryClient();
function App() {
  let routes = (
    <Switch>
      <Redirect exact from='/' to='/trending' />
      <Route exact path='/trending'>
        <QueryClientProvider client={queryClient}>
          <TrendingRepos />
        </QueryClientProvider>
      </Route>
      <Route exact path='/trending/developers'>
        <QueryClientProvider client={queryClient}>
          <TrendingDevelopers />
        </QueryClientProvider>
      </Route>
    </Switch>
  );
  return (
    <div className=' bg-gray-900'>
      <TrendingHome />
      {routes}
    </div>
  );
}

export default App;
