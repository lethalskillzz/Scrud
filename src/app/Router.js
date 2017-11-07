import React from 'react';
import {Router, browserHistory, Route} from 'react-router';
import { createBrowserHistory } from 'history';

import Main from './Main';
import Verify from './Verify';
import Success from './Success';
import Pending from './Pending';
import Failed from './Failed';


const AppRouter = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Main} />
        {/* <Route path="/home" component={Verify}/>
        <Route path="/success" component={Success}/>
        <Route path="/pending" component={Pending}/>
        <Route path="/failed" component={Failed}/> */}
      {/* </Route> */}
    </Router>
  );
};

export default AppRouter;