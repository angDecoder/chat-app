import React,{ useState,useEffect } from 'react'
import './Layout.css';
import Chats from '../Chats/Chats';
import ContactList from '../Contacts/ContactList';

function Layout() {

  const [currentChat, setCurrentChat] = useState('nothing');

  return (
    <div id='Layout'>
      <ContactList  />
      <Chats currentChat={currentChat} />
    </div>
  )
}

export default Layout