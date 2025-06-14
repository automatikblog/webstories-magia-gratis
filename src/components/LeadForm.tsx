
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface LeadFormProps {
  onSubmit: (redirectUrl: string) => void;
}

export const LeadForm = ({ onSubmit }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    hasWordPressBlog: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already submitted in this session
    if (sessionStorage.getItem('leadSubmitted')) {
      setHasSubmitted(true);
    }

    // Load Mautic script and populate hidden fields
    loadMauticIntegration();
  }, []);

  const loadMauticIntegration = () => {
    // Populate hidden form fields with tracking data
    const populateHiddenFields = () => {
      const hiddenFields = {
        location: getUserLocation(),
        utmSource: getUrlParameter('utm_source') || '',
        utmMedium: getUrlParameter('utm_medium') || '',
        utmCampaign: getUrlParameter('utm_campaign') || '',
        device: getDeviceInfo(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        timestamp: new Date().toISOString()
      };

      console.log('Hidden fields populated:', hiddenFields);
      return hiddenFields;
    };

    populateHiddenFields();
  };

  const getUserLocation = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return `${data.city}, ${data.region}, ${data.country_name}`;
    } catch (error) {
      console.error('Error getting location:', error);
      return 'Unknown';
    }
  };

  const getUrlParameter = (name: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };

  const getDeviceInfo = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return isMobile ? 'Mobile' : 'Desktop';
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData(prev => ({ ...prev, whatsapp: formatted }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe seu nome completo.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor, informe um email válido.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.whatsapp.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe seu WhatsApp.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.hasWordPressBlog) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe se você tem blog em WordPress.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const hashValue = async (value: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const submitToMautic = async (data: any) => {
    try {
      // Simulate Mautic form submission (form ID 13)
      const mauticData = {
        mauticform: {
          formId: 13,
          name: data.fullName,
          email: data.email,
          phone: data.whatsapp,
          wordpress_blog: data.hasWordPressBlog,
          ...data.hiddenFields
        }
      };

      console.log('Submitting to Mautic:', mauticData);
      
      // In a real implementation, this would be an actual API call
      // For now, we'll simulate success
      return { success: true };
    } catch (error) {
      console.error('Mautic submission error:', error);
      throw error;
    }
  };

  const submitToFacebookConversion = async (data: any) => {
    try {
      const hashedEmail = await hashValue(data.email.toLowerCase().trim());
      const hashedPhone = await hashValue(data.whatsapp.replace(/\D/g, ''));

      const fbData = {
        data: [{
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          user_data: {
            em: [hashedEmail],
            ph: [hashedPhone]
          },
          custom_data: {
            wordpress_blog: data.hasWordPressBlog
          }
        }]
      };

      console.log('Submitting to Facebook Conversion API:', fbData);
      
      // In a real implementation, this would be sent to your backend
      // which would then call Facebook's Conversion API
      return { success: true };
    } catch (error) {
      console.error('Facebook Conversion API error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hasSubmitted) {
      toast({
        title: "Já enviado",
        description: "Você já enviou o formulário nesta sessão.",
        variant: "destructive",
      });
      return;
    }

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const hiddenFields = {
        location: await getUserLocation(),
        utmSource: getUrlParameter('utm_source') || '',
        utmMedium: getUrlParameter('utm_medium') || '',
        utmCampaign: getUrlParameter('utm_campaign') || '',
        device: getDeviceInfo(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        timestamp: new Date().toISOString()
      };

      const submissionData = {
        ...formData,
        hiddenFields
      };

      // Submit to Mautic
      await submitToMautic(submissionData);

      // Submit to Facebook Conversion API
      await submitToFacebookConversion(submissionData);

      // Mark as submitted in session
      sessionStorage.setItem('leadSubmitted', 'true');
      setHasSubmitted(true);

      // Determine redirect URL based on WordPress blog choice
      let redirectUrl = '';
      switch (formData.hasWordPressBlog) {
        case 'Sim':
          redirectUrl = '/wordpress-users';
          break;
        case 'Não':
          redirectUrl = '/non-wordpress-users';
          break;
        case 'Não mas pretendo criar':
          redirectUrl = '/future-wordpress-users';
          break;
        default:
          redirectUrl = '/thank-you';
      }

      toast({
        title: "Sucesso!",
        description: "Seu Web Stories gratuito está sendo preparado!",
      });

      // Call the onSubmit callback with redirect URL
      onSubmit(redirectUrl);

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (hasSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto shadow-lg border-2 border-blue-100">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Formulário já enviado!
          </h3>
          <p className="text-gray-600">
            Você já enviou o formulário nesta sessão. Verifique seu WhatsApp para receber seu Web Stories gratuito.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-2 border-blue-100">
      <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">
          Receba seu Web Stories GRÁTIS
        </CardTitle>
        <p className="text-blue-100">
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
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hasWordPressBlog" className="text-sm font-medium text-gray-700">
              Você tem blog em WordPress? *
            </Label>
            <Select value={formData.hasWordPressBlog} onValueChange={(value) => setFormData(prev => ({ ...prev, hasWordPressBlog: value }))}>
              <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <SelectItem value="Sim">Sim</SelectItem>
                <SelectItem value="Não">Não</SelectItem>
                <SelectItem value="Não mas pretendo criar">Não, mas pretendo criar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            {isLoading ? (
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
  );
};
