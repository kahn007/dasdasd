import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen md:min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative" style={{minHeight: 'calc(100vh - 50px)'}}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0"
        style={{ backgroundImage: 'url(/background_image_brayneAI.png)' }}
      ></div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10 pointer-events-none">
        {/* Main Headline */}
        <div className="mb-4">
          <p className="text-blue-400 text-lg font-medium mb-2">FOR BUSINESS OWNERS WHO HATE LOSING LEADS</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1] sm:leading-[1.2]">
          What If Every
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block mt-1 sm:mt-0">
            Lead Converted?
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          AI automation that turns your cold database into booked appointments with personalized SMS and email follow-up.
        </p>

        {/* Main CTA Button */}
        <div className="mb-12">
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg sm:text-xl px-10 sm:px-12 py-5 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 relative z-20 cursor-pointer pointer-events-auto"
          >
            Show Me How This Works
          </button>
        </div>

        {/* Hero Visual */}
        <div className="relative pointer-events-auto">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-4 md:p-8 shadow-2xl border border-slate-600 max-w-5xl mx-auto">
            {/* Chart Title */}
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Lead Conversion Results</h3>
              <p className="text-sm md:text-base text-slate-300">See how our AI transforms your database</p>
            </div>

            {/* Chart Container */}
            <div className="relative h-64 md:h-80 mb-6 md:mb-8">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs md:text-sm text-slate-400 pr-2 md:pr-4">
                <span>1,200</span>
                <span>900</span>
                <span>600</span>
                <span>300</span>
                <span>0</span>
              </div>

              {/* Chart area */}
              <div className="ml-8 md:ml-12 h-full flex items-end justify-center space-x-4 md:space-x-12">
                {/* Bar 1: Database */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 md:w-20 bg-gradient-to-t from-slate-600 to-slate-500 rounded-t-lg" style={{height: '192px'}}>
                      <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm md:text-lg">
                        1,000
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-4 text-center">
                    <div className="text-white font-semibold text-xs md:text-base">Cold Leads</div>
                    <div className="text-slate-400 text-xs">In Database</div>
                  </div>
                </div>

                {/* Bar 2: Contacted */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 md:w-20 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg" style={{height: '192px'}}>
                      <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm md:text-lg">
                        1,000
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-4 text-center">
                    <div className="text-white font-semibold text-xs md:text-base">AI Outreach</div>
                    <div className="text-slate-400 text-xs">SMS + Email</div>
                  </div>
                </div>

                {/* Bar 3: Responded */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 md:w-20 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg" style={{height: '144px'}}>
                      <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm md:text-lg">
                        740
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-4 text-center">
                    <div className="text-white font-semibold text-xs md:text-base">Responses</div>
                    <div className="text-slate-400 text-xs">Engaged Leads</div>
                  </div>
                </div>

                {/* Bar 4: Booked */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 md:w-20 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg" style={{height: '77px'}}>
                      <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm md:text-lg">
                        89
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-4 text-center">
                    <div className="text-white font-semibold text-xs md:text-base">Calls Booked</div>
                    <div className="text-slate-400 text-xs">Ready to Close</div>
                  </div>
                </div>
              </div>

              {/* Grid lines */}
              <div className="absolute inset-0 ml-8 md:ml-12 pointer-events-none">
                <div className="h-full flex flex-col justify-between">
                  <div className="border-t border-slate-600 opacity-30"></div>
                  <div className="border-t border-slate-600 opacity-30"></div>
                  <div className="border-t border-slate-600 opacity-30"></div>
                  <div className="border-t border-slate-600 opacity-30"></div>
                  <div className="border-t border-slate-600 opacity-50"></div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="border-t border-slate-600 pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg md:text-2xl font-bold text-slate-300">8.9%</div>
                  <div className="text-xs text-slate-400">Conversion Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">74%</div>
                  <div className="text-xs text-slate-400">Open Rate</div>
                </div>
                <div>
                  <div className="text-lg md:text-2xl font-bold text-cyan-400">740</div>
                  <div className="text-xs text-slate-400">Responses</div>
                </div>
                <div>
                  <div className="text-lg md:text-2xl font-bold text-green-400">89</div>
                  <div className="text-xs text-slate-400">Calls Booked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;