import React from 'react';

function ModalFooter() {
  return (
    <div className='modal-footer'>
      <a
        style={{
          marginRight: '0.5rem',
        }}
        href='#!'
        className='modal-action modal-close waves-effect btn-flat red white-text'
      >
        Cancel
      </a>
      <a
        href='#!'
        className='modal-action modal-close waves-effect btn-flat green white-text'
      >
        Ok
      </a>
    </div>
  );
}

export default ModalFooter;
