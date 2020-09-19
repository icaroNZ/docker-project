import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m6'>
              <div className='card horizontal'>
                <div className='card-image'>
                  <img src='https://placehold.it/100x200' alt='placehold' />
                  <div className='green'>New</div>
                </div>
                <div className='card-stacked'>
                  <div className='card-content'>
                    <span className='card-title'>
                      Lorem ipsum dolor sit amet
                    </span>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quas natus sit, vel ratione hic in assumenda, veniam
                      aliquid velit quia possimus quae voluptatibus, excepturi
                      rerum.
                    </p>
                  </div>
                  <div className='card-action'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
