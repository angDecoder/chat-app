import React, { useEffect, useState } from 'react';
import './Chats.css';
import { useSelector } from 'react-redux';
import user from '../../assets/user.png';
import leftarrow from '../../assets/left_arrow.svg';
import send from '../../assets/send.svg';
import Chat from './Chat.jsx';

function Chats({ currentChat }) {

  const {
    id,
    name,
    totalMessages,
    receivedMessages,
    image,
    messagesByDate
  } = useSelector(state => state.chat.chatById['rahul']);

  useEffect(() => {
    const textrea = document.querySelector('#chat_type_message > textarea');
    const shiftEnter = (event) => {
      if (event.key === 'Enter' && event.shiftKey) {
        setMessageText('');
        alert('mesage sent');
      }
    }
    textrea.addEventListener('keyup', shiftEnter);
    return () => {
      textrea.removeEventListener('keyup', shiftEnter);
    }
  }, []);

  const [messageText, setMessageText] = useState('');

  const handleKeyStroke = (event) => {
    let text = event.target.value;
    let len = Math.min(5, text.split('\n').length);

    event.target.rows = len;
    setMessageText(text);
  }

  const scrollToContacts = () => {
    document.getElementById('Contact').scrollIntoView({
      behavior: 'smooth'
    });
  }



  return (
    <div id='Chats'>
      <div id='chat_info'>
        <img onClick={scrollToContacts}
          src={leftarrow} alt="" className='svg-img' />
        <span>{name}</span>
        <img src={user} alt="" className='image-id' />
      </div>
      <div id='chat_logs'>
        {
          Object.entries(messagesByDate).map((date) =>
            <Chat key={date[0]} elem={date} />
          )
        }
      </div>
      <div id="chat_type_message">
        <textarea value={messageText} onChange={handleKeyStroke} rows={1} placeholder='Message ...'></textarea>
        <img src={send} alt="" className='' />
      </div>
    </div>
  )
}



export default Chats;