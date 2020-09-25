import React from 'react';

function Note({ note, handleDelete }) {
  return (
    <div className='col s12 m6 l4'>
      <div className='card'>
        <div className='card-stacked'>
          <div className='card-content'>
            <span className='card-title'>{note.title}</span>
            <p>{note.description}</p>
          </div>
          <div className='card-action'>
            <a
              href='#!'
              className='waves-effect btn green ligthen-2'
              style={{ marginRight: '1rem' }}
            >
              Edit
            </a>
            <a
              onClick={() => handleDelete(note._id)}
              href='#!'
              className='waves-effect btn red ligthen-2'
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
