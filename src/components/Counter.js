import React, { Component } from 'react';

import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import MinusIcon from '@material-ui/icons/Remove';

export default class Counter extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <Button onClick={() => this.props.add()}>
          <AddIcon fontSize='large' />
        </Button>
        <Button onClick={() => this.props.substract()}>
          <MinusIcon fontSize='large' />
        </Button>
      </div>
    );
  }
}
