
import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



const style = {
    marginLeft: 20,
    fontSize: '16px',
};

export default class CardItem extends Component {


    constructor(props, context) {
        super(props, context);
        
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        
        this.state = {

            _id: this.props._id,
            regno: this.props.regno,
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            dob: this.props.dob,
            sex: this.props.sex,
            class: this.props.class
            
        };
    }
    
    
    handleEditButton(event) {
        event.preventDefault();

        const _idValue = this.state._id;
        const firstnameValue = this.state.firstname;
        const lastnameValue = this.state.lastname;
        const sexValue = this.state.sex;
        const dobValue = this.state.dob;
        const regnoValue = this.state.regno;;
        const classValue = this.state.class;
        
        this.props.handleEditButton(_idValue, firstnameValue, lastnameValue, 
            sexValue, dobValue, regnoValue, classValue);
     }
  
    
    handleDeleteButton(event) {
        event.preventDefault();

        const _idValue = this.state._id;
        const firstnameValue = this.state.firstname;
        const lastnameValue = this.state.lastname;
        const sexValue = this.state.sex;
        const dobValue = this.state.dob;
        const regnoValue = this.state.regno;;
        const classValue = this.state.class;
        
        this.props.handleDeleteButton(_idValue, firstnameValue, lastnameValue, 
            sexValue, dobValue, regnoValue, classValue);
    };

    render() {
        return (
            <Card>
                <CardTitle title={this.state.firstname + " " +
                 this.state.lastname} subtitle={this.state.regno} />
                <div style={style}>
                    <p>{this.state.sex} <br/>
                    {this.state.dob} <br/>
                    {this.state.class}</p>
                </div>

                <CardActions>
                    <FlatButton label="Edit" onClick={this.handleEditButton}/>
                    <FlatButton label="Delete" onClick={this.handleDeleteButton}/>
                </CardActions>
            </Card>
        );
    }
}
