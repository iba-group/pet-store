import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

interface InfoProps {
  name: string;
  surname: string;
  onNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSurnameChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Info(props: InfoProps) {
  return(
    <>
      <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={props.name} onChange={props.onNameChange} />
      <TextField id="outlined-basic" label="Surname" variant="outlined" name="surname" value={props.surname} onChange={props.onSurnameChange} />
    </>
  );
}

// PropTypes example:
// Info.propTypes = {
//   name: PropTypes.string,
//   surname: PropTypes.string,
//   onNameChange: PropTypes.func,
//   onSurnameChange: PropTypes.func
// }