import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';

export default function NavBar(props) {
  return (
    <div className='navbar'>
      <RefreshIcon fontSize='large' onClick={props.refresh} />
    </div>
  );
}
