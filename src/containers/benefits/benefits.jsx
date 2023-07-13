import './benefits.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowLoopLeft, faChartLine, faShield, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';

const Benefits = () => {

    const iconStyle={
        color: 'var(--color-3)',
        marginBottom: '2rem'
    }

   return (
       <div className='airlipay__benefits section__padding' id='benefits'>
           <h2 className='heading'>Earned Wage Access Benefits</h2>
           <p className='description intro'>It can take six months or more to break even on hiring a new employee. Earned wage access can make keeping employees (and keeping them happy) easier than ever.</p>
           <div className='airlipay__benefits-container'>
                <div className='airlipay__benefits-benefit'>
                    <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} size='9x' style={iconStyle}/>
                    <h3 className='airlipay__benefits-benefit__heading'>Reduced Employee Turnover</h3>
                    <p className='description'>When employees have almost instant access to their earned wages, they are less likely to stress about getting to payday. In turn, that also means they’ll be less likely to find a new job (or even take one that doesn’t offer the amazing employee benefit.) A convenient earned wage access app like Rain can reduce your own employee turnover.</p>
                </div>
                <div className='airlipay__benefits-benefit'>
                    <FontAwesomeIcon icon={faChartLine} size='9x' style={iconStyle}/>
                    <h3 className='airlipay__benefits-benefit__heading'>Employee Productivity</h3>
                    <p className='description'>Boost employee productivity by offering the #1 requested employee benefit! An earned wage access app can help reduce financial stress and concerns, which means they will be happier, more engaged, and feel more part of the team! Let your employees relax knowing that they can access their earned wages if needed.</p>
                </div>
                <div className='airlipay__benefits-benefit'>
                    <FontAwesomeIcon icon={faShield} size='9x' style={iconStyle}/>
                    <h3 className='airlipay__benefits-benefit__heading'>Employee Retention</h3>
                    <p className='description'>Hiring and onboarding new employees is much more expensive than retaining good ones. Make loyalty an easy choice by offering earned wage access to your employees. Employees who have access to on-demand pay are more likely to have higher productivity and even be willing to take on more shifts. Invest in the best employee benefit around!</p>
                </div>
                <div className='airlipay__benefits-benefit'>
                    <FontAwesomeIcon icon={faArrowUpRightDots} size='9x' style={iconStyle}/>
                    <h3 className='airlipay__benefits-benefit__heading'>Increase in Job Applications</h3>
                    <p className='description'>Having trouble staffing your business? Employees are getting more selective about the places they work, which means you need to stand out against the competition. By offering an earned wage access app for employees, you become even more attractive to the potential pool of candidates! According to a study by ADP, offering EWA can almost double the amount of applications you receive.</p>
                </div>
           </div>
       </div>
   )
}

export default Benefits;