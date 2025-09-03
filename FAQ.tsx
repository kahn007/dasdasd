import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if I don't have a database/lead list?",
      answer: "No problem! We also set up cold outreach campaigns to generate new leads for your business. We can help you build targeted prospect lists and create campaigns to reach potential customers in your area or industry."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients start seeing responses within 24-48 hours of launching their campaign. Booked appointments typically start coming in within the first week. The system works 24/7, so you'll see activity even outside business hours."
    },
    {
      question: "What industries does this work for?",
      answer: "Our AI automation works for any service-based business including real estate, insurance, home services, healthcare, legal, financial services, and more. We customize the messaging and approach for your specific industry."
    },
    {
      question: "Do I need any technical knowledge?",
      answer: "Not at all! We handle the entire setup and management. You just provide your lead data and calendar preferences. The system runs completely on autopilot - you'll just see booked appointments appearing in your calendar."
    },
    {
      question: "How much does this cost?",
      answer: "Investment varies based on your database size and specific needs. During your strategy call, we'll provide transparent pricing and show you the exact ROI you can expect. Most clients see 3-5x return on investment within the first month."
    },
    {
      question: "What if leads opt out or complain?",
      answer: "Our system includes automatic opt-out handling and compliance with all regulations. We use professional, value-focused messaging that generates positive responses. Complaint rates are typically under 1%."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-xl text-slate-300">
            Get answers to common questions about our AI lead revival system
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-750 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;