import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
 };


const FAB = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default FAB;