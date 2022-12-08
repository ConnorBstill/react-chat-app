import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';

// State management
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'jotai';

// Components
import RegisterScreen from './pages/RegisterPage/RegisterPage';
import LoginScreen from './pages/LoginPage/LoginPage';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import Navbar from './components/Navbar/Navbar';

import '../colors.scss';
import './App.scss';

const queryClient = new QueryClient();

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const App = () => {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <div className='app-container'>
          <BrowserRouter>
            <Routes>
              <Route path="/main" element={<Main />}>
                <Route path="messages" element={<MessagesPage />}></Route>
              </Route>

              <Route path="/login" element={<LoginScreen />}></Route>

              <Route path="/" element={<RegisterScreen />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </Provider>
  );
}



// WithNav.js (Stand-alone Functional Component)
// import React from 'react';
// import NavBar from 'your navbar location';
// import { Outlet } from 'react-router';

// export default () => {
//   return (
//     <>
//       <NavBar />
//       <Outlet />
//     </>
//   );
// };

export default App;
