import { Button } from '@material-ui/core';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';

export default function NavBar() {
  return (
    <div className='navbar'>
      <Button>
        <RefreshIcon fontSize='large' />
      </Button>
    </div>
  );
}
