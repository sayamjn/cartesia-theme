import React, { useState } from 'react';

const FAQAccordion = () => {
    const [openItems, setOpenItems] = useState([]);

    const faqs = [
        {
            question: 'What is the latency of your voice generation?',
            answer: 'Our Sonic model achieves industry-leading latency of less than 90ms, making it perfect for real-time applications like voice assistants and live communication.'
        },
        {
            question: 'How many languages do you support?',
            answer: 'We currently support 15 languages including English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, Korean, and more. Each language includes multiple voice options and accent variations.'
        },
        {
            question: 'Can I clone my own voice?',
            answer: 'Yes! With our Pro and Enterprise plans, you can create custom voice clones from just 5 seconds of audio. The voice cloning feature maintains the unique characteristics and nuances of the original voice.'
        },
        {
            question: 'What integrations are available?',
            answer: 'We offer native integrations with popular platforms like Twilio, LiveKit, Rasa, and more. Our REST API and SDKs for Python, JavaScript, and other languages make it easy to integrate with any application.'
        },
        {
            question: 'Is there an on-premise option?',
            answer: 'Yes, our Enterprise plan includes on-premise deployment options for organizations with specific security or compliance requirements. Contact our sales team to discuss your needs.'
        },
        {
            question: 'How is pricing calculated?',
            answer: 'Pricing is based on the number of characters processed. Each plan includes a monthly character allowance, and you can purchase additional credits as needed. Enterprise plans offer custom pricing based on volume.'
        }
    ];

    const toggleItem = (index) => {
        setOpenItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="faq-accordion">
            {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openItems.includes(index) ? 'open' : ''}`}>
                    <button 
                        className="faq-question"
                        onClick={() => toggleItem(index)}
                    >
                        <span>{faq.question}</span>
                        <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path 
                                d={openItems.includes(index) ? 'M18 15L12 9L6 15' : 'M6 9L12 15L18 9'} 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div 
                        className="faq-answer"
                        style={{
                            maxHeight: openItems.includes(index) ? '300px' : '0',
                            opacity: openItems.includes(index) ? '1' : '0'
                        }}
                    >
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;