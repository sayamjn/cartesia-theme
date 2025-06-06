import React from 'react';
import { createRoot } from 'react-dom/client';
import PricingTable from './components/PricingTable';
import FAQAccordion from './components/FAQAccordion';
import ContactForm from './components/ContactForm';

// Initialize React Components
document.addEventListener('DOMContentLoaded', () => {
    // Mount Pricing Table
    const pricingRoot = document.getElementById('pricing-react-root');
    if (pricingRoot) {
        createRoot(pricingRoot).render(<PricingTable />);
    }

    // Mount FAQ Accordion
    const faqRoot = document.getElementById('faq-react-root');
    if (faqRoot) {
        createRoot(faqRoot).render(<FAQAccordion />);
    }

    // Mount Contact Form
    const contactRoot = document.getElementById('contact-react-root');
    if (contactRoot) {
        createRoot(contactRoot).render(<ContactForm />);
    }
});