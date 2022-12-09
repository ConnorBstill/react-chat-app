import React from 'react';
import { useNavigate } from 'react-router-dom';

import { clearJwt } from '../../ApiServices/JwtService';

import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    clearJwt();
    navigate('/login');
  }

  return (
    <nav className='navbar-container'>
      <button onClick={() => handleLogoutClick()} className='logout-button'>Log Out</button>
    </nav>
  )
}

export default Navbar;
