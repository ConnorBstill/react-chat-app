import React, { useState } from 'react';

const AuthFormContainer = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='container gradient-background'>
      <div className='content-container'>
        {children}
      </div>
    </div>
  );
}

export default AuthFormContainer;
