import './adoption.css';
import React from 'react';
import adoptImage from '../../assets/Frame 76.png';

const Adoption = () => {
   return (
       <div className='airlipay__adoption section__padding'>
           <div className='airlipay__adoption-image'>
                <img src={adoptImage} alt='adoption image' />
           </div>
           <div className='airlipay__adoption-content'>
                <h2 className='heading'>COMMITMENT TO EMPLOYEE ADOPTION</h2>
                <p className='description'>The AirliPay Solution starts by seamlessly and securely integrating with payroll systems to leave little to no added work for payroll teams. From there, collaborative services work with you on technical implementation, customized launch strategy, employee activation, client onboarding, training, marketing and more.</p>
           </div>
       </div>
   )
}

export default Adoption;