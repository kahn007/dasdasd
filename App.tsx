import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Legal from './components/Legal';

function App() {
  const [legalSection, setLegalSection] = useState<'privacy' | 'terms' | 'security' | null>(null);

  if (legalSection) {
    return <Legal onBack={() => setLegalSection(null)} initialSection={legalSection} />;
  }

  return (
    <div className="bg-slate-900 text-white font-sans">
      <Header />
      <Hero />
      <Problem />
      <Features />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer onLegalClick={setLegalSection} />
    </div>
  );
}

export default App;