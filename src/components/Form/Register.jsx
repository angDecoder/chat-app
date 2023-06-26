import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Form.css';
import whatsapp from '../../assets/user.png';
import adduser from '../../assets/adduser.svg';

function Register() {
  const [selectImg, setSelectImg] = useState(adduser);
  const emailRef = useRef(null);


  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectImg(URL.createObjectURL(event.target.files[0]));
    }
  }
  return (
    <div id='Register'>
      <div className='form-nav'>
        <img src={whatsapp} alt="" className='image-id' />
        Whatsapp Messenger
      </div>
      <form className='auth-form'>
        <h1>Register User</h1>
        <input ref={emailRef} className="input" type="email" placeholder='Email' />
        <input className="input" type="text" placeholder='Username' />
        <input className="input" type="password" placeholder='Password' />
        <input className="input" type="password" placeholder='Confirm Password' />
        <input type="file" accept="image/*"
          onChange={onImageChange}
          id="register_userimg" />
        <label htmlFor="register_userimg">
          <img src={selectImg} alt="" className='image-id' />
          <span>User Image</span>
        </label>
        <div>
          <button data-btn='green' >Submit</button>
          <button data-btn='red'>Reset</button>
        </div>

        <p>Already Registered? <NavLink to={'/login'}
          className='navlink'>Login Here</NavLink></p>
      </form>
    </div>
  )
}

export default Register