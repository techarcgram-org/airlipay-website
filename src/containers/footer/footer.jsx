import './footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const iconStyle = {
        color: 'white',
        cursor: 'pointer'
    }

    const date = new Date().getFullYear();

   return (
        <div className='airlipay__footer' id='contact'>
            <div className='airlipay__footer-top section__padding'>
                <div className='airlipay__footer-content'>
                    <h2>Leave Payday Stress Behind. Instant Wage Access for Peace of Mind.</h2>
                    <p className='description'>Experience freedom from payday stress with our instant wage access solution. Access your hard-earned money whenever you need it, gaining peace of mind and financial flexibility. No more waiting or counting down the days until your next paycheck.</p>
                    <div className='airlipay__footer-icons'>
                        <FontAwesomeIcon icon={faFacebookSquare} size='3x' style={iconStyle} onMouseOver={() => {'this.iconStyle.color="var(--color-4)"'}} onMouseOut={() => {'this.iconStyle.color="white"'}}/>
                        <FontAwesomeIcon icon={faTwitterSquare} size='3x' style={iconStyle} />
                        <FontAwesomeIcon icon={faLinkedin} size='3x' style={iconStyle} />
                    </div>
                </div>
                <div className='airlipay__footer-form'>
                    <form action="https://formspree.io/f/mrgvvzwv" method='POST'>
                        <input name='name' placeholder='Name' type='text' id='name' required ></input>
                        <input name='email' placeholder='Email Address' type='email' id='name' required></input>
                        <textarea name='message' id='message' placeholder='Enter your message here' rows='4' ></textarea>
                        <input type='submit' value='Send'></input>
                    </form>
                </div>
            </div>
            <div className='airlipay__footer-bottom'>
                <p><span>A</span>irlipay ⓒ {date} | <a href='https://techarcgram.com/'><span>T</span>echarcgram</a></p>
            </div>
       </div>
   )
}

export default Footer;