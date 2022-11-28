import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Input, Button } from '../../components/common'

import './RegisterPage.scss';

const RegisterScreen = () => {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const passwordMatchErrorMsg = ';'
  
  function handleRegisterClick() {
    navigate('/messages');
  }

  return (
    <div className='container'>
      <div className='content-container'>
        <h1 className=''>Log In</h1>

        {/* <div className='buttons-container'> */}
        <Input placeholder='Username' />
        <Input type='password' placeholder='Password' />
        <Input type='password' placeholder='Confirm password' />

        <Button onClick={() => handleRegisterClick()} type='button'>Register</Button>
        {/* </div> */}
      </div>
    </div>
  )
}

export default RegisterScreen;
