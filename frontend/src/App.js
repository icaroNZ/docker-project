import React, { useEffect, useRef } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import M from 'materialize-css';

function App() {
  const _noteModal = useRef(null);

  useEffect(() => {
    M.AutoInit();
    M.Modal.init(_noteModal.current);
    return () => {};
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Notes />
      <div className='fixed-action-btn'>
        <a
          href='#modal-add-note'
          className='btn-floating btn-large waves-effect waves-light red modal-trigger'
        >
          <i className='material-icons'>add</i>
        </a>
      </div>
      <div id='modal-add-note' className='modal' ref={_noteModal}>
        <div className='modal-content'>
          <h4>Create a new note</h4>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-action modal-close waves-effect btn-flat red white-text'
          >
            Cancel
          </a>{' '}
          <a
            href='#!'
            className='modal-action modal-close waves-effect btn-flat green white-text'
          >
            Ok
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
