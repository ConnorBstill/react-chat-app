import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";

import AuthFormContainer from '../../components/AuthFormContainer';
import { Input, Button } from '../../components/common';

import { ChangeEvent } from '../../types/interfaces';

import './RegisterPage.scss';

// interface State {
//   username: '',
//     password: '',
//     confirmPassword: ''
// }

const RegisterScreen = () => {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate();
  const { password, confirmPassword } = registerForm
  const passwordMatchErrorMsg = password !== confirmPassword ? 'Passwords must match' : '';
  
  const handleRegisterClick = () => {
    navigate('/messages');
  }

  const handleFormChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setRegisterForm((prevForm: any) => { 
     return { ...prevForm, [name]: value }
    });
  }

  return (
    <AuthFormContainer>
      <h1 className=''>Register</h1>

      <Input onChange={(event: ChangeEvent) => handleFormChange(event)} placeholder='Username' />
      <Input onChange={(event: ChangeEvent) => handleFormChange(event)} type='password' placeholder='Password' />
      <Input onChange={(event: ChangeEvent) => handleFormChange(event)} type='password' placeholder='Confirm password' />

      <Button onClick={() => handleRegisterClick()} type='button'>Register</Button>

      <p className='password-error-text'>{passwordMatchErrorMsg}</p>
      <p>Already have an account? <Link to='/login'>Click here</Link></p>
    </AuthFormContainer>
  )
}

export default RegisterScreen;
