import React from 'react';
import '../resources/sign-up.css';

// images
import Sign from '../assets/trade.png';

export default function SignUp() {
  return (
    <div className='signup'>
      <div className='container'>
        {/* left */}
        <div className='left'>
          <img src={Sign} alt='' />
        </div>
        {/* right */}
        <div className='right'>
          <h2>Earn passive income with Crypto.</h2>
          <p>Earn up to 12% annual rewards on 30+ digital assets</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
