import React from 'react'
import userimg from "../../assets/user.png";


function Contact({elem, i}) {
    const { username, image, unreadMessage, lastMessage } = elem;
    const { message, time } = lastMessage;

    const scrollToChats = ()=>{
        document.getElementById('Chats').scrollIntoView({
           behavior : 'smooth'
        })
    }

    return <div onClick={scrollToChats} className='contact_elem' key={username}>
      <div>
        <img src={userimg} alt="" className='image-id' />
        {
          unreadMessage > 0 ?
            <div className='unread'>
              {unreadMessage}
            </div> :
            <></>
        }
      </div>
      <div>
        <span className='contact_username'>
          {username}
        </span>
        <span className=''>{time}</span>
        <span className='contact_message'>
          {
            message.length > 40 ?
              message.substring(0, 40) + "..." :
              message
          }
        </span>
      </div>
    </div>
  }
  

export default Contact