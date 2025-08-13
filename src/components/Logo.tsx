import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/assets/images/transparent_logo.png" 
        alt="GVN Telecom" 
        className={`${sizeClasses[size]} w-auto`}
      />
      {showText && (
        <div className="ml-3">
          <h1 className={`${textSizes[size]} font-bold ${variant === 'white' ? 'text-white' : 'text-gray-900'}`}>
            GVN Telecom
          </h1>
          <p className={`text-xs ${variant === 'white' ? 'text-purple-300' : 'text-purple-600'} ${size === 'lg' ? 'text-sm' : ''}`}>
            Telefonia SIP
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
