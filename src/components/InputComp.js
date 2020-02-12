import React, { Component } from 'react';

import { TextField } from '@material-ui/core';

export default class InputComp extends Component {
  render() {
    return (
      <div className='input'>
        <TextField
          label='Max set to'
          onChange={e => this.props.setMax(e.target.value)}
          value={this.props.max}
        />
      </div>
    );
  }
}
