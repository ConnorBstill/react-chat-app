// Libraries
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from 'react-query';

// Components
import AuthFormContainer from '../../components/AuthFormContainer';
import { Input, Button } from '../../components/common';

// Services
import { registerUser } from '../../ApiServices/AuthService';
import { setJwt } from '../../ApiServices/JwtService';

// Misc
import { InputChangeEvent } from '../../types/interfaces';
import './RegisterPage.scss';

const RegisterScreen = () => {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const { username, password, confirmPassword } = registerForm;

  const { refetch, isRefetching } = useQuery(['authentication', registerForm], () => registerUser({ username, password }), {
    enabled: false,
    refetchOnWindowFocus: false
  });
  const navigate = useNavigate();

  const passwordMatchMsg = password !== confirmPassword ? 'Passwords must match' : '';
  
  const handleRegisterClick = async () => {
    const { data: registerResponse } = await refetch();
    console.log('registerResponse', registerResponse);

    if (registerResponse?.data && !registerResponse?.error) {
      setJwt(registerResponse.data.jwt)
      navigate('/main/messages');
    }
  }

  const handleFormChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;

    setRegisterForm((prevForm: any) => { 
     return { ...prevForm, [name]: value }
    });
  }

  return (
    <AuthFormContainer>
      <h1 className=''>Register</h1>

      <Input onChange={(event: InputChangeEvent) => handleFormChange(event)} name='username' placeholder='Username' />
      <Input onChange={(event: InputChangeEvent) => handleFormChange(event)} type='password' name='password' placeholder='Password' />
      <Input onChange={(event: InputChangeEvent) => handleFormChange(event)} type='password' name='confirmPassword' placeholder='Confirm password' />

      <Button onClick={() => handleRegisterClick()} loading={isRefetching} type='button'>Register</Button>

      <p className='password-error-text'>{passwordMatchMsg}</p>
      <p>Already have an account? <Link to='/login'>Click here</Link></p>
    </AuthFormContainer>
  )
}

export default RegisterScreen;
