'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is the difference between an LLC and a Corporation?',
      answer: 'An LLC (Limited Liability Company) offers flexibility in management and taxation, with fewer formalities required. A Corporation is a more formal structure, ideal for businesses seeking investment or planning to go public. Corporations have shareholders, a board of directors, and must hold annual meetings. LLCs have members and can choose how they\'re taxed.'
    },
    {
      question: 'How long does it take to form my business?',
      answer: 'Processing times vary by state and package selected. With our standard service, most formations are completed in 5-7 business days. Our expedited service takes 2-3 business days, and rush filing can be completed in as little as 24 hours. State processing times may vary.'
    },
    {
      question: 'Do I need a registered agent?',
      answer: 'Yes, all LLCs and Corporations are required to have a registered agent in the state where they\'re formed. A registered agent receives legal documents and official correspondence on behalf of your business. We offer registered agent services in all 50 states.'
    },
    {
      question: 'What state should I form my business in?',
      answer: 'Most small businesses should form in the state where they operate. While Delaware and Nevada are popular for specific tax and legal benefits, forming out-of-state often requires foreign qualification, adding cost and complexity. We can help you determine the best state for your situation.'
    },
    {
      question: 'What is an EIN and do I need one?',
      answer: 'An EIN (Employer Identification Number) is a federal tax ID issued by the IRS. You need an EIN to open a business bank account, hire employees, and file business taxes. Most businesses need an EIN, and we include EIN registration free with all our formation packages.'
    },
    {
      question: 'Can I form a business if I\'m not a U.S. citizen?',
      answer: 'Yes! Non-U.S. citizens can form LLCs and Corporations in the United States. You don\'t need to be a citizen or have a Social Security Number. However, you will need to obtain an EIN and may need an ITIN (Individual Taxpayer Identification Number) for tax purposes.'
    },
    {
      question: 'What documents will I receive after formation?',
      answer: 'You\'ll receive your Certificate of Formation/Incorporation from the state, Operating Agreement (LLC) or Corporate Bylaws, EIN confirmation letter, banking resolution, and all filed documents. Digital copies are available immediately, with originals mailed if requested.'
    },
    {
      question: 'Do you offer refunds if I\'m not satisfied?',
      answer: 'We offer a 100% satisfaction guarantee on our service fees (not including state filing fees). If you\'re not satisfied with our service before we file your documents, we\'ll provide a full refund. After filing, state fees are non-refundable, but we\'ll work to resolve any issues.'
    },
    {
      question: 'What ongoing requirements does my business have?',
      answer: 'Requirements vary by state but typically include filing an annual report, maintaining a registered agent, and paying annual fees. Some states also require business licenses and permits. We offer compliance services to help you stay on track with all requirements and deadlines.'
    },
    {
      question: 'Can I change my business structure later?',
      answer: 'Yes, you can convert your business structure (e.g., from LLC to Corporation) through a process called statutory conversion or by forming a new entity. However, this can be complex and may have tax implications. It\'s best to choose the right structure from the start, and our experts can help you decide.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about forming your business
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-blue-600 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our business formation experts are here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Chat with an Expert
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-600">
              Call (888) 555-0123
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
