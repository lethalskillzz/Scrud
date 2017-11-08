import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import AppRouter from './Router';


// Needed for onTouchTap
injectTapEventPlugin();

// Render the main app react component into the app div.
render( <AppRouter/> , document.getElementById('app'));

