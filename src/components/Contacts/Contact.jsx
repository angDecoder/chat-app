import React from 'react'
import userimg from "../../assets/user.png";
import {  NavLink } from 'react-router-dom';


function Contact({ elem, i }) {

  // const navigate = useNavigate();
  const { username, image, unreadMessage, lastMessage,id } = elem;
  const { message, time } = lastMessage;

  const scrollToChats = () => {
    document.getElementById('Chats').scrollIntoView({
      behavior: 'smooth'
    });
    // navigate(`chat/${username}`);
  }

  return <NavLink to={`chat/${id}`} onClick={scrollToChats}
    className={
      ({isActive,isPending})=>{
        const text = isPending || !isActive ? "" : "active_link";
        return text + " contact_elem"
      } 
    }
    key={username}>
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
      <span className='contact_time'>{time}</span>
      <span className='contact_message'>
        {
          message.length > 40 ?
            message.substring(0, 40) + "..." :
            message
        }
      </span>
    </div>
  </NavLink>
}


export default Contact