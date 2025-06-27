
import { ArrowDown } from "lucide-react";
import { WebStoriesAnimation } from "./WebStoriesAnimation";

export const Hero = () => {
  return (
    <section className="text-center py-8 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight text-center lg:text-left">
              Gere seu <span className="text-automatik-purple">Web Stories</span> grátis agora
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-8 leading-relaxed text-center lg:text-left">
              Experimente o <strong>Automatik Blog</strong> e receba seu conteúdo direto no WhatsApp
            </p>
            <div className="text-center lg:text-left">
              <p className="text-base lg:text-lg text-gray-500 mb-4">
                Transforme seus artigos em histórias visuais envolventes
              </p>
              <div className="flex justify-center lg:justify-start">
                <ArrowDown className="w-6 h-6 lg:w-8 lg:h-8 text-automatik-purple animate-bounce" />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <WebStoriesAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
