import { Button } from '@material-ui/core';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';

export default function NavBar(props) {
  return (
    <div className='navbar'>
      <Button onClick={props.refresh}>
        <RefreshIcon fontSize='large' />
      </Button>
    </div>
  );
}
