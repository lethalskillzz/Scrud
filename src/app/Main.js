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
import Snackbar from 'material-ui/Snackbar';
import axios from 'axios';

import CardItem from './CardItem';
import Refresh from './Refresh';
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




export default class Main extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {

            refreshIndicator: {
                show: false,
            },

            addmodal: {
                show: false,
            },

            editmodal: {
                show: false,
            },

            deletemodal: {
                show: false,
            },

            students: [],
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

            autoHideDuration: 4000,
            message: 'Event added to your calendar',
            snackopen: false,
        };
    }

    componentDidMount() {
        this.loadStudent();
    }

    loadStudent() {

        this.toggleRefreshIndicator(true);
        axios.get('http://localhost:3000/students').then((response) => {
            this.toggleRefreshIndicator(false);
            console.log("response", response);

            if (response.data != null) {

                this.setState({
                    students: response.data,
                    snackopen: true,
                    message: 'Students Resource loaded sucessfully',
                }, function () {
                });

            } else {

            }
        }).catch((error) => {
            this.toggleRefreshIndicator(false);
            console.log(error);
            // if (error.response.status === 500) {

            // }
        });
    }


    toggleRefreshIndicator(state) {
        this.setState({
            refreshIndicator: {
                show: state,
            },
        }, function () {
        });
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


    handleRequestClose = () => {
        this.setState({
            snackopen: false,
        });
    };

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
                            <Subheader>Student Resource</Subheader>
                            {this.state.students.map((student) => (
                                <CardItem key={student._id}
                                    _id={student._id} regno={student.regno}
                                    firstname={student.firstname} lastname={student.lastname}
                                    dob={student.dob} sex={student.sex} class={student.class}
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

                    {this.state.refreshIndicator.show ? <Refresh /> : ''}

                    <Snackbar
                        open={this.state.snackopen}
                        message={this.state.message}
                         autoHideDuration={this.state.autoHideDuration}
                        onRequestClose={this.handleRequestClose}
                    />
                </div>

            </MuiThemeProvider>
        );
    }
}

