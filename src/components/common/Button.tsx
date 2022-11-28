import React from 'react';

interface ButtonProps {
  children: any;
  onClick: any;
  type?: any;
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
  const buttonStyles = {
    width: '100%',
    height: 42
  }

  return (
    <button onClick={() => onClick()} style={buttonStyles} type={type ? type : 'button'}>{children}</button>
  );
}