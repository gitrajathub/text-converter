import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState({ alertMessage: "", alertType: "" });

  const showAlert = (message, type) => {
    setAlert({
      alertMessage: message,
      alertType: type
    });
    setTimeout(()=>{
      setAlert({ alertMessage: "", alertType: "" });
    },1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor = '#064F74';
      showAlert(": Dark mode is enabled!", "success");

    } else {
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert(": Light mode is enabled!", "success");
    }
  };

  return (
    <>
      <Navbar title="thisisnavbartitlefromprops" mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <Alert alertMessage={alert.alertMessage} alertType={alert.alertType} />
      <Form showAlert={showAlert} title="Text Converter" mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;