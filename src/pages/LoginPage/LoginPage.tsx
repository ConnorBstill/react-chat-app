import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import AuthFormContainer from '../../components/AuthFormContainer';
import { Input, Button } from '../../components/common';

import { authenticateUser } from '../../ApiServices/AuthService';

import { InputChangeEvent } from '../../types/interfaces';

const LoginScreen = () => {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const { data, refetch, isRefetching } = useQuery(['authentication', loginForm], () => authenticateUser(loginForm), {
    enabled: false,
    refetchOnWindowFocus: false
  });
  const navigate = useNavigate();

  const handleFormChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;

    setLoginForm((prevForm: any) => { 
     return { ...prevForm, [name]: value }
    });
  }

  const handleLoginClick = async () => {
    console.log(isRefetching)
    const { data: loginResponse } = await refetch();
    if (!loginResponse.error && loginResponse.data.jwt) {
      navigate('/main/messages')
    }
  }

  return (
    <AuthFormContainer>
      <h1 className=''>Log In</h1>

      <Input onChange={(event: InputChangeEvent) => handleFormChange(event)} name='username' placeholder='Username' />
      <Input onChange={(event: InputChangeEvent) => handleFormChange(event)} type='password' name='password' placeholder='Password' />
      <Button onClick={() => handleLoginClick()} loading={isRefetching}>Log in</Button>

      <p>Don't have an account? <Link to='/'>Click here</Link></p>
    </AuthFormContainer>
  )
}

export default LoginScreen;
