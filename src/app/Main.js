import React, { Component } from 'react';
import { blue50, green800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classNames from 'classnames';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import Card from './Card'; 
import FAB from './FAB';
 
const styles = {

    container: {
        display: '-webkit-flex',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        minHeight: '100vh'
    },

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 1000,
        height: 750,
        overflowY: 'auto',
    },
};

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green800,
        accent1Color: blue50,
    },
});


const tilesData = [
    {
        id: '1',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        id: '2',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        id: '3',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        id: '4',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        id: '5',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        id: '6',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        id: '7',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        id: '8',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        id: '9',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        id: '10',
        title: 'Morning',
        author: 'fancycrave1',
    }
];


class Main extends Component {

    render() {

        return (

            <MuiThemeProvider muiTheme={muiTheme}>

                <div className='col-md-12' style={styles.container} >

                    <div className='row' style={styles.container}>

                        <div style={styles.root}>
                            <GridList
                                cellHeight={'auto'}
                                cols={3}
                                style={styles.gridList}>
                                <Subheader>Student</Subheader>
                                {tilesData.map((tile) => (

                                    <Card key={tile.id}/>
                                   
                                ))}
                            </GridList>
                        </div>

                        
                    </div>

                    <FAB/>
                          
                </div>

            </MuiThemeProvider>
        );
    }
}

export default Main;