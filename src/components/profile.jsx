import React, { useState, useEffect } from 'react';
import Item from './base/item';
import Info from './info';
import Foto from './foto';
import Box from '@mui/material/Box';
import { useFetch } from '../hooks/useFetch';

export default function Profile(props) {
  const { data: user } = useFetch('someUrl');

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const onNameChange = (event) => setName(event.target.value);
  const onSurnameChange = (event) => setSurname(event.target.value);

  useEffect(() => console.log(`name: ${name}, surname: ${surname}`));

  useEffect(() => {
    if (user) {
      setName(user.name);
      setSurname(user.surname);
    }
  }, [user]);

  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Item><Foto/></Item>
        <Item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <Info name={name} surname={surname} onNameChange={onNameChange} onSurnameChange={onSurnameChange} />
        </Item>
      </Box>
    </div>
  );
}

// Before version 16.8
// export default class Profile extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//       surname: ''
//     }
//   }

//   componentDidMount() {
//     // fetch server
//     this.setState({
//       name: 'John',
//       surname: 'Doe'
//     });
//   }

//   onChangeHandler(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   render() {
//     return (
//       <div style={{ width: '100%' }}>
//         <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
//           <Item><Foto/></Item>
//           <Item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
//             <Info name={this.state.name} surname={this.state.surname} onChangeHandler={this.onChangeHandler.bind(this)} />
//           </Item>
//         </Box>
//       </div>
//     );
//   }
// }