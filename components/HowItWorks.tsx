export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Business Type',
      description: 'Select LLC, Corporation, or other entity type based on your needs. Not sure? Our experts can help you decide.',
      icon: '📝'
    },
    {
      number: '2',
      title: 'Complete Our Simple Form',
      description: 'Fill out our easy online questionnaire in just 10 minutes. We guide you through every question.',
      icon: '✍️'
    },
    {
      number: '3',
      title: 'We File Your Paperwork',
      description: 'Our team prepares and files all required documents with the state. Track your progress in real-time.',
      icon: '📤'
    },
    {
      number: '4',
      title: 'Receive Your Documents',
      description: 'Get your official formation documents, EIN, and everything needed to start operating legally.',
      icon: '✅'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get your business up and running in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
            Start Your Business Now
          </button>
          <p className="text-gray-600 mt-4">Average processing time: 5-7 business days</p>
        </div>
      </div>
    </section>
  )
}
