import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import ProfilesPage from './containers/ProfilesPage';
import IWADsPage from './containers/IWADsPage';
import EnginesPage from './containers/EnginesPage';
import SettingsPage from './containers/SettingsPage';

import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProfilesPage} />
    <Route path="/profiles" component={ProfilesPage} />
    <Route path="/iwads" component={IWADsPage} />
    <Route path="/engines" component={EnginesPage} />
    <Route path="/settings" component={SettingsPage} />

    <Route path="/counter" component={CounterPage} />
  </Route>
);
