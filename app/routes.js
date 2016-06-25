import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Profiles from './containers/Profiles';
import IWADs from './containers/IWADs';
import Engines from './containers/Engines';
import Settings from './containers/Settings';

import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Profiles} />
    <Route path="/profiles" component={Profiles} />
    <Route path="/iwads" component={IWADs} />
    <Route path="/engines" component={Engines} />
    <Route path="/settings" component={Settings} />

    <Route path="/counter" component={CounterPage} />
  </Route>
);
