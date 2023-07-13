import './rules.css';
import React from 'react';
import rulesImg from '../../assets/Screen_Shot_2023-05-13_at_23.42.04-removebg-preview.png';

const Rules = () => {

   return (
       <div className='airlipay__rules section__padding'>
           <div className='airlipay__rules-image'>
                <img src={rulesImg} alt='rules image' />
           </div>
           <div className='airlipay__rules-content'>
                <h2 className='heading2'>Let’s Rewrite the Rules of Money</h2>
                <p className='description'>We’re rewriting the invisible rules of money. The traditional financial system would have you believe that you have to wait to get the money you’ve already earned. Get your money when you need it with on-demand pay (also known as earned wage access.)</p>
                <p className='description'>We’re re-imaging the way money moves and what that means for the world.</p>
                <button type='button' onClick={() => handleClick}>Join Us</button>
           </div>
       </div>
   )
}

export default Rules;