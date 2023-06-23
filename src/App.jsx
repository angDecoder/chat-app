import React from 'react';
import { Route,Routes, } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Register from './components/Form/Register';
import Login from './components/Form/Login';
import User from './components/User/User';

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='user' element={<User />} />
      <Route path='/' element={<Layout />} />
    </Routes>
  )
}

export default App;