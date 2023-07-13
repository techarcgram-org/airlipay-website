import './navbar.css';
import React from 'react';
import Getapp from '../getapp/getapp';

const Navbar = () => {

    const handleClick = () => {
        console.log('get app');
        // <Getapp />
    }

    return(
        <div className='airlipay__navbar'>
            <h1>AirliPay</h1>
            <div className='airlipay__navbar-links'>
                <p><a href='#faqs'>FAQs</a></p>
                <p><a href='#benefits'>Benefits</a></p>
                <p><a href='#contact'>Contact Us</a></p>
                <button type='button' onClick={() => handleClick}>Get App</button>
            </div>
        </div>
    )
}

export default Navbar;