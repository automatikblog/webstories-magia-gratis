
import { CheckCircle, MessageSquare, Link } from "lucide-react";

export const HowItWorks = () => {
  const scrollToForm = () => {
    const formElement = document.querySelector('#lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: 1,
      title: "Faça seu cadastro",
      description: "Preencha o formulário com seus dados básicos para ter acesso à plataforma.",
      icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
    },
    {
      number: 2,
      title: "Insira o link do artigo",
      description: "Forneça o link do artigo que você deseja transformar em Web Stories.",
      icon: <Link className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
    },
    {
      number: 3,
      title: "Receba seu Web Stories no WhatsApp",
      description: "Seu Web Stories será gerado e enviado diretamente para o seu WhatsApp em minutos.",
      icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            Como funciona em <span className="text-automatik-purple">3 passos simples</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Gerar seu Web Stories é rápido e fácil. Veja como você pode criar seu primeiro Web Stories gratuitamente:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="relative mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-automatik-purple to-automatik-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-automatik-purple text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Indicador visual para mobile */}
                <div className="md:hidden flex justify-center mt-4">
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-6 bg-automatik-purple/30"></div>
                  )}
                </div>
                
                {/* Seta para desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 text-automatik-purple">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-automatik-purple to-automatik-purple-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 touch-manipulation"
          >
            Gerar meu Web Stories grátis
          </button>
        </div>
      </div>
    </section>
  );
};
