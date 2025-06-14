
import { useEffect } from "react";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ThankYouProps {
  redirectUrl: string;
}

export const ThankYou = ({ redirectUrl }: ThankYouProps) => {
  useEffect(() => {
    // Optional: Auto-redirect after a delay
    if (redirectUrl && redirectUrl !== '/thank-you') {
      const timer = setTimeout(() => {
        // In a real app, this would navigate to the specific URL
        console.log(`Redirecting to: ${redirectUrl}`);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [redirectUrl]);

  const getRedirectMessage = () => {
    switch (redirectUrl) {
      case '/wordpress-users':
        return "Como você já tem WordPress, vamos te enviar dicas especiais para integração!";
      case '/non-wordpress-users':
        return "Vamos te mostrar como começar mesmo sem WordPress!";
      case '/future-wordpress-users':
        return "Vamos te ajudar a criar seu blog WordPress e otimizá-lo!";
      default:
        return "Fique de olho no seu WhatsApp!";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto shadow-2xl border-2 border-green-200">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Obrigado! 🎉
            </h1>
            <h2 className="text-2xl font-semibold text-green-600 mb-6">
              Seu Web Stories está sendo preparado!
            </h2>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-green-700">
                  Próximos Passos
                </h3>
              </div>
              <p className="text-green-700 text-lg leading-relaxed">
                {getRedirectMessage()}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">
                  ⏰ Tempo de entrega
                </h4>
                <p className="text-blue-600">
                  Em até 5 minutos no seu WhatsApp
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-2">
                  🎁 Bônus incluído
                </h4>
                <p className="text-purple-600">
                  Dicas exclusivas de otimização
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 text-lg">
              Enquanto isso, que tal conhecer mais sobre o Automatik Blog?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://automatikblog.com', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Conhecer Automatik Blog
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold text-lg"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 font-medium">
              💡 Dica: Adicione nosso número nos seus contatos para não perder nenhuma mensagem!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
