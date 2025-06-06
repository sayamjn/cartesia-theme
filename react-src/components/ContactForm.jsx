import React, { useState } from 'react';

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
            const response = await fetch(window.cartesia_ajax.rest_url + 'contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': window.cartesia_ajax.nonce
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

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                />
            </div>
            
            <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
                <div className="alert alert-success">
                    Thank you! Your message has been sent successfully.
                </div>
            )}
            
            {status === 'error' && (
                <div className="alert alert-error">
                    Oops! Something went wrong. Please try again.
                </div>
            )}
        </form>
    );
};

export default ContactForm;