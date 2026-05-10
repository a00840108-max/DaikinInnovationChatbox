
import React from 'react';

/**
 * Daikin Logo Component
 * Renders the Daikin logo as an inline SVG for best quality and performance.
 */
export const DaikinLogo = ({ className = "h-8", grayscale = false }: { className?: string, grayscale?: boolean }) => (
  <svg 
    viewBox="0 0 500 100" 
    className={`${className} ${grayscale ? 'grayscale opacity-50' : ''}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0L100 0L0 100V0Z" fill="#00A1E4" />
    <path d="M0 100L100 0V100H0Z" fill="#231F20" />
    <text x="120" y="80" fontFamily="sans-serif" fontWeight="900" fontSize="80" fill="#00A1E4">DAIKIN</text>
  </svg>
);

/**
 * Vineyard Image Component
 * Corresponds to /7.png (Sector VitivinÃ­cola)
 */
export const VineyardImage = ({ className = "" }: { className?: string }) => (
  <img 
    src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1000" 
    alt="Sector VitivinÃ­cola"
    className={className}
    referrerPolicy="no-referrer"
  />
);

/**
 * Marketing Image Component
 * Corresponds to /8.png (Marketing & Mid-Market)
 */
export const MarketingImage = ({ className = "" }: { className?: string }) => (
  <img 
    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
    alt="Marketing & Mid-Market"
    className={className}
    referrerPolicy="no-referrer"
  />
);
