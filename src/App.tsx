import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// State management
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'jotai';

// Components
import RegisterScreen from './pages/RegisterPage/RegisterPage';
import LoginScreen from './pages/LoginPage/LoginPage';
import MessagesPage from './pages/MessagesPage/MessagesPage';

import '../colors.scss';
import './App.scss';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <div className='app-container'>
          <Router>
            <Routes>
              <Route path="/messages" element={<MessagesPage />}></Route>

              <Route path="/login" element={<LoginScreen />}></Route>

              <Route path="/" element={<RegisterScreen />}></Route>
            </Routes>
          </Router>
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
