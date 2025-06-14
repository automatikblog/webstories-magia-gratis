
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="text-center py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Gere seu <span className="text-blue-600">Web Stories</span> grátis agora
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Experimente o <strong>Automatik Blog</strong> e receba seu conteúdo direto no WhatsApp
        </p>
        <div className="flex justify-center">
          <ArrowDown className="w-8 h-8 text-blue-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
