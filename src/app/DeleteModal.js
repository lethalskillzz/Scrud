import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { green800 } from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

const styles = {
    underlineStyle: {
        borderColor: green800,
    },

    floatingLabelFocusStyle: {
        color: green800,
    },

    customWidth: {
        width: '100%',
    },
}

export default class DeleteModal extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleDeleteButton = this.handleDeleteButton.bind(this);

        this.state = {
            open: this.props.open,
            
             _id: this.props._id,
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            regno: this.props.regno,
         };
    }

    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleDeleteButton(event) {
        event.preventDefault();

        const _idValue = this.state._id;
        const firstnameValue = this.state.firstname;
        const lastnameValue = this.state.lastname;
        const regnoValue = this.state.regno;
        
        const deleteValue =
        '_idValue='+_idValue+
         'firstnameValue='+firstnameValue+
        'lastnameValue='+lastnameValue+
        'regnoValue='+regnoValue;
         
        console.log(deleteValue);
        
        this.props.handleDeleteButton(deleteValue);
        this.setState({ open: false });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Delete"
                primary={true}
                disabled={false}
                onClick={this.handleDeleteButton}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Delete"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                
                <p>Are you sure you want to delete</p>
                <p>{this.state.firstname+" "+this.state.lastname}</p>
                   
                </Dialog>
            </div>
        );
    }
}