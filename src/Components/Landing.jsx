import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

import './Landing.css';
function Landing() {
  return (
    <div className='Landing' style={{ alignItems: 'center' }}>
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: 'black',
          borderBottom: '5px solid white',
          alignContent: 'center',
          height: '100px',
        }}
      >
        <h1 style={{ marginLeft: '490px', marginTop: '60px' }}>GameSpace</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '150px',
            marginTop: '45px',
            
          }}
        >
          <NavLink
            to='/signin'
            style={{ paddingRight: '10px', textDecoration: 'none' }}
          >
            <h2> SignIn</h2>
          </NavLink>
          <NavLink to='/signup' style={{ textDecoration: 'none' }}>
            <h2>SignUp</h2>
          </NavLink>
        </div>
      </header>
      <div
        style={{
          marginTop: '200px',
          marginLeft: '490px',
          width: ' 500px',
          height:'300px',
          border: '10px solid red',
          alignContent: 'center',
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          aut. In adipisci, consectetur esse odit a quos omnis dignissimos
          accusamus dolores perspiciatis, porro non ad error ab praesentium
          impedit tempore.
        </p>
        <NavLink to='/signup'>
          <Button
            variant='contained'
            style={{ textDecoration: 'none', marginLeft: '200px' }}
          >
            Register{' '}
          </Button>
        </NavLink>
        <p style={{ marginLeft: '180px' }}>Join the experience!</p>
      </div>
    </div>
  );
}

export default Landing;
