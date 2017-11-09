import React, { Component } from 'react';
import { blue50, green800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import Card from './Card';
import Modal from './Modal';

const styles = {

    container: {
        display: '-webkit-flex',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        minHeight: '100vh'
    },


    gridList: {
        width: '100%',
        height: '100%',
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
        regno: 'REG38576885',
        name: 'Safiya Ibrahim',
        dob: '12/4/1999',
        sex: 'Female',
        class: 'class#'
    },
    {
        id: '2',
        regno: 'REG48576884',
        name: 'Bola Aina',
        dob: '12/4/1999',
        sex: 'Female',
        class: 'class#'
    },
    {
        id: '3',
        regno: 'REG68576884',
        name: 'Yusuf Saliu',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        id: '4',
        regno: 'REG18576882',
        name: 'Keneth Idoh',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        id: '5',
        regno: 'REG28576889',
        name: 'Julie Eze',
        dob: '12/4/1999',
        sex: 'Female',
        class: 'class#'
    },
    {
        id: '6',
        regno: 'REG88576885',
        name: 'Olu Makinde',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        id: '7',
        regno: 'REG67576888',
        name: 'Samuel Osita',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        id: '8',
        regno: 'REG10576880',
        name: 'Jacob Zuma',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        id: '9',
        regno: 'REG25576885',
        name: 'Audu Aliu',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        id: '10',
        regno: 'REG66576889',
        name: 'Musa Bature',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    }
];


class Main extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            modal: {
                show: false,
            },
            response: {
                _id: '',
                regno: '',
                name: '',
                dob: '',
                sex: '',
                class: ''
            },
            _id: '',
            url: 'http://www.remitademo.net/remita/ecomm/',
        };
    }

    handleSubmit(textInputValue) {

    }
    handleEdit(textInputValue) {

    }
    handleDelete(textInputValue) {

    }

    handleAddClick = () => {

        this.setState({
            modal: {
                show: true,
            },
        }, function () {

        });
    }


    render() {

        return (

            <MuiThemeProvider muiTheme={muiTheme}>

                <div>
                    <AppBar
                        title="SCRUD"
                        ClassNameRight="miconuidocs-icon-navigation-expand-more"
                    />


                    <div className='col-md-12' style={styles.container} >

                        <GridList
                            cellHeight={'auto'}
                            cols={4}
                            style={styles.gridList}>
                            <Subheader>Student</Subheader>
                            {tilesData.map((tile) => (
                                <Card key={tile.id} />
                            ))}

                        </GridList>
                        <FloatingActionButton onClick={this.handleAddClick}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>

                    {this.state.modal.show ? <Modal handleSubmitButton={this.handleSubmit} /> : ''}

                </div>

            </MuiThemeProvider>
        );
    }
}

export default Main;