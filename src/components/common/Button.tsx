import React from 'react';

interface ButtonProps {
  children: any;
  onClick: any;
  type?: any;
  loading?: boolean;
}

export const Button = ({ children, onClick, type, loading }: ButtonProps) => {
  const buttonStyles = {
    width: '100%',
    height: 42,
    cursor: 'pointer'
  }

  return (
    <button onClick={() => onClick()} style={buttonStyles} type={type ? type : 'button'}>{loading ? 'Loading...' : children}</button>
  );
}