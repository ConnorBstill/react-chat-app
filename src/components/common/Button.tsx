import React from 'react';

interface ButtonProps {
  children: any;
  onClick: any;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  const buttonStyles = {
    width: '100%',
    height: 42
  }

  return (
    <button onClick={() => onClick()} style={buttonStyles}>{children}</button>
  );
}