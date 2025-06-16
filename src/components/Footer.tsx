
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/3fe2867f-1cf7-416c-aaba-029f125830c8.png" 
                alt="Automatik Blog Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Automatize a criação de conteúdo otimizado para seu blog sem perder a essência humana.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#exemplos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Exemplos
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://automatikblog.com/termos-de-uso/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a 
                  href="https://automatikblog.com/politica-de-privacidade/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                contato@automatikblog.com
              </p>
              <a 
                href="https://instagram.com/automatikblog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@automatikblog</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Automatik Blog. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
