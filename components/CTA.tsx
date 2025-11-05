export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Business?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Join over 500,000 entrepreneurs who have successfully launched their businesses with LegalEase.
          Get started today with our $0 formation package.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Form Your Business Now
          </button>
          <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Talk to an Expert
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-xl mb-2">Fast Processing</h3>
            <p className="text-blue-100">Form your business in as little as 24 hours with rush processing</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-bold text-xl mb-2">Affordable Pricing</h3>
            <p className="text-blue-100">Starting at $0 + state fees. No hidden costs or surprise charges</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-bold text-xl mb-2">Expert Support</h3>
            <p className="text-blue-100">24/7 customer support from business formation specialists</p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-blue-100 mb-4">Trusted by leading companies and entrepreneurs worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-2xl font-bold">Forbes</div>
            <div className="text-2xl font-bold">Inc.</div>
            <div className="text-2xl font-bold">Entrepreneur</div>
            <div className="text-2xl font-bold">TechCrunch</div>
            <div className="text-2xl font-bold">Bloomberg</div>
          </div>
        </div>
      </div>
    </section>
  )
}
