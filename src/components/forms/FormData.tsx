
import { useState, useEffect } from 'react';

export const useFormData = () => {
  // Main form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [blogWp, setBlogWp] = useState('');
  const [blogGeraReceita, setBlogGeraReceita] = useState('');
  const [perfil, setPerfil] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Hidden fields for Mautic
  const [location, setLocation] = useState('');
  const [device, setDevice] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [utmSource, setUtmSource] = useState('');
  const [utmMedium, setUtmMedium] = useState('');
  const [utmCampaign, setUtmCampaign] = useState('');
  const [utmContent, setUtmContent] = useState('');
  const [utmTerm, setUtmTerm] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [referrer, setReferrer] = useState('');
  const [userAgent, setUserAgent] = useState('');
  const [screenResolution, setScreenResolution] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [clickId, setClickId] = useState('');

  // Function to read cookie exactly as is
  const getCookieRaw = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return (parts.length === 2) ? parts.pop()?.split(';').shift() : '';
  };

  // Function to detect operating system
  const detectarSistemaOperacional = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any)['opera'];
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }
    if (/win/i.test(userAgent)) {
      return "Windows";
    }
    if (/android/i.test(userAgent)) {
      return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any)['MSStream']) {
      return "iOS";
    }
    if (/macintosh/i.test(userAgent)) {
      return "Mac OS";
    }
    if (/linux/i.test(userAgent)) {
      return "Linux";
    }
    return "Desconhecido";
  };

  // Function to get UTM parameters from URL
  const obterParametrosUTM = () => {
    const urlParams = new URLSearchParams(window.location.search);
    setUtmSource(urlParams.get('utm_source') || '');
    setUtmMedium(urlParams.get('utm_medium') || '');
    setUtmCampaign(urlParams.get('utm_campaign') || '');
    setUtmContent(urlParams.get('utm_content') || '');
    setUtmTerm(urlParams.get('utm_term') || '');
    setClickId(getCookieRaw('mcclickid-store') || '');
  };

  // Function to get location data
  const obterLocalizacao = async () => {
    try {
      const response = await fetch("https://ipinfo.io/json");
      const data = await response.json();
      setCity(data.city || '');
      setState(data.region || '');
      setCountry(data.country || '');
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  useEffect(() => {
    // Initialize all data collection
    obterLocalizacao();
    setDevice(detectarSistemaOperacional());
    obterParametrosUTM();
    
    // Set device and user agent
    setUserAgent(navigator.userAgent);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setDevice('mobile');
    } else {
      setDevice('desktop');
    }
    
    // Screen resolution
    setScreenResolution(`${window.screen.width}x${window.screen.height}`);
    
    // Current URL and referrer
    setCurrentUrl(window.location.href);
    setReferrer(document.referrer);
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return {
    // Main form fields
    name, setName,
    email, setEmail,
    whatsapp, setWhatsapp,
    blogWp, setBlogWp,
    blogGeraReceita, setBlogGeraReceita,
    perfil, setPerfil,
    isSubmitting, setIsSubmitting,
    formSubmitted, setFormSubmitted,
    
    // Hidden fields
    location, device, currentUrl, utmSource, utmMedium, utmCampaign,
    utmContent, utmTerm, city, state, country, referrer, userAgent,
    screenResolution, timeZone, clickId,
    
    // Utility functions
    getCookieRaw
  };
};
