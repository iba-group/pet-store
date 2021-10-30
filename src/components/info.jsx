import React from 'react';
import TextField from '@mui/material/TextField';

export default function Info() {
  return(
    <>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Surname" variant="outlined" />
    </>
  );
}
