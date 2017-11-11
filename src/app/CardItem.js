
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
        
        this.state = {

        };
    }
    
    handleEditButton(event) {
        event.preventDefault();

        {this.props.sex} 
                    {this.props.dob} 
                    {this.props.class}
                    {this.props.name} {this.props.regno}
        const firstnameValue = this.refs.firstnameField.getValue();
        const lastnameValue = this.refs.lastnameField.getValue();
        const regnoValue = this.refs.regnoField.getValue();
        const classValue = this.refs.classField.getValue();
        const genderValue = this.state.value === 1 ? 'Male' : 'Female';

        this.props.handleEditButton(requestValue);
        this.setState({ value: this.state.value===1? 2:1 });
    }
  
    
    handleDelete = () => {
        this.setState({ value: this.state.value===1? 2:1 });
    };

    render() {
        return (
            <Card>
                <CardTitle title={this.props.name} subtitle={this.props.regno} />
                <div style={style}>
                    <p>{this.props.sex} <br/>
                    {this.props.dob} <br/>
                    {this.props.class}</p>
                </div>

                <CardActions>
                    <FlatButton label="Edit" onClick={this.handleEditButton}/>
                    <FlatButton label="Delete" onClick={this.handleDelete}/>
                </CardActions>
            </Card>
        );
    }
}
