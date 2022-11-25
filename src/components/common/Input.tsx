import React from 'react';

interface InputProps {
  placeholder: string;
  style?: any;
}

export const Input = ({ placeholder, style }: InputProps) => {
  const inputStyle = {
    borderRadius: 5,
    height: 30,
    width: '100%',
    borderColor: '#212121',
    padding: 4
  }

  return (
    <input style={{ ...inputStyle, ...style }} placeholder={placeholder} />
  )
}
