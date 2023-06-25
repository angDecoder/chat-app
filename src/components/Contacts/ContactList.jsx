import React, { useRef,useState } from 'react';
import './Contacts.css';
import defautUser from '../../assets/default_user.svg';
import hamburger from '../../assets/hamburger.svg';
import logout from '../../assets/logout.svg';
import adduser from '../../assets/adduser.svg';
import Contact from './Contact';
import Close from '../../assets/cross.svg';
import useClickOutside from '../../hooks/useClickOutside';
import { useSelector } from 'react-redux';


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
  // const searchRef = useRef([]);;
  const [searchText, setSearchText] = useState('');
  const contactList = useSelector(state=>state.contact);
  const user = useSelector(state=>state.user);
  
  const hideDropDown = () => {
    console.log('here');
    const drop = document.querySelector('#contact_droplist > div');
    drop.style.display = 'none';
  }
  
  const showDropDown = () => {
    const drop = document.querySelector('#contact_droplist > div');
    const dis = drop.style.display;
    if (dis !=='flex'){
      drop.style.display = 'flex';
      show();
    }
  }
  
  const show = useClickOutside(dropDownRef, hideDropDown)
  console.log(contactList);


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
      <div id="contact_search">
        <input value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        type="text" placeholder='Search Contacts...'  />
        {
          searchText.trim()===''?"":
          <img src={Close}
            onClick={()=>setSearchText('')}
          alt="" className='svg-img' />

        }
      </div>
      <div id='contact_list'>
        {
          searchText?.trim()? // filter search value
            Object.values(contactList).filter((elem,i)=>{
                if( elem.username.includes(searchText.trim()) )
                  return true;
            }).map((elem,i)=>{
              return <Contact elem={elem} key={i} />
            }):
          Object.values(contactList).map((elem, i) => <Contact elem={elem} key={i} />)
        }
      </div>
    </div>
  )
}

export default ContactList;