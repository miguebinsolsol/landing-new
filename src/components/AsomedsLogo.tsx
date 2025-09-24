import React from 'react';

interface AsomedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AsomedLogo: React.FC<AsomedLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20'
  };

  return (
    <div className={`inline-flex items-center ${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 280 60"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="medical-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Stethoscope integrated with letters */}
        <g>
          {/* Letter A with stethoscope curve */}
          <path
            d="M15 45 L25 15 L35 45 M20 35 L30 35"
            stroke="url(#text-gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter S - improved legibility */}
          <path
            d="M65 20 Q50 15 45 25 Q50 30 55 30 Q60 30 65 35 Q60 45 45 40"
            stroke="url(#text-gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Letter O - stethoscope chest piece */}
          <circle
            cx="80"
            cy="30"
            r="12"
            stroke="url(#medical-gradient)"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="80"
            cy="30"
            r="6"
            fill="url(#medical-gradient)"
            opacity="0.3"
          />

          {/* Letter M */}
          <path
            d="M105 45 L105 15 L115 30 L125 15 L125 45"
            stroke="url(#text-gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter E */}
          <path
            d="M140 45 L140 15 L155 15 M140 30 L150 30 M140 45 L155 45"
            stroke="url(#text-gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter D - curved like stethoscope earpiece */}
          <path
            d="M170 15 L170 45 L170 15 Q185 15 185 30 Q185 45 170 45"
            stroke="url(#text-gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stethoscope tube connecting letters */}
          <path
            d="M50 35 Q70 25 95 35"
            stroke="url(#medical-gradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Stethoscope earpieces */}
          <circle cx="45" cy="35" r="3" fill="url(#medical-gradient)" />
          <circle cx="97" cy="33" r="3" fill="url(#medical-gradient)" />

          {/* Medical cross accent */}
          <g transform="translate(200, 20)">
            <rect x="8" y="4" width="4" height="12" fill="url(#medical-gradient)" rx="2" />
            <rect x="4" y="8" width="12" height="4" fill="url(#medical-gradient)" rx="2" />
          </g>

          {/* SPA text */}
          <text
            x="230"
            y="40"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="16"
            fontWeight="300"
            fill="url(#text-gradient)"
          >
            SPA
          </text>
        </g>

        {/* Heartbeat line accent */}
        <path
          d="M20 55 L30 55 L35 50 L40 60 L45 40 L50 55 L180 55"
          stroke="url(#medical-gradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default AsomedLogo;
