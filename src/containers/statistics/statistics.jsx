 import './statistics.css';
 import React from 'react';

 const Statistics = () => {
    return (
        <div className='airlipay__statistics section__padding'>
            <h2 className='heading'>IT’S PAYING OFF FOR EMPLOYEES</h2>
            <p className='description short'>3rd party analysis confirms that on-demand pay makes a profound impact on employee financial well being</p>
            <div className='airlipay__statistics-stats'>
                <div>
                    <h3>95%</h3>
                    <p className='description' >of on-demand pay users stopped using payday loans (81%) or reduce use (15%) after access to on-demand pay.</p>
                </div>
                <div>
                    <h3>88%</h3>
                    <p className='description' >of users credit on-demand pay for reducing or eliminating their use of payday loans</p>
                </div>
                <div>
                    <h3>$624 - $930</h3>
                    <p className='description'> conservative estimate of amount frequent payday users save annually using on-demand pay.</p>
                </div>
                <div>
                    <h3>$361</h3>
                    <p className='description' >An average of $361 is saved annually across the entire spectrum of payday borrowers.</p>
                </div>
            </div>
        </div>
    )
 }

 export default Statistics;