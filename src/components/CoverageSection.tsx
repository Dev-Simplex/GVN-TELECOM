import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import whatsappWhite from '/assets/images/whatsapp-svgrepo-branca.svg';
import BrazilCoverageMap from './BrazilCoverageMap';
import { openWhatsAppCoverage } from '../utils/whatsapp';

const CoverageSection: React.FC = () => {
	return (
		<section id="coverage" className="py-12 sm:py-16 lg:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16">
					<div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full mb-4 sm:mb-6">
						<MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
					</div>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Atendemos a Nível Brasil
					</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Consulte a disponibilidade em sua cidade. Estados cobertos em roxo e não cobertos em cinza.
                    </p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
					<div className="relative">
						<div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-4 md:p-8 shadow-lg">
							<BrazilCoverageMap />
							<div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
								<div className="flex items-center space-x-2">
									<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded bg-purple-600"></span>
									<span className="text-xs sm:text-sm text-gray-700">Estados Cobertos</span>
								</div>
                                <div className="flex items-center space-x-2">
                                    <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded bg-gray-400"></span>
                                    <span className="text-xs sm:text-sm text-gray-700">Estados Não Cobertos</span>
                                </div>
							</div>
						</div>
					</div>

					<div className="space-y-6 sm:space-y-8">
						<div>
							<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Cobertura Nacional</h3>
							<div className="space-y-3 sm:space-y-4">
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-1 flex-shrink-0" />
									<div>
                                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">26 Estados + DF</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Atendimento em 26 estados brasileiros + Distrito Federal</p>
									</div>
								</div>
							</div>
						</div>

                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white">
							<div className="text-center">
                                <img src={whatsappWhite} alt="WhatsApp" className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
								<h3 className="text-lg sm:text-xl font-bold mb-2">Verifique a Disponibilidade</h3>
								<p className="text-sm sm:text-base text-purple-100 mb-4 sm:mb-6">Fale agora com um especialista e confirme a disponibilidade na sua cidade.</p>
								<button
									onClick={openWhatsAppCoverage}
                                    className="bg-white text-purple-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
								>
                                    <img src={whatsappWhite} alt="WhatsApp" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                    Consultar Disponibilidade
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoverageSection;
