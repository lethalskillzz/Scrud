import React from 'react';
import {Router, browserHistory, Route} from 'react-router';
import { createBrowserHistory } from 'history';

import Main from './Main';

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