import React, { useState } from 'react';
import { ArrowLeft, Shield, FileText, Lock } from 'lucide-react';

interface LegalProps {
  onBack: () => void;
  initialSection?: 'privacy' | 'terms' | 'security';
}

const Legal: React.FC<LegalProps> = ({ onBack, initialSection = 'privacy' }) => {
  const [activeSection, setActiveSection] = useState<'privacy' | 'terms' | 'security'>(initialSection);

  const sections = [
    { id: 'privacy' as const, title: 'Privacy Policy', icon: <Shield className="w-5 h-5" /> },
    { id: 'terms' as const, title: 'Terms & Conditions', icon: <FileText className="w-5 h-5" /> },
    { id: 'security' as const, title: 'Data Security', icon: <Lock className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={onBack}
            className="flex items-center text-slate-300 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-2xl font-bold">Legal Information</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Section Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {section.icon}
              <span className="ml-2">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-slate-800 rounded-xl p-8">
          {activeSection === 'privacy' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
              <p className="text-slate-400 mb-8">Last updated: January 2025</p>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Information We Collect</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We collect information you provide directly to us, such as when you book a strategy call, request information, or communicate with us.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">How We Use Your Information</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Information Sharing</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Data Security</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Contact Us</h3>
                  <p className="text-slate-300 leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:info@brayneai.io" className="text-blue-400 hover:text-blue-300">
                      info@brayneai.io
                    </a>
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeSection === 'terms' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Terms & Conditions</h2>
              <p className="text-slate-400 mb-8">Last updated: January 2025</p>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Acceptance of Terms</h3>
                  <p className="text-slate-300 leading-relaxed">
                    By accessing and using Brayne AI's services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Services</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Brayne AI provides AI automation services for lead revival and sales automation. We reserve the right to modify or discontinue services at any time.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">User Responsibilities</h3>
                  <p className="text-slate-300 leading-relaxed">
                    You are responsible for providing accurate information and ensuring your use of our services complies with applicable laws and regulations.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Limitation of Liability</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Brayne AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Governing Law</h3>
                  <p className="text-slate-300 leading-relaxed">
                    These terms shall be governed by and construed in accordance with applicable laws.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Contact Information</h3>
                  <p className="text-slate-300 leading-relaxed">
                    For questions regarding these terms, please contact us at{' '}
                    <a href="mailto:info@brayneai.io" className="text-blue-400 hover:text-blue-300">
                      info@brayneai.io
                    </a>
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Data Security</h2>
              <p className="text-slate-400 mb-8">Last updated: January 2025</p>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Our Commitment to Security</h3>
                  <p className="text-slate-300 leading-relaxed">
                    At Brayne AI, we take data security seriously. We implement industry-standard security measures to protect your information and your clients' data.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Data Encryption</h3>
                  <p className="text-slate-300 leading-relaxed">
                    All data transmission is encrypted using SSL/TLS protocols. Data at rest is encrypted using AES-256 encryption standards.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Access Controls</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We maintain strict access controls and only authorized personnel have access to client data on a need-to-know basis.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Compliance</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Our processes are designed to comply with relevant data protection regulations including GDPR and CCPA where applicable.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Data Retention</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We retain client data only as long as necessary to provide our services and comply with legal obligations.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Security Questions</h3>
                  <p className="text-slate-300 leading-relaxed">
                    If you have questions about our security practices, please contact us at{' '}
                    <a href="mailto:info@brayneai.io" className="text-blue-400 hover:text-blue-300">
                      info@brayneai.io
                    </a>
                  </p>
                </section>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Legal;