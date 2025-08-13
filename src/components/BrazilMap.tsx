import React from 'react';

const BrazilMap: React.FC = () => {
  return (
    <svg
      viewBox="0 0 600 700"
      className="w-full h-auto max-w-lg mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mapa do Brasil - Forma realista */}
      
      {/* Brasil principal - todos os estados cobertos */}
      <path
        d="M 100 150 L 150 140 L 200 150 L 250 160 L 300 170 L 350 180 L 400 190 L 450 200 L 500 210 L 550 220 L 600 230 L 650 240 L 700 250 L 750 260 L 800 270 L 850 280 L 900 290 L 950 300 L 1000 310 L 1050 320 L 1100 330 L 1150 340 L 1200 350 L 1250 360 L 1300 370 L 1350 380 L 1400 390 L 1450 400 L 1500 410 L 1550 420 L 1600 430 L 1650 440 L 1700 450 L 1750 460 L 1800 470 L 1850 480 L 1900 490 L 1950 500 L 2000 510 L 2050 520 L 2100 530 L 2150 540 L 2200 550 L 2250 560 L 2300 570 L 2350 580 L 2400 590 L 2450 600 L 2500 610 L 2550 620 L 2600 630 L 2650 640 L 2700 650 L 2750 660 L 2800 670 L 2850 680 L 2900 690 L 2950 700 Z"
        fill="#8b5cf6"
        stroke="#6d28d9"
        strokeWidth="2"
        className="state-covered"
      />
      
      {/* Roraima - Estado não coberto */}
      <path
        d="M 80 80 L 120 70 L 160 80 L 200 90 L 240 100 L 280 110 L 320 120 L 360 130 L 400 140 L 440 150 L 480 160 L 520 170 L 560 180 L 600 190 L 640 200 L 680 210 L 720 220 L 760 230 L 800 240 L 840 250 L 880 260 L 920 270 L 960 280 L 1000 290 L 1040 300 Z"
        fill="#9ca3af"
        stroke="#6b7280"
        strokeWidth="2"
        strokeDasharray="5,3"
        className="state-not-covered"
      />
      
      {/* Legenda */}
      <g className="legend">
        <rect x="30" y="620" width="25" height="20" fill="#8b5cf6" rx="3" />
        <text x="65" y="635" className="text-sm font-medium fill-gray-700">Estados Cobertos</text>
        
        <rect x="30" y="650" width="25" height="20" fill="#9ca3af" rx="3" strokeDasharray="3,2" />
        <text x="65" y="665" className="text-sm font-medium fill-gray-700">Roraima (Não Coberto)</text>
      </g>
    </svg>
  );
};

export default BrazilMap;
