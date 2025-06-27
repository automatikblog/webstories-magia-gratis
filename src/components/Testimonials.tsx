
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária de Blog de Culinária",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "O Automatik Blog revolucionou meu blog! Agora consigo criar Web Stories incríveis em minutos. Meu tráfego aumentou 300% em apenas 2 meses.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Gestor de Marketing Digital",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Impressionante! A qualidade dos Web Stories gerados é profissional. Economizo horas de trabalho e os resultados são fantásticos.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Blogueira de Lifestyle",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Uso o Automatik Blog há 6 meses e não consigo mais trabalhar sem ele. A facilidade de criar conteúdo visual é incrível!",
      rating: 5
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            O que nossos <span className="text-automatik-purple">clientes dizem</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Mais de 10.000 criadores de conteúdo já transformaram seus blogs com o Automatik Blog
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3 lg:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 lg:mb-6 italic text-sm lg:text-base leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full mr-3 lg:mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs lg:text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <div className="bg-white rounded-lg py-6 px-4 sm:px-8 inline-block shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-automatik-purple">10.000+</div>
                <div className="text-xs sm:text-sm text-gray-600">Usuários ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">500k+</div>
                <div className="text-xs sm:text-sm text-gray-600">Web Stories criados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-automatik-purple">4.9/5</div>
                <div className="text-xs sm:text-sm text-gray-600">Avaliação média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
