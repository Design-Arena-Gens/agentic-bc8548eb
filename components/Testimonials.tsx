export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Founder, Tech Startup',
      image: '👩‍💼',
      rating: 5,
      text: 'LegalEase made forming my LLC incredibly easy. The whole process took less than a week, and their support team answered all my questions promptly. Highly recommend!'
    },
    {
      name: 'Michael Chen',
      business: 'Owner, E-commerce Store',
      image: '👨‍💻',
      rating: 5,
      text: 'I was overwhelmed by the paperwork involved in starting a business. LegalEase handled everything professionally and kept me informed every step of the way. Worth every penny!'
    },
    {
      name: 'Emily Rodriguez',
      business: 'Founder, Consulting Firm',
      image: '👩‍💼',
      rating: 5,
      text: 'The Pro plan was perfect for my needs. I got my LLC formed quickly, plus all the extra tools like contract templates and business email. Everything a new business owner needs.'
    },
    {
      name: 'David Thompson',
      business: 'CEO, SaaS Company',
      image: '👨‍💼',
      rating: 5,
      text: 'After comparing multiple services, LegalEase stood out for their transparency and value. The Premium package saved me hours of work and the expedited filing was fantastic.'
    },
    {
      name: 'Lisa Wang',
      business: 'Owner, Marketing Agency',
      image: '👩‍💼',
      rating: 5,
      text: 'Customer service is exceptional! They walked me through choosing between LLC and S-Corp, and made sure I understood all my options. Very knowledgeable team.'
    },
    {
      name: 'James Miller',
      business: 'Founder, Real Estate Investment',
      image: '👨‍💼',
      rating: 5,
      text: 'I\'ve used LegalEase to form multiple LLCs for my properties. The process is streamlined, affordable, and reliable. My go-to service for business formation.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by 500,000+ Entrepreneurs
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex mt-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-center border-l-2 border-gray-200 pl-8">
              <div className="text-3xl font-bold text-blue-600">15,000+</div>
              <div className="text-gray-600">5-Star Reviews</div>
            </div>
            <div className="text-center border-l-2 border-gray-200 pl-8">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
