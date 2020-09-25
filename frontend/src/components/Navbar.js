import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='brand-logo'>Notes</div>
        <ul className='right hide-on-small-only'>
          <li>
            <a href='#!'>Home</a>
          </li>
          <li>
            <a href='#!'>Notes</a>
          </li>
          <li>
            <a href='#!'>Create</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
