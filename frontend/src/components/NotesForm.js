import React, { useEffect, useRef, useState } from 'react';
import M from 'materialize-css';

function NotesForm() {
  const _titleInput = useRef(null);
  const _descriptionInput = useRef(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    M.CharacterCounter.init(_titleInput.current);
    M.CharacterCounter.init(_descriptionInput.current);
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <h4>Create a new note</h4>
      <div className='row'>
        <form action='' className='col s12'>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                id='input_text'
                type='text'
                className='input_text'
                data-length='15'
                ref={_titleInput}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <label htmlFor='input_text'>Title</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <textarea
                id='textarea'
                className='materialize-textarea'
                data-length='150'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                ref={_descriptionInput}
              ></textarea>
              <label htmlFor='textarea'>Description</label>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default NotesForm;
