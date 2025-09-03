import React from 'react';

interface FooterProps {
  onLegalClick: (section: 'privacy' | 'terms' | 'security') => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-slate-400 text-sm">
            © 2025 BrayneAI. All rights reserved.
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <button
              onClick={() => onLegalClick('privacy')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onLegalClick('terms')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onLegalClick('security')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Data Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;