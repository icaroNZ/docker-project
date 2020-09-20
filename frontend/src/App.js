import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Notes />
    </div>
  );
}

export default App;
