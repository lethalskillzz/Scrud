import React from 'react';
import {Router, browserHistory, Route} from 'react-router';
import { createBrowserHistory } from 'history';

import Main from './Main';
import Alert from './Alert';

const AppRouter = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Main} 
         >
       </Route> 
    </Router>
  );
};

export default AppRouter;