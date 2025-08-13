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
    md: 'h-10',
    lg: 'h-14'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  const subtitleSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  // Escolher a versão do logo baseado na variante
  const getLogoSrc = () => {
    const logoSrc = variant === 'white' 
      ? '/assets/images/gvn_logo_white.svg'
      : '/assets/images/gvn_logo.svg';
    
    // Debug: verificar se a imagem está carregando
    console.log('Logo src:', logoSrc);
    
    return logoSrc;
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={getLogoSrc()} 
        alt="GVN Telecom" 
        className={`${sizeClasses[size]} w-auto object-contain`}
        onError={(e) => {
          console.error('Erro ao carregar logo:', e);
          // Fallback para texto se a imagem falhar
          e.currentTarget.style.display = 'none';
        }}
      />
      {showText && (
        <div className="ml-2 flex flex-col">
          <h1 className={`${textSizes[size]} font-bold leading-tight ${variant === 'white' ? 'text-white' : 'text-gray-900'}`}>
            GVN Telecom
          </h1>
          <p className={`${subtitleSizes[size]} font-medium leading-tight ${variant === 'white' ? 'text-purple-300' : 'text-purple-600'}`}>
            Telefonia SIP
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
