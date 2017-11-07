import React, { Component } from 'react';
import { blue50, green800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classNames from 'classnames';
import { connect } from 'react-redux'

import Verify from './Verify';


const styles = {

  container: {
  },

};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green800,
    accent1Color: blue50,
  },
});

class Main extends Component {

  render() {

    return (

      <MuiThemeProvider muiTheme={muiTheme}>

        <div>

          <div className='row' style={styles.container}>

            <Verify/>
            
          </div>

        </div>

      </MuiThemeProvider>
    );
  }
}

export default Main;