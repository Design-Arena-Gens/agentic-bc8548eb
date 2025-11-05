export default function Services() {
  const services = [
    {
      icon: '🏢',
      title: 'LLC Formation',
      description: 'Protect your personal assets with limited liability. Perfect for small businesses and startups.',
      price: 'Starting at $0 + state fees',
      features: ['Articles of Organization', 'Operating Agreement', 'EIN Included', 'Lifetime Support']
    },
    {
      icon: '🏛️',
      title: 'Corporation Formation',
      description: 'Ideal for businesses seeking investment or planning to go public.',
      price: 'Starting at $0 + state fees',
      features: ['Articles of Incorporation', 'Corporate Bylaws', 'Stock Certificates', 'Meeting Minutes']
    },
    {
      icon: '📋',
      title: 'Registered Agent',
      description: 'Professional registered agent service in all 50 states.',
      price: '$125/year',
      features: ['Mail Forwarding', 'Compliance Alerts', 'Document Storage', 'Privacy Protection']
    },
    {
      icon: '🔢',
      title: 'EIN Registration',
      description: 'Get your Federal Tax ID number for banking and taxes.',
      price: 'Free with formation',
      features: ['IRS Filing', 'Same-Day Processing', 'Digital Delivery', 'Expert Support']
    },
    {
      icon: '📊',
      title: 'Annual Reports',
      description: 'Stay compliant with state requirements and avoid penalties.',
      price: 'Starting at $99',
      features: ['State Filing', 'Deadline Reminders', 'Document Preparation', 'Fast Processing']
    },
    {
      icon: '📄',
      title: 'Business Licenses',
      description: 'Research and obtain required business licenses and permits.',
      price: 'Starting at $99',
      features: ['License Research', 'Application Assistance', 'Renewal Tracking', 'Compliance Support']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Start and Run Your Business
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive business formation and compliance services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-blue-600 font-bold text-lg mb-4">{service.price}</div>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
