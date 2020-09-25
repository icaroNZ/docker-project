import React, { useRef, useEffect } from 'react';
import M from 'materialize-css';

function Modal({ children }) {
  const _noteModal = useRef(null);

  useEffect(() => {
    M.Modal.init(_noteModal.current);
    return () => {};
  }, []);

  return (
    <div id='modal-add-note' className='modal' ref={_noteModal}>
      {children}
    </div>
  );
}

export default Modal;
