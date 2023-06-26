import React,{ useEffect,useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Form.css';
import whatsapp from '../../assets/user.png';

function Login() {

  const emailRef = useRef(null);

  useEffect(()=>{
    emailRef.current.focus();
  },[]);

  return (

    <div id='Login'>
      <div className='form-nav'>
        <img src={whatsapp} alt="" className='image-id' />
        Whatsapp Messenger
      </div>
      <form className='auth-form'>
        <h1>Login User</h1>
        <input ref={emailRef} className="input" type="text" placeholder='Email' />
        <input className="input" type="password" placeholder='Password' />
        <div>
          <button data-btn='green' >Submit</button>
          <button data-btn='red'>Reset</button>
        </div>

        <p>Not Registered ? <NavLink to={'/register'}
          className='navlink'>Register Here</NavLink></p>
      </form>
    </div>


  )
}

export default Login