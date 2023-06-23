import React from 'react';
import './Chats.css';

function Chats({currentChat}) {
  return (
    <div id='Chats'>{currentChat}
      <button onClick={()=>{
        // console.log('clicked');
        document.getElementById('Contact').scrollIntoView({
          behavior : 'smooth'
        });
      }}>click me</button>
    </div>
  )
}

export default Chats;