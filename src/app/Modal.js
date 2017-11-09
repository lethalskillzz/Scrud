import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { green800 } from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    underlineStyle: {
        borderColor: green800,
    },

    floatingLabelFocusStyle: {
        color: green800,
    },

    textField: {
        width: '100%',
    },

    customWidth: {
        width: '100%',
    },
}

export default class Modal extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmitButton = this.handleSubmitButton.bind(this);

        this.state = {
            open: this.props.open,
            value: 1,
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
                    title="Add New"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <TextField style={styles.textField}
                        floatingLabelText="Firstname"
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        ref="firstnameField"
                    />

                    <TextField style={styles.textField}
                        floatingLabelText="Lastname"
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        ref="lastnameField"
                    />

                    <SelectField
                        floatingLabelText="Sex"
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={styles.customWidth}
                    >
                        <MenuItem value={1} primaryText="Male" />
                        <MenuItem value={2} primaryText="Female" />
                       
                    </SelectField>

                    <TextField style={styles.textField}
                        floatingLabelText="Registration Number"
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        ref="regnoField"
                    />
                    
                    <TextField style={styles.textField}
                        floatingLabelText="Class"
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        ref="classField"
                    />
                </Dialog>
            </div>
        );
    }
}