
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useFormData } from "@/components/forms/FormData";
import { useMauticIntegration, MauticHiddenForm } from "@/components/forms/MauticIntegration";
import { useFormSubmission } from "@/components/forms/FormSubmission";

interface LeadFormProps {
  onSubmit?: (redirectUrl: string) => void;
}

export const LeadForm = ({ onSubmit }: LeadFormProps) => {
  const formData = useFormData();
  const { submitForm } = useFormSubmission();
  
  // Initialize Mautic integration
  useMauticIntegration();

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData.setWhatsapp(formatWhatsApp(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.formSubmitted) {
      return;
    }

    await submitForm(formData, formData.getCookieRaw);
  };

  if (formData.formSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto shadow-lg border-2 border-automatik-purple/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Formulário enviado com sucesso!
          </h3>
          <p className="text-gray-600">
            Você receberá seu Web Stories no WhatsApp em breve.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="w-full max-w-md mx-auto shadow-lg border-2 border-automatik-purple/20">
        <CardHeader className="text-center bg-gradient-to-r from-automatik-purple to-automatik-purple-light text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">
            Receba seu Web Stories GRÁTIS
          </CardTitle>
          <p className="text-purple-100">
            Preencha os dados abaixo e receba no WhatsApp
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Nome Completo *
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => formData.setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-automatik-purple focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => formData.setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-automatik-purple focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
                WhatsApp *
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={handleWhatsAppChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-automatik-purple focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hasWordPressBlog" className="text-sm font-medium text-gray-700">
                Você tem blog em WordPress? *
              </Label>
              <Select value={formData.blogWp} onValueChange={(value) => formData.setBlogWp(value)}>
                <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-automatik-purple focus:border-transparent">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <SelectItem value="Sim">Sim</SelectItem>
                  <SelectItem value="Não">Não</SelectItem>
                  <SelectItem value="interesse em criar">Não, mas pretendo criar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={formData.isSubmitting}
              className="w-full bg-gradient-to-r from-automatik-purple to-automatik-purple-light hover:from-automatik-purple-dark hover:to-automatik-purple text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {formData.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Gerando seu Web Stories...
                </>
              ) : (
                "Gerar Web Stories Grátis"
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              * Campos obrigatórios. Seus dados estão seguros conosco.
            </p>
          </form>
        </CardContent>
      </Card>
      
      <MauticHiddenForm />
    </>
  );
};
