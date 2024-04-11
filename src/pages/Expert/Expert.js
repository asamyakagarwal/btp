import React, { useState } from 'react';
import './Expert.css';
import news from '../../assets/News1.jpeg';

const sampleData = [
  {
    question: "What is this website about?",
    answer: "This website is about [Your website's purpose]. We offer [Describe what you offer]."
  },
  {
    question: "How do I contact you?",
    answer: "You can contact us by [Provide contact information, e.g., email address, phone number, contact form]."
  },{
    question: "How do I contact you?",
    answer: "You can contact us by [Provide contact information, e.g., email address, phone number, contact form]."
  },{
    question: "How do I contact you?",
    answer: "You can contact us by [Provide contact information, e.g., email address, phone number, contact form]."
  },{
    question: "How do I contact you?",
    answer: "You can contact us by [Provide contact information, e.g., email address, phone number, contact form]."
  },{
    question: "How do I contact you?",
    answer: "You can contact us by [Provide contact information, e.g., email address, phone number, contact form]."
  },
  // Add more FAQ data as needed
];

const Expert = () => {
  const [isOpen, setIsOpen] = useState(Array(sampleData.length).fill(false)); // Initialize for FAQ data

  const toggleAnswer = (index) => {
    setIsOpen((prevOpen) =>
      prevOpen.map((_, i) => (i === index ? !prevOpen[i] : prevOpen[i]))
    );
  };

  return (
    <div className="container">
      
      <div className="image-container">
        <img src={news} alt="Your website image" />
      </div>
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          {sampleData.map((item, index) => (
            <li key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer(index)}>
                {item.question}
              </button>
              <div
                className={`faq-answer ${isOpen[index] ? 'active' : ''}`} // Conditionally apply 'active' class
              >
                {item.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expert;