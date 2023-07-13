import './header.css';
import React from 'react';
import headImg from '../../assets/Screen_Shot_2023-05-13_at_23.41.17-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';



const Header = () => {

    const iconStyle = {
        color: 'var(--color-3)',
        marginBottom: '1rem'
    }

   return (
       <div className='airlipay__header section__padding'>
           <div className='airlipay__header-content'>
                <h1 className='heading'>GET PAID ON YOUR TERMS. INSTANT WAGE ACCESS MADE SIMPLE</h1>
                <p className='description'>On-demand pay — also known as earned wage access — gives employees access to their earned pay before the traditional, scheduled payday.</p>
                <div className='airlipay__header-features'>
                    <div className='airlipay__header-features__feature'>
                        <FontAwesomeIcon icon={faBolt} size='3x' style={iconStyle}/>
                        <p>Instant pay</p>
                    </div>
                    <div className='airlipay__header-features__feature'>
                        <FontAwesomeIcon icon={faLock} size='3x' style={iconStyle}/>
                        <p>Instant pay</p>
                    </div>
                    <div className='airlipay__header-features__feature'>
                        <FontAwesomeIcon icon={faCheck} size='3x' style={iconStyle} />
                        <p>Instant pay</p>
                    </div>
                </div>
                <p>Experience the Future of Wage Payment.</p>
           </div>
           <div className='airlipay__header-image'>
                <img src={headImg} alt='header image' />
           </div>
       </div>
   )
}

export default Header;