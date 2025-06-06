/**
 * React Components Bundle
 *
 * @package Cartesia
 */

const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

// Pricing Table Component
const PricingTable = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            id: 'free',
            name: 'Free',
            price: { monthly: 0, yearly: 0 },
            features: [
                '10,000 credits/month',
                '1 parallel request',
                '15 languages',
                'Community support',
                'Basic analytics'
            ],
            highlighted: false
        },
        {
            id: 'pro',
            name: 'Pro',
            price: { monthly: 49, yearly: 470 },
            features: [
                '100,000 credits/month',
                '5 parallel requests',
                '15 languages',
                'Voice cloning',
                'Priority support',
                'Advanced analytics',
                'Custom voices'
            ],
            highlighted: true
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: { monthly: 'Custom', yearly: 'Custom' },
            features: [
                'Unlimited credits',
                'Unlimited parallel requests',
                'All languages',
                'Advanced voice cloning',
                'Dedicated support',
                'Custom integrations',
                'SLA guarantee',
                'On-premise deployment'
            ],
            highlighted: false
        }
    ];

    return React.createElement('div', { className: 'pricing-wrapper' },
        // Billing Toggle
        React.createElement('div', { className: 'billing-toggle' },
            React.createElement('button', {
                className: `toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`,
                onClick: () => setBillingCycle('monthly')
            }, 'Monthly'),
            React.createElement('button', {
                className: `toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`,
                onClick: () => setBillingCycle('yearly')
            }, 'Yearly (Save 20%)')
        ),

        // Pricing Cards
        React.createElement('div', { className: 'pricing-grid' },
            plans.map(plan => 
                React.createElement('div', {
                    key: plan.id,
                    className: `pricing-card ${plan.highlighted ? 'highlighted' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`,
                    onClick: () => setSelectedPlan(plan.id)
                },
                    plan.highlighted && React.createElement('div', { className: 'badge' }, 'Most Popular'),
                    React.createElement('h3', { className: 'plan-name' }, plan.name),
                    React.createElement('div', { className: 'plan-price' },
                        typeof plan.price[billingCycle] === 'number' 
                            ? React.createElement(React.Fragment, {},
                                React.createElement('span', { className: 'currency' }, '$'),
                                React.createElement('span', { className: 'amount' }, plan.price[billingCycle]),
                                React.createElement('span', { className: 'period' }, `/${billingCycle === 'monthly' ? 'mo' : 'yr'}`)
                            )
                            : React.createElement('span', { className: 'custom-price' }, plan.price[billingCycle])
                    ),
                    React.createElement('ul', { className: 'feature-list' },
                        plan.features.map((feature, index) => 
                            React.createElement('li', { key: index },
                                React.createElement('svg', { 
                                    className: 'check-icon',
                                    width: '20',
                                    height: '20',
                                    viewBox: '0 0 20 20',
                                    fill: 'none'
                                },
                                    React.createElement('path', {
                                        d: 'M16.67 5L7.5 14.17L3.33 10',
                                        stroke: 'currentColor',
                                        strokeWidth: '2',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round'
                                    })
                                ),
                                feature
                            )
                        )
                    ),
                    React.createElement('button', { 
                        className: `select-plan-btn ${plan.highlighted ? 'primary' : 'secondary'}`
                    }, plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started')
                )
            )
        )
    );
};

// FAQ Accordion Component
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

    return React.createElement('div', { className: 'faq-accordion' },
        faqs.map((faq, index) => 
            React.createElement('div', {
                key: index,
                className: `faq-item ${openItems.includes(index) ? 'open' : ''}`
            },
                React.createElement('button', {
                    className: 'faq-question',
                    onClick: () => toggleItem(index)
                },
                    React.createElement('span', {}, faq.question),
                    React.createElement('svg', {
                        className: 'faq-icon',
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none'
                    },
                        React.createElement('path', {
                            d: openItems.includes(index) ? 'M18 15L12 9L6 15' : 'M6 9L12 15L18 9',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round'
                        })
                    )
                ),
                React.createElement('div', { 
                    className: 'faq-answer',
                    style: {
                        maxHeight: openItems.includes(index) ? '300px' : '0',
                        opacity: openItems.includes(index) ? '1' : '0'
                    }
                },
                    React.createElement('p', {}, faq.answer)
                )
            )
        )
    );
};

// Contact Form Component
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const response = await fetch(cartesia_ajax.rest_url + 'contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': cartesia_ajax.nonce
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return React.createElement('form', { 
        className: 'contact-form',
        onSubmit: handleSubmit
    },
        React.createElement('div', { className: 'form-group' },
            React.createElement('label', { htmlFor: 'name' }, 'Name *'),
            React.createElement('input', {
                type: 'text',
                id: 'name',
                name: 'name',
                value: formData.name,
                onChange: handleChange,
                required: true,
                placeholder: 'John Doe'
            })
        ),
        React.createElement('div', { className: 'form-group' },
            React.createElement('label', { htmlFor: 'email' }, 'Email *'),
            React.createElement('input', {
                type: 'email',
                id: 'email',
                name: 'email',
                value: formData.email,
                onChange: handleChange,
                required: true,
                placeholder: 'john@example.com'
            })
        ),
        React.createElement('div', { className: 'form-group' },
            React.createElement('label', { htmlFor: 'company' }, 'Company'),
            React.createElement('input', {
                type: 'text',
                id: 'company',
                name: 'company',
                value: formData.company,
                onChange: handleChange,
                placeholder: 'Acme Inc.'
            })
        ),
        React.createElement('div', { className: 'form-group' },
            React.createElement('label', { htmlFor: 'message' }, 'Message *'),
            React.createElement('textarea', {
                id: 'message',
                name: 'message',
                value: formData.message,
                onChange: handleChange,
                required: true,
                rows: 5,
                placeholder: 'Tell us about your project...'
            })
        ),
        React.createElement('button', {
            type: 'submit',
            className: 'submit-btn',
            disabled: loading
        }, loading ? 'Sending...' : 'Send Message'),
        
        status === 'success' && React.createElement('div', { className: 'alert alert-success' }, 
            'Thank you! Your message has been sent successfully.'
        ),
        
        status === 'error' && React.createElement('div', { className: 'alert alert-error' }, 
            'Oops! Something went wrong. Please try again.'
        )
    );
};

// Initialize React Components
document.addEventListener('DOMContentLoaded', () => {
    // Mount Pricing Table
    const pricingRoot = document.getElementById('pricing-react-root');
    if (pricingRoot) {
        createRoot(pricingRoot).render(React.createElement(PricingTable));
    }

    // Mount FAQ Accordion
    const faqRoot = document.getElementById('faq-react-root');
    if (faqRoot) {
        createRoot(faqRoot).render(React.createElement(FAQAccordion));
    }

    // Mount Contact Form
    const contactRoot = document.getElementById('contact-react-root');
    if (contactRoot) {
        createRoot(contactRoot).render(React.createElement(ContactForm));
    }
});