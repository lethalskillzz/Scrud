
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
        this.state = {

        };
    }
    
    handleEdit = () => {
        this.setState({ value: this.state.value===1? 2:1 });
    };
    
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
                    <FlatButton label="Edit" onClick={this.handleEdit}/>
                    <FlatButton label="Delete" onClick={this.handleDelete}/>
                </CardActions>
            </Card>
        );
    }
}
