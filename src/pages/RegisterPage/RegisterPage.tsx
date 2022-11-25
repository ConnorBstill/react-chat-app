import React from 'react';

import { Input, Button } from '../../components/common'

import './RegisterPage.scss';

const RegisterScreen = () => {

  return (
    <div className='container'>
      <div className='content-container'>
        <h1 className=''>Log In</h1>

        {/* <div className='buttons-container'> */}
        <Input placeholder='Username' />
        <Input placeholder='Password' />
        <Input placeholder='Confirm password' />

        <Button onClick={() => console.log}>Register</Button>
        {/* </div> */}
      </div>
    </div>
  )
}

export default RegisterScreen;
