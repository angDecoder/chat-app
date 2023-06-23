import React, { useRef } from 'react';
import './Contacts.css';
import defautUser from '../../assets/default_user.svg';
import hamburger from '../../assets/hamburger.svg';
import logout from '../../assets/logout.svg';
import adduser from '../../assets/adduser.svg';
import Contact from './Contact';
import Close from '../../assets/cross.svg';
import useClickOutside from '../../hooks/useClickOutside';

const allContacts = [
  {
    username: 'rahul',
    image: "../../assets/user.png",
    lastMessage: {
      type: 'text', message: ';akjdkfjke;kherhker; hej hhfjhlwejh Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam autem saepe expedita doloribus rerum dolorem vitae nemo reiciendis quasi aspernatur!',
      time: '10/2/24'
    },
    unreadMessaunreadMessagege: 2
  },
  {
    username: 'sanju',
    image: "../../assets/user.png",
    lastMessage: {
      type: 'text', message: ';akjdkfjke;kherhker; hej hhfjhlwejh',
      time: '10/2/24'
    },
    unreadMessage: 2
  },
  {
    username: 'manish',
    image: "../../assets/user.png",
    lastMessage: {
      type: 'text', message: ';akjdkfjke;kherhker; hej hhfjhlwejh',
      time: '10/2/24'
    },
    unreadMessage: 2
  },
  {
    username: 'angshu',
    image: "../../assets/user.png",
    lastMessage: {
      type: 'text', message: ';akjdkfjke;kherhker; hej hhfjhlwejh',
      time: '10/2/24'
    },
    unreadMessage: 2
  },

]

const user = {
  username: 'Angshu',
  image: '',
}

const droplist = [
  {
    name: 'Logout',
    image: logout
  },
  {
    name: 'Profile',
    image: defautUser
  },
  {
    name: 'Add Contact',
    image: adduser
  },

]

function ContactList({ currentChat }) {

  const dropDownRef = useRef(null);
  const hideDropDown = () => {
    console.log('here');
    const drop = document.querySelector('#contact_droplist > div');
    drop.style.display = 'none';
  }

  const showDropDown = () => {

    const drop = document.querySelector('#contact_droplist > div');
    const dis = drop.style.display;
    if (dis == 'none')
      drop.style.display = 'flex';
  }

  useClickOutside(dropDownRef, hideDropDown)

  return (
    <div id='Contact'>
      <div id='contact_user'>
        <img src={defautUser} alt="" className='image-id' />
        <span>{user.username}</span>
        <div id='contact_droplist' ref={dropDownRef}>
          <img
            onClick={showDropDown}
            src={hamburger} alt="" className='svg-img' />
          <div>
            {
              droplist.map(elem => {
                return <p key={elem.name}>
                  <img src={elem.image} alt="" className='svg-img' />
                  {elem.name}
                </p>
              })

            }
            <p onClick={hideDropDown}>
              <img src={Close} alt="" className='svg-img' />
              Close
            </p>
          </div>

        </div>
      </div>
      <div id='contact_list'>
        {
          allContacts.map((elem, i) => <Contact elem={elem} key={i} />)
        }
      </div>
    </div>
  )
}

export default ContactList;