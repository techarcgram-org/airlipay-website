import './faq.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const accordionData = [
        {
            question: 'What is AirliPay',
            answer: 'AirliPay is an on-demand pay platform that easily integrates with a company’s payroll. AirliPay provides employees of our Partner companies early access to their earned pay. This means that you choose when you want to get paid. You can get instant access to your earned income or receive it on the next business day when you choose to use AirliPay.'
        },
        {
            question: 'How does AirliPay help your financial health?',
            answer: "Waiting for payday can be stressful, especially when facing financial challenges. AirliPay eliminates the stress and anxiety associated with waiting for funds by granting you access to your earned wages, providing peace of mind and a sense of control over one's finances. This provides yout with greater financial flexibility, stability, and the ability to manage income more effectively."
        },
        {
            question: 'How fast can I receive money?',
            answer: 'With AirliPay, you can receive a transfer from your Pay Balance either instantly or on the next business day.'
        },
        {
            question: 'How much does it cost to sign up for AirliPay?',
            answer: 'There is no cost to you, when you sign up for AirliPay. You pay a small fee every time you make a transfer of your earned income.'
        },
        {
            question: 'How safe is it to use AirliPay?',
            answer: 'We have implemented bank-level security measures, incorporating the highest industry certifications, to ensure that your information is safeguarded with the utmost protection.'
        },
        {
            question: 'I’ve a more specific question. How can I get help?',
            answer: "If you have a specific question about AirliPay, please complete the form below, and we'll be delighted to provide further assistance."
        }
    ]

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

   return (
       <div className='airlipay__faq section__padding' id='faqs'>
           <div className='airlipay__faq-content'>
                <h2 className='heading2'>Frequently Asked Questions</h2>
                <p className='description'>Below are answers to employees’ most frequently asked questions.</p>
           </div>
           <div className='ailipay__faq-container'>
                <div className='airlipay__faq-qa'>
                    {accordionData.map((item, index) => {
                        return (
                            <div>
                                <div className='airlipay__faq-question' key={index} onClick={() => toggleAccordion(index)}>
                                    <h3>{item.question}</h3>
                                    <FontAwesomeIcon icon={faCaretDown} size='1x' rotation={activeIndex === index ? 180 : 0} />
                                </div>
                                {activeIndex === index && (
                                    <p className='description'>{item.answer}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
           </div>
       </div>
   )
}

export default Faq;