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

export default class NewModal extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmitButton = this.handleSubmitButton.bind(this);

        this.state = {
            open: this.props.open,
            value: 1,
            dob: '',
        };
    }
    
    
    setDate(event, date){
        var dateUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        var dobUTC = dateUTC.toISOString().slice(0, 10);
        this.setState({ dob: dobUTC });
    }

    handleChange = () => {
        this.setState({ value: this.state.value===1? 2:1 });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmitButton(event) {
        event.preventDefault();

        const firstnameValue = this.refs.firstnameField.getValue();
        const lastnameValue = this.refs.lastnameField.getValue();
        const sexValue = this.state.value===1? 'Male':'Female';
        const dobValue = this.state.dob;
        const regnoValue = this.refs.regnoField.getValue();
        const classValue = this.refs.classField.getValue();
        
        const requestValue = 
        'firstname='+firstnameValue+ '&'+
        'lastname='+lastnameValue+ '&'+
        'sex='+sexValue+ '&'+
        'dob='+dobValue+ '&'+
        'regno='+regnoValue+ '&'+
        'class='+classValue
         
        console.log(requestValue);
        
        this.props.handleSubmitButton(requestValue);
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
                    <TextField style={styles.customWidth}
                        floatingLabelText="Firstname"
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        ref="firstnameField"
                    />

                    <TextField style={styles.customWidth}
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
                    
                    <DatePicker textFieldStyle={styles.customWidth} 
                    hintText="Date Of Birth"
                    onChange={(event, date) => this.setDate(event,date)}/>

                    <TextField style={styles.customWidth}
                        floatingLabelText="Registration Number"
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        ref="regnoField"
                    />
                    
                    <TextField style={styles.customWidth}
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