import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';


function App() {

  const [mode, setMode] = useState('light');
  const [modeText, setmodeText] = useState('Enable Dark Mode');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      setmodeText('Enable Light Mode');
      document.body.style.backgroundColor = '#064F74';
    }
    else{
      setMode('light');
      setmodeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      <Navbar title="thisisnavbartitlefromprops" mode={mode} toggleMode={toggleMode} modeText={modeText} /> 
      <Form title="Text Converter" mode={mode} toggleMode={toggleMode} />
    </>
  );
}


export default App;