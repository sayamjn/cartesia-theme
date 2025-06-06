import React, { useState } from 'react';

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

    return (
        <div className="pricing-wrapper">
            <div className="billing-toggle">
                <button 
                    className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                    onClick={() => setBillingCycle('monthly')}
                >
                    Monthly
                </button>
                <button 
                    className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
                    onClick={() => setBillingCycle('yearly')}
                >
                    Yearly (Save 20%)
                </button>
            </div>

            <div className="pricing-grid">
                {plans.map(plan => (
                    <div 
                        key={plan.id}
                        className={`pricing-card ${plan.highlighted ? 'highlighted' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                        onClick={() => setSelectedPlan(plan.id)}
                    >
                        {plan.highlighted && <div className="badge">Most Popular</div>}
                        <h3 className="plan-name">{plan.name}</h3>
                        <div className="plan-price">
                            {typeof plan.price[billingCycle] === 'number' ? (
                                <>
                                    <span className="currency">$</span>
                                    <span className="amount">{plan.price[billingCycle]}</span>
                                    <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                                </>
                            ) : (
                                <span className="custom-price">{plan.price[billingCycle]}</span>
                            )}
                        </div>
                        <ul className="feature-list">
                            {plan.features.map((feature, index) => (
                                <li key={index}>
                                    <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.67 5L7.5 14.17L3.33 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={`select-plan-btn ${plan.highlighted ? 'primary' : 'secondary'}`}>
                            {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTable;