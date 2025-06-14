
import { CheckCircle, Zap, MessageCircle, Globe } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Criação Automática",
      description: "Web Stories gerados automaticamente com IA avançada"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: "Entrega no WhatsApp",
      description: "Receba seu conteúdo diretamente no seu WhatsApp"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Otimizado para SEO",
      description: "Conteúdo otimizado para melhor rankeamento no Google"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "100% Gratuito",
      description: "Teste completo sem custo, sem compromisso"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Por que escolher o Automatik Blog?
        </h2>
        <p className="text-gray-600 text-lg">
          A solução completa para criar Web Stories envolventes que convertem visitantes em clientes.
        </p>
      </div>
      
      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex-shrink-0">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
