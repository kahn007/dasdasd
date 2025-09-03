import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Features = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Database",
      description: "We connect to your CRM or upload your lead list"
    },
    {
      number: "02", 
      title: "AI Creates Personal Messages",
      description: "Custom SMS and emails for each prospect automatically"
    },
    {
      number: "03",
      title: "Automated Follow-Up Sequence",
      description: "Multiple touchpoints until they book or opt out"
    },
    {
      number: "04",
      title: "Appointments Booked",
      description: "Qualified leads book directly into your calendar"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Cold Database to 
            <span className="text-blue-400"> Booked Calls</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Simple 4-step process that runs completely on autopilot
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Process Steps */}
          <div className="space-y-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center group">
                {/* Step Number */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mr-8">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 group-hover:bg-slate-800 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-lg">{step.description}</p>
                </div>
                
                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block ml-8">
                    <ArrowRight className="w-6 h-6 text-slate-500" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Results Preview */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 mb-12 border border-slate-600">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Typical Results</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">74%</div>
                <div className="text-slate-300">Open Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">8.9%</div>
                <div className="text-slate-300">Conversion Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">1 Week</div>
                <div className="text-slate-300">Setup Time</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xl px-12 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              See This In Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;