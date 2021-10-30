import * as React from 'react';
import Item from './base/item';
import Info from './info';
import Foto from './foto';
import Box from '@mui/material/Box';

export default function Profile(props) {
  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Item><Foto/></Item>
        <Item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}><Info/></Item>
      </Box>
    </div>
  );
}
