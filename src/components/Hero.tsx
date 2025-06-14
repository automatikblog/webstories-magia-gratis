
import { ArrowDown } from "lucide-react";
import { WebStoriesAnimation } from "./WebStoriesAnimation";

export const Hero = () => {
  return (
    <section className="text-center py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-left lg:text-left">
              Gere seu <span className="text-blue-600">Web Stories</span> grátis agora
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed text-left lg:text-left">
              Experimente o <strong>Automatik Blog</strong> e receba seu conteúdo direto no WhatsApp
            </p>
            <div className="text-left lg:text-left">
              <p className="text-lg text-gray-500 mb-4">
                Transforme seus artigos em histórias visuais envolventes
              </p>
              <div className="flex justify-start">
                <ArrowDown className="w-8 h-8 text-blue-600 animate-bounce" />
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
