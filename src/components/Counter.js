import React, { Component } from 'react';

import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import MinusIcon from '@material-ui/icons/Remove';

export default class Counter extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <Button>
          <AddIcon fontSize='large' />
        </Button>
        <Button>
          <MinusIcon fontSize='large' />
        </Button>
      </div>
    );
  }
}
