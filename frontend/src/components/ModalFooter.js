import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../StateContext';

function ModalFooter() {
  const { title, description } = useContext(StateContext);

  const [isDisabled, setIsDisabled] = useState(false);

  function isValid() {
    return (
      title.length > 0 &&
      title.length <= 15 &&
      description.length > 0 &&
      description.length <= 150
    );
  }

  useEffect(() => {
    setIsDisabled(!isValid());
    return () => {};
  }, [title, description]);

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
        className={`${
          isDisabled ? 'disabled' : ''
        } modal-action modal-close waves-effect btn-flat green white-text`}
      >
        Ok
      </a>
    </div>
  );
}

export default ModalFooter;
