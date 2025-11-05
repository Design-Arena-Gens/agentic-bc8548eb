'use client'

import { useState } from 'react'

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual')

  const plans = [
    {
      name: 'Starter',
      price: 0,
      description: 'Everything you need to get started',
      features: [
        'Business name search',
        'Preparation & filing of formation docs',
        'Unlimited phone & email support',
        'Operating Agreement (LLC) or Bylaws (Corp)',
        'EIN tax number',
        'Banking resolution',
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: 199,
      description: 'Most popular for growing businesses',
      features: [
        'Everything in Starter, plus:',
        'Expedited filing (2-3 business days)',
        'Business website & email',
        'Domain name for 1 year',
        'Business contract templates',
        'Digital signature tool',
        'Financial forecasting template',
      ],
      cta: 'Start Pro Plan',
      popular: true
    },
    {
      name: 'Premium',
      price: 399,
      description: 'Complete business formation package',
      features: [
        'Everything in Pro, plus:',
        'Rush filing (same day)',
        'Business license research report',
        'S-Corp tax election filing',
        'Trademark search + filing',
        'Priority customer support',
        'Banking partnership benefits',
        'Accounting software integration',
      ],
      cta: 'Start Premium Plan',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your business needs
          </p>

          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-semibold transition ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-blue-600 shadow'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-md font-semibold transition ${
                billingPeriod === 'annual'
                  ? 'bg-white text-blue-600 shadow'
                  : 'text-gray-600'
              }`}
            >
              Annual <span className="text-green-600 text-sm ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                plan.popular
                  ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-4 scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={`ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  + state fees
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition mb-6 ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`h-5 w-5 mr-3 mt-0.5 ${
                        plan.popular ? 'text-white' : 'text-green-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include state filing fees which vary by state ($50-$500).{' '}
            <a href="#" className="text-blue-600 hover:underline">
              See state fee chart
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
