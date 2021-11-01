import React from 'react';
import TextField from '@mui/material/TextField';

export default function Info(props) {
  return(
    <>
      <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={props.name} onChange={props.onNameChange} />
      <TextField id="outlined-basic" label="Surname" variant="outlined" name="surname" value={props.surname} onChange={props.onSurnameChange} />
    </>
  );
}
