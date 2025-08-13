import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  planPrice?: number;
  planLines?: number;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ 
  isOpen, 
  onClose, 
  planName, 
  planPrice, 
  planLines 
}) => {
  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    openWhatsApp(planName, planPrice, planLines);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Falar com Especialista
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-green-600" />
          </div>
          
          {planName ? (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Contratar {planName}
              </h3>
              <p className="text-gray-600 mb-4">
                Você será redirecionado para o WhatsApp para finalizar a contratação do {planName}.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-purple-700">
                  <strong>Plano:</strong> {planName}<br/>
                  <strong>Valor:</strong> R$ {planPrice}/mês<br/>
                  <strong>Linhas:</strong> {planLines} linha{planLines && planLines > 1 ? 's' : ''} SIP
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Falar com Especialista
              </h3>
              <p className="text-gray-600 mb-4">
                Você será redirecionado para o WhatsApp para conversar com nossa equipe especializada.
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Abrir WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppModal;
