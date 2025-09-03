import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      stat: "78%",
      title: "Speed Kills Deals",
      description: "The first business to respond wins 78% of the time. Every hour you wait, your chances drop by 10%."
    },
    {
      stat: "24hrs",
      title: "Leads Go Cold Fast",
      description: "After 24 hours without contact, your lead conversion rate drops from 30% to just 3%."
    },
    {
      stat: "0%",
      title: "Manual Follow-up Fails",
      description: "You're busy running your business. Meanwhile, competitors with automated systems are stealing your prospects."
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Hidden Cost of
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
              Slow Follow-Up
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            While you're focused on delivering great service, your competitors are winning your leads with faster response times.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-slate-900 border-l-4 border-red-400 p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="text-4xl font-bold text-red-400 mb-2">
                    {problem.stat}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {problem.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Statistic */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              87%
            </div>
            <div className="text-xl text-slate-200 mb-2">
              of leads never receive any follow-up
            </div>
            <div className="text-slate-400">
              Don't let your prospects become someone else's customers
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Fix This Problem Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;