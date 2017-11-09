import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
    marginLeft: 20,
};

export default class CardItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    render() {
        return ( <
            Card >
            <
            CardTitle title = { this.props.name }
            subtitle = { this.props.regno }
            /> <
            div style = { style } >
            <
            p > { this.props.sex } < /p> <
            p > { this.props.dob } < /p> <
            p > { this.props.class } < /p> <
            /div>

            <
            CardActions >
            <
            FlatButton label = "Edit" / >
            <
            FlatButton label = "Delete" / >
            <
            /CardActions> <
            /Card>
        );
    }
}