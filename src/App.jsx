import React from 'react';
import { Route,Routes, } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Register from './components/Form/Register';
import Login from './components/Form/Login';
import User from './components/User/User';
import Chats from './components/Chats/Chats';

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='user' element={<User />} />
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Chats />} />
        <Route path='/chat/:id' element={<Chats />} />
      </Route>
    </Routes>
  )
}

export default App;