import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card>
    
     
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
    
    XXXXXX
    XXXXXXXXX 
    XXXXXX
    </CardText>
    
    
    <CardActions>
      <FlatButton label="Edit" />
      <FlatButton label="Delete" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;