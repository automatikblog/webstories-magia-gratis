
import { ExternalLink } from "lucide-react";

export const WebStoriesExamples = () => {
  const scrollToForm = () => {
    const formElement = document.querySelector('#lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const examples = [
    {
      title: "Descubra como Google vai transformar a educação no Brasil com IA",
      url: "https://automatikblog.com/webstories/descubra-como-google-vai-transformar-a-educacao-no-brasil-com-ia/",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop"
    },
    {
      title: "Descubra o segredo do brownie recheado com frutas vermelhas",
      url: "https://automatikblog.com/webstories/descubra-o-segredo-do-brownie-recheado-com-frutas-vermelhas-e-mais/",
      category: "Culinária",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=600&fit=crop"
    },
    {
      title: "Como a inteligência artificial transforma nosso cotidiano e trabalho",
      url: "https://automatikblog.com/webstories/descubra-como-a-inteligencia-artificial-transforma-nosso-cotidiano-e-trabalho/",
      category: "IA & Futuro",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            Exemplos de <span className="text-automatik-purple">Web Stories</span> criados
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Veja alguns exemplos de Web Stories que nossos usuários já criaram com o Automatik Blog
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {examples.map((example, index) => (
              <div key={index} className="group cursor-pointer">
                <a 
                  href={example.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block touch-manipulation"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                    <div 
                      className="aspect-[3/4] sm:aspect-[9/16] bg-cover bg-center"
                      style={{ backgroundImage: `url(${example.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                      
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="bg-automatik-purple text-white px-2 sm:px-3 py-1 text-xs font-bold rounded-full">
                          {example.category}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <h3 className="text-white font-bold text-sm sm:text-lg mb-2 leading-tight">
                          {example.title}
                        </h3>
                        
                        <div className="flex items-center text-white/80 text-xs sm:text-sm">
                          <span>Ver Web Story</span>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-automatik-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <p className="text-gray-600 mb-4 lg:mb-6 px-4">
            Quer criar Web Stories como estes? É simples e gratuito!
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-automatik-purple to-automatik-purple-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 touch-manipulation"
          >
            Criar meu Web Story grátis
          </button>
        </div>
      </div>
    </section>
  );
};
