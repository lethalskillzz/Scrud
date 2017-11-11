import React from 'react';
import {Router, browserHistory, Switch, Route} from 'react-router';
 
import { createBrowserHistory } from 'history';

import Main from './Main';
import Refresh from './Refresh';

const AppRouter = () => {
  return (
    <Router history={createBrowserHistory()}>
    <Switch>
      <Route path="/" component={Main} />
      <Route path="/Refresh" component={Refresh} />
      </Switch>
    </Router>
  );
};

export default AppRouter;