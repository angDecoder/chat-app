import React,{ useRef } from 'react';
import './App.css';

import useClickOutside from './hooks/useClickOutside';

function App() {

  const appref = useRef(null);

  useClickOutside(appref,()=>{
    console.log('clicked outside');
  });

  return (
    <div>App</div>
  )
}

export default App