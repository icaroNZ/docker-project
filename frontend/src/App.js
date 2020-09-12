import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/test');
      setResponse(result.data);
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          The response is: {response} something else
        </a>
      </header>
    </div>
  );
}

export default App;
