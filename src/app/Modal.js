import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

 
export default class Modal extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmitButton = this.handleSubmitButton.bind(this);

        this.state = {
            open: this.props.open,
        };
        
    
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmitButton(event) {
        event.preventDefault();

        const textInputValue = 'xxxxxx';
        this.props.handleSubmitButton(textInputValue);
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
                label="Submit"
                primary={true}
                disabled={false}
                onClick={this.handleSubmitButton}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    Only actions can close this dialog.
        </Dialog>
            </div>
        );
    }
}