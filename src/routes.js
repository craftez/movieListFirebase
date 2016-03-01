import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ListMovies from './components/ListMovies';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={ListMovies} />
  </Route>
);

export default routes;
