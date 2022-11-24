import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import RegisterScreen from './pages/RegisterPage/RegisterPage';
import LoginScreen from './pages/LoginPage/LoginPage';
import MessagesPage from './pages/MessagesPage/MessagesPage';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/messages" element={<MessagesPage />}></Route>

        <Route path="/login" element={<LoginScreen />}></Route>

        <Route path="/" element={<RegisterScreen />}></Route>
      </Routes>
    </Router>
  )
}

export default App
