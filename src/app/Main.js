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

import CardItem from './CardItem';
import AddModal from './AddModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

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
        _id: '1',
        regno: 'REG38576885',
        firstname: 'Safiya',
        lastname: 'Ibrahim',
        dob: '12/4/1999',
        sex: 'Female',
        class: 'class#'
    },
    {
        _id: '2',
        regno: 'REG48576884',
        firstname: 'Bola',
        lastname: 'Aina',
        dob: '12/4/1999',
        sex: 'Female',
        class: 'class#'
    },
    {
        _id: '3',
        regno: 'REG68576884',
        firstname: 'Yusuf',
        lastname: 'Saliu',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        _id: '4',
        regno: 'REG18576882',
        firstname: 'Keneth',
        lastname: 'Idoh',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        _id: '5',
        regno: 'REG28576889',
        firstname: 'Julie',
        lastname: 'Eze',
        dob: '12/4/1999',
        sex: 'Female',
        class: 'class#'
    },
    {
        _id: '6',
        regno: 'REG88576885',
        firstname: 'Olu',
        lastname: 'Makinde',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        _id: '7',
        regno: 'REG67576888',
        firstname: 'Samuel',
        lastname: 'Osita',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        _id: '8',
        regno: 'REG10576880',
        firstname: 'Jacob',
        lastname: 'Zuma',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        _id: '9',
        regno: 'REG25576885',
        firstname: 'Audu',
        lastname: 'Aliu',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    },
    {
        _id: '10',
        regno: 'REG66576889',
        firstname: 'Musa',
        lastname: 'Bature',
        dob: '12/4/1999',
        sex: 'Male',
        class: 'class#'
    }
];


export default class Main extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            addmodal: {
                show: false,
            },
            editmodal: {
                show: false,
            },
            deletemodal: {
                show: false,
            },
            response: {
                _id: '',
                regno: '',
                firstname: '',
                lastname: '',
                dob: '',
                sex: '',
                class: ''
            },

            edit_id: '',
            editfirstname: '',
            editlastname: '',
            editsex: '',
            editdob: '',
            editregno: '',
            editclass: '',

            regno: '',
            url: 'http://www.remitademo.net/remita/ecomm/',
        };
    }

    handleSubmitAdd(submitValue) {
        this.setState({
            addmodal: {
                show: false,
            }, function() {
            }
        });

    }

    handleSubmitEdit(editValue) {
        this.setState({
            editmodal: {
                show: false,
            }, function() {
            }
        });
    }

    
    handleSubmitDelete(deleteValue) {
        this.setState({
            deletemodal: {
                show: false,
            }, function() {
            }
        });
    }
    
    
    
    handleAdd = () => {

        this.setState({
            addmodal: {
                show: true,
            },
        }, function () {

        });
    }

    handleEdit(edit_id, editfirstname, editlastname,
        editsex, editdob, editregno, editclass) {
        this.setState({
            editmodal: {
                show: true,
            },

            edit_id: edit_id,
            editfirstname: editfirstname,
            editlastname: editlastname,
            editsex: editsex,
            editdob: editdob,
            editregno: editregno,
            editclass: editclass,

            function() {
            }
        });
    }
    
    
    handleDelete(edit_id, editfirstname, editlastname,
        editsex, editdob, editregno, editclass) {
        this.setState({
            deletemodal: {
                show: true,
            },

            edit_id: edit_id,
            editfirstname: editfirstname,
            editlastname: editlastname,
            editsex: editsex,
            editdob: editdob,
            editregno: editregno,
            editclass: editclass,

            function() {
            }
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
                                <CardItem key={tile._id}
                                    _id={tile._id} regno={tile.regno}
                                    firstname={tile.firstname} lastname={tile.lastname}
                                    dob={tile.dob} sex={tile.sex} class={tile.class}
                                    handleEditButton={this.handleEdit}
                                    handleDeleteButton={this.handleDelete} />
                            ))}

                        </GridList>
                        <FloatingActionButton onClick={this.handleAdd}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>

                    {this.state.addmodal.show ? <AddModal open={true} handleSubmitButton={this.handleSubmitAdd} /> : ''}
                    {this.state.editmodal.show ? <EditModal open={true}
                        _id={this.state.edit_id} 
                        firstname={this.state.editfirstname}
                        lastname={this.state.editlastname}
                        sex={this.state.editsex}
                        dob={this.state.editdob}
                        regno={this.state.editregno}
                        class={this.state.editclass}
                        handleSubmitButton={this.handleSubmitEdit} /> : ''}
                        
                        {this.state.deletemodal.show ? <DeleteModal open={true}
                        _id={this.state.edit_id} 
                        firstname={this.state.editfirstname}
                        lastname={this.state.editlastname}
                        regno={this.state.editregno}
                        handleDeleteButton={this.handleSubmitDelete} /> : ''}

                </div>

            </MuiThemeProvider>
        );
    }
}

