
import { CheckCircle, Zap, MessageCircle, Globe } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-automatik-purple" />,
      title: "Criação Automática",
      description: "Web Stories gerados automaticamente com IA avançada"
    },
    {
      icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
      title: "Entrega no WhatsApp",
      description: "Receba seu conteúdo diretamente no seu WhatsApp"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-automatik-purple" />,
      title: "Otimizado para SEO",
      description: "Conteúdo otimizado para melhor rankeamento no Google"
    },
    {
      icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-automatik-purple" />,
      title: "100% Gratuito",
      description: "Teste completo sem custo, sem compromisso"
    }
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 lg:mb-4 text-center lg:text-left">
          Por que escolher o Automatik Blog?
        </h2>
        <p className="text-gray-600 text-base lg:text-lg text-center lg:text-left">
          A solução completa para criar Web Stories envolventes que convertem visitantes em clientes.
        </p>
      </div>
      
      <div className="space-y-4 lg:space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex-shrink-0 mt-1">
              {benefit.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
