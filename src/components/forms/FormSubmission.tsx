
import CryptoJS from 'crypto-js';
import { useToast } from '@/hooks/use-toast';

export const useFormSubmission = () => {
  const { toast } = useToast();

  // Function to apply SHA256 using crypto-js
  const hashSHA256 = (data: string) => {
    return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
  };

  const submitForm = async (formData: any, getCookieRaw: (name: string) => string | undefined) => {
    const {
      name, email, whatsapp, blogWp, perfil, setIsSubmitting, setFormSubmitted,
      utmSource, utmMedium, utmCampaign, utmContent, utmTerm,
      city, state, country, device, currentUrl, clickId, referrer,
      userAgent, screenResolution, timeZone
    } = formData;

    setIsSubmitting(true);
    
    console.log('=== DEBUG FORMULÁRIO ===');
    console.log('Valor do blogWp:', blogWp);
    console.log('Valor do perfil:', perfil);
    console.log('========================');
    
    try {
      if (blogWp === 'WordPress') {
        const hashedEmail = hashSHA256(email);
        const hashedPhone = hashSHA256(whatsapp);
        
        // Send data to Facebook
        const facebookResponse = await fetch('https://graph.facebook.com/v12.0/963125738869246/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer EAATN5jopOBcBO7etEK8hDpFkLdgDBhzMYH226HMZCVMeSZC6YtB7QoYP9iZBBHz7GILzpo6tMHhPSK351VpZCsqLS1PSzHjH508nGJmNFitLXobbZCjoZAn4z30UKvdz672qCDRJcnZCZCrtIAOVwLwjYUKBAEaRuogPmKdZCmcflrlfM52yAvhuIIWqxHBPYToABMgZDZD'
          },
          body: JSON.stringify({
            data: [{
              event_name: 'Lead',
              event_time: Math.floor(Date.now() / 1000),
              user_data: {
                email: hashedEmail,
                phone: hashedPhone
              },
              custom_data: {
                content_name: 'signup_free_webstories',
                content_category: 'Web Stories Generation',
                value: 0.00,
                currency: 'BRL',
                status: 'complete',
                lead_type: 'Free Trial'
              }
            }]
          })
        });
        const facebookResult = await facebookResponse.json();
        console.log('Facebook response:', facebookResult);
      }

      // Fill Mautic form fields
      const formElement = document.getElementById('mauticform_appwebstories') as HTMLFormElement;
      if (formElement) {
        const nameInput = document.getElementById('mauticform_input_appwebstories_nome') as HTMLTextAreaElement;
        const emailInput = document.getElementById('mauticform_input_appwebstories_email') as HTMLInputElement;
        const phoneInput = document.getElementById('mauticform_input_appwebstories_telefone') as HTMLTextAreaElement;
        const blogWpSelect = document.getElementById('mauticform_input_appwebstories_app_blogwp') as HTMLSelectElement;
        const perfilSelect = document.getElementById('mauticform_input_appwebstories_perfil') as HTMLSelectElement;
        const utmSourceInput = document.getElementById('mauticform_input_appwebstories_utm_source') as HTMLTextAreaElement;
        const utmMediumInput = document.getElementById('mauticform_input_appwebstories_utm_medium') as HTMLTextAreaElement;
        const utmCampaignInput = document.getElementById('mauticform_input_appwebstories_utm_campaign') as HTMLTextAreaElement;
        const utmContentInput = document.getElementById('mauticform_input_appwebstories_utm_content') as HTMLTextAreaElement;
        const utmTermInput = document.getElementById('mauticform_input_appwebstories_utm_term') as HTMLTextAreaElement;
        const cityInput = document.getElementById('mauticform_input_appwebstories_cidade') as HTMLTextAreaElement;
        const stateInput = document.getElementById('mauticform_input_appwebstories_estado') as HTMLTextAreaElement;
        const countryInput = document.getElementById('mauticform_input_appwebstories_pais') as HTMLTextAreaElement;
        const deviceInput = document.getElementById('mauticform_input_appwebstories_dispositivo') as HTMLTextAreaElement;
        const urlInput = document.getElementById('mauticform_input_appwebstories_url_pagina') as HTMLTextAreaElement;
        const appPlanoInput = document.getElementById('mauticform_input_appwebstories_app_plano') as HTMLInputElement;
        const clickIdInput = document.getElementById('mauticform_input_appwebstories_clickid') as HTMLInputElement;
        const referrerInput = document.getElementById('mauticform_input_appwebstories_referrer') as HTMLTextAreaElement;
        const userAgentInput = document.getElementById('mauticform_input_appwebstories_user_agent') as HTMLTextAreaElement;
        const screenResolutionInput = document.getElementById('mauticform_input_appwebstories_screen_resolution') as HTMLTextAreaElement;
        const timezoneInput = document.getElementById('mauticform_input_appwebstories_timezone') as HTMLTextAreaElement;

        if (nameInput) nameInput.value = name;
        if (emailInput) emailInput.value = email;
        if (phoneInput) phoneInput.value = whatsapp;
        if (blogWpSelect) blogWpSelect.value = blogWp;
        
        // Preenchimento do campo perfil
        if (perfilSelect) {
          perfilSelect.value = perfil || '';
          console.log('=== DEBUG CAMPO PERFIL ===');
          console.log('Valor atribuído ao perfil:', perfil);
          console.log('Valor atual do campo perfil:', perfilSelect.value);
          console.log('==========================');
        } else {
          console.error('ERRO: Campo perfilSelect não encontrado!');
        }
        
        if (utmSourceInput) utmSourceInput.value = utmSource;
        if (utmMediumInput) utmMediumInput.value = utmMedium;
        if (utmCampaignInput) utmCampaignInput.value = utmCampaign;
        if (utmContentInput) utmContentInput.value = utmContent;
        if (utmTermInput) utmTermInput.value = utmTerm;
        if (cityInput) cityInput.value = city;
        if (stateInput) stateInput.value = state;
        if (countryInput) countryInput.value = country;
        if (deviceInput) deviceInput.value = device;
        if (urlInput) urlInput.value = currentUrl;
        if (referrerInput) referrerInput.value = referrer;
        if (userAgentInput) userAgentInput.value = userAgent;
        if (screenResolutionInput) screenResolutionInput.value = screenResolution;
        if (timezoneInput) timezoneInput.value = timeZone;
        if (appPlanoInput) {
          appPlanoInput.value = blogWp === 'WordPress'
            ? 'https://app.automatikblog.com/test-webstories'
            : 'https://cadastro.automatikblog.com/webstories';
        }
        if (clickIdInput) {
          const cookieClickId = getCookieRaw('mcclickid-store');
          clickIdInput.value = cookieClickId || clickId;
        }

        console.log('Preenchendo formulário Mautic com os dados:', {
          name, email, whatsapp, blogWp, perfil, utmSource, utmMedium, utmCampaign,
          city, state, country, device, currentUrl
        });

        // Log final do estado do formulário antes do submit
        console.log('=== ESTADO FINAL DO FORMULÁRIO ===');
        console.log('blogWp final:', blogWpSelect?.value);
        console.log('perfil final:', perfilSelect?.value);
        console.log('==================================');

        // Submit Mautic form
        formElement.submit();
        
        // Mark form as submitted
        setFormSubmitted(true);
        
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Agora você será direcionado para inserir o link do seu artigo.",
        });
      } else {
        console.error('Formulário Mautic não encontrado!');
        toast({
          title: "Erro interno",
          description: "Formulário não encontrado. Por favor, recarregue a página.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm };
};
