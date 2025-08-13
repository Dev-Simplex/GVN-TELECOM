import React, { useRef, useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

// Fonte de dados GeoJSON com os estados do Brasil (licença aberta)
// Dataset: Click That Hood (Code for America) – estados do Brasil
// Usaremos o nome do estado para identificar Roraima
const GEO_URL =
	'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson';

// Mapeamento nome -> sigla (normalizado)
const stateNameToUF: Record<string, string> = {
	acre: 'AC',
	alagoas: 'AL',
	amapa: 'AP',
	amazonas: 'AM',
	bahia: 'BA',
	ceara: 'CE',
	'distrito federal': 'DF',
	'espirito santo': 'ES',
	goias: 'GO',
	maranhao: 'MA',
	'mato grosso': 'MT',
	'mato grosso do sul': 'MS',
	'minas gerais': 'MG',
	para: 'PA',
	paraiba: 'PB',
	parana: 'PR',
	pernambuco: 'PE',
	piaui: 'PI',
	'rio de janeiro': 'RJ',
	'rio grande do norte': 'RN',
	'rio grande do sul': 'RS',
	rondonia: 'RO',
	roraima: 'RR',
	'santa catarina': 'SC',
	'sao paulo': 'SP',
	sergipe: 'SE',
	tocantins: 'TO'
};

const normalize = (value?: string) =>
	(value || '')
		.toLowerCase()
		.normalize('NFD')
		.replace(/\p{Diacritic}/gu, '');

const BrazilCoverageMap: React.FC = () => {
    const [hoveredUF, setHoveredUF] = useState<string | null>(null);
    const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    return (
        <div ref={wrapperRef} className="relative w-full h-[480px] md:h-[520px] flex items-center justify-center">
			<ComposableMap
				projection="geoMercator"
				width={980}
				height={700}
                style={{ width: '100%', height: '100%' }}
                projectionConfig={{ scale: 610 }}
			>
                <ZoomableGroup center={[-54, -15]} zoom={2.25}>
					<Geographies geography={GEO_URL}>
						{({ geographies }) =>
							geographies.map((geo) => {
								const stateName = (geo.properties as any)?.name as string;
								const uf = stateNameToUF[normalize(stateName)] || stateName;
								const isUncovered = uf === 'RR';
								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										fill={isUncovered ? '#9ca3af' : '#8b5cf6'}
										stroke={isUncovered ? '#6b7280' : '#6d28d9'}
										strokeWidth={0.6}
										style={{
											default: { outline: 'none', cursor: 'default' },
											hover: { fill: isUncovered ? '#a3a3a3' : '#7c3aed', outline: 'none' },
											pressed: { fill: isUncovered ? '#a3a3a3' : '#6d28d9', outline: 'none' }
										}}
                                        onMouseEnter={(e) => {
                                            setHoveredUF(uf);
                                            const rect = wrapperRef.current?.getBoundingClientRect();
                                            if (rect) setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                                        }}
                                        onMouseMove={(e) => {
                                            const rect = wrapperRef.current?.getBoundingClientRect();
                                            if (rect)
                                                setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredUF(null);
                                            setTooltipPos(null);
                                        }}
									>
                                        {/* title não é suportado como filho por Geography; usamos overlay */}
									</Geography>
								);
							})
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
            {hoveredUF && tooltipPos && (
                <div
                    className="pointer-events-none absolute bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded shadow"
                    style={{ left: tooltipPos.x + 10, top: tooltipPos.y - 26 }}
                >
                    {hoveredUF}
                </div>
            )}
		</div>
	);
};

export default BrazilCoverageMap;
