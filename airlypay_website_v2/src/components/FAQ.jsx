'use client'

import React, { useState } from "react";

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What is AirliPay",
      content:
        "AirliPay is an on-demand pay platform that easily integrates with a company’s payroll. AirliPay provides employees of our Partner companies early access to their earned pay. This means that you choose when you want to get paid. You can get instant access to your earned income or receive it on the next business day when you choose to use AirliPay.",
    },
    {
      title: "How does AirliPay help your financial health?",
      content:
        "Waiting for payday can be stressful, especially when facing financial challenges. AirliPay eliminates the stress and anxiety associated with waiting for funds by granting you access to your earned wages, providing peace of mind and a sense of control over one's finances. This provides yout with greater financial flexibility, stability, and the ability to manage income more effectively.",
    },
    {
      title: "How fast can I receive money?",
      content:
        "With AirliPay, you can receive a transfer from your Pay Balance either instantly or on the next business day.",
    },
    {
      title: "How much does it cost to sign up for AirliPay?",
      content:
        "There is no cost to you, when you sign up for AirliPay. You pay a small fee every time you make a transfer of your earned income.",
    },
    {
      title: "How safe is it to use AirliPay?",
      content:
        "We have implemented bank-level security measures, incorporating the highest industry certifications, to ensure that your information is safeguarded with the utmost protection.",
    },
    {
      title: "I’ve a more specific question. How can I get help?",
      content:
        "If you have a specific question about AirliPay, please complete the form below, and we'll be delighted to provide further assistance.",
    },
  ];

  return (
    <section id="faq">
      <div className="faq-content">
        <div className="text-container">
          <h2 className="heading-2">Frequently Asked Questions</h2>
          <p className="description">
            Below are answers to employees’ most frequently asked questions.
          </p>
        </div>
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h4 className="accordion-title">{item.title}</h4>
                <svg
                  className={`expand-icon ${
                    activeAccordion === index ? "active" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              <div
                className={`accordion-content ${
                  activeAccordion === index ? "active" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
