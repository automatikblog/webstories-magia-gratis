
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

declare global {
  interface Window {
    MauticSDK?: any;
    MauticSDKLoaded?: boolean;
    MauticDomain?: string;
    MauticLang?: any;
  }
}

export const useMauticIntegration = () => {
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window.MauticSDKLoaded === 'undefined') {
      window.MauticSDKLoaded = true;
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://mautic.automatiklabs.com/media/js/mautic-form.js?ve1eb61ac';
      script.onload = function() {
        if (window.MauticSDK) {
          window.MauticSDK.onLoad();
        }
      };
      head.appendChild(script);
      window.MauticDomain = 'https://mautic.automatiklabs.com';
      window.MauticLang = {
        'submittingMessage': "Por favor, aguarde..."
      };
    } else if (window.MauticSDK) {
      window.MauticSDK.onLoad();
    }
  }, []);

  return { toast };
};

export const MauticHiddenForm = () => {
  return (
    <div className="hidden">
      <div id="mauticform_wrapper_appwebstories" className="mauticform_wrapper">
        <form 
          autoComplete="false" 
          role="form" 
          method="post" 
          action="https://mautic.automatiklabs.com/form/submit?formId=15" 
          id="mauticform_appwebstories" 
          data-mautic-form="appwebstories" 
          encType="multipart/form-data"
        >
          <div className="mauticform-error" id="mauticform_appwebstories_error"></div>
          <div className="mauticform-message" id="mauticform_appwebstories_message"></div>
          <div className="mauticform-innerform">
            <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
              
              <div id="mauticform_appwebstories_nome" className="mauticform-row mauticform-text mauticform-field-1">
                <textarea 
                  id="mauticform_input_appwebstories_nome" 
                  name="mauticform[nome]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_email" className="mauticform-row mauticform-email mauticform-field-2 mauticform-required">
                <input 
                  id="mauticform_input_appwebstories_email" 
                  name="mauticform[email]" 
                  defaultValue="" 
                  className="mauticform-input" 
                  type="email" 
                />
              </div>
              
              <div id="mauticform_appwebstories_telefone" className="mauticform-row mauticform-text mauticform-field-3 mauticform-required">
                <textarea 
                  id="mauticform_input_appwebstories_telefone" 
                  name="mauticform[telefone]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_utm_source" className="mauticform-row mauticform-text mauticform-field-4">
                <textarea 
                  id="mauticform_input_appwebstories_utm_source" 
                  name="mauticform[utm_source]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_utm_campaign" className="mauticform-row mauticform-text mauticform-field-5">
                <textarea 
                  id="mauticform_input_appwebstories_utm_campaign" 
                  name="mauticform[utm_campaign]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_utm_medium" className="mauticform-row mauticform-text mauticform-field-6">
                <textarea 
                  id="mauticform_input_appwebstories_utm_medium" 
                  name="mauticform[utm_medium]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_utm_content" className="mauticform-row mauticform-text mauticform-field-7">
                <textarea 
                  id="mauticform_input_appwebstories_utm_content" 
                  name="mauticform[utm_content]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_utm_term" className="mauticform-row mauticform-text mauticform-field-8">
                <textarea 
                  id="mauticform_input_appwebstories_utm_term" 
                  name="mauticform[utm_term]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_cidade" className="mauticform-row mauticform-text mauticform-field-9">
                <textarea 
                  id="mauticform_input_appwebstories_cidade" 
                  name="mauticform[cidade]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_estado" className="mauticform-row mauticform-text mauticform-field-10">
                <textarea 
                  id="mauticform_input_appwebstories_estado" 
                  name="mauticform[estado]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_pais" className="mauticform-row mauticform-text mauticform-field-11">
                <textarea 
                  id="mauticform_input_appwebstories_pais" 
                  name="mauticform[pais]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_dispositivo" className="mauticform-row mauticform-text mauticform-field-12">
                <textarea 
                  id="mauticform_input_appwebstories_dispositivo" 
                  name="mauticform[dispositivo]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_url_pagina" className="mauticform-row mauticform-text mauticform-field-13">
                <textarea 
                  id="mauticform_input_appwebstories_url_pagina" 
                  name="mauticform[url_pagina]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_app_blogwp" className="mauticform-row mauticform-select mauticform-field-14 mauticform-required">
                <select 
                  id="mauticform_input_appwebstories_app_blogwp" 
                  name="mauticform[app_blogwp]" 
                  defaultValue="" 
                  className="mauticform-selectbox"
                >
                  <option value=""></option>
                  <option value="WordPress">WordPress</option>
                  <option value="Blogger">Blogger</option>
                  <option value="Wix">Wix</option>
                  <option value="Não tenho blog">Não tenho blog</option>
                  <option value="Não tenho, mas pretendo criar">Não tenho, mas pretendo criar</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              
              <div id="mauticform_appwebstories_perfil" className="mauticform-row mauticform-select mauticform-field-16 mauticform-required">
                <select 
                  id="mauticform_input_appwebstories_perfil" 
                  name="mauticform[perfil]" 
                  defaultValue="" 
                  className="mauticform-selectbox"
                >
                  <option value=""></option>
                  <option value="Sou dono de negócio">Sou dono de negócio</option>
                  <option value="Tenho uma agência de marketing">Tenho uma agência de marketing</option>
                  <option value="Sou especialista em SEO">Sou especialista em SEO</option>
                  <option value="Sou freelancer">Sou freelancer</option>
                  <option value="Sou afiliado">Sou afiliado</option>
                  <option value="Trabalho em agência de marketing">Trabalho em agência de marketing</option>
                  <option value="Tenho um blog pessoal ou projeto próprio">Tenho um blog pessoal ou projeto próprio</option>
                  <option value="Tenho um portal de notícias">Tenho um portal de notícias</option>
                </select>
              </div>
              
              <div id="mauticform_appwebstories_app_plano" className="mauticform-row mauticform-text mauticform-field-17">
                <input 
                  id="mauticform_input_appwebstories_app_plano" 
                  name="mauticform[app_plano]" 
                  defaultValue="" 
                  className="mauticform-input" 
                  type="text" 
                />
              </div>
              
              <div id="mauticform_appwebstories_referrer" className="mauticform-row mauticform-text">
                <textarea 
                  id="mauticform_input_appwebstories_referrer" 
                  name="mauticform[referrer]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_user_agent" className="mauticform-row mauticform-text">
                <textarea 
                  id="mauticform_input_appwebstories_user_agent" 
                  name="mauticform[user_agent]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_screen_resolution" className="mauticform-row mauticform-text">
                <textarea 
                  id="mauticform_input_appwebstories_screen_resolution" 
                  name="mauticform[screen_resolution]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_timezone" className="mauticform-row mauticform-text">
                <textarea 
                  id="mauticform_input_appwebstories_timezone" 
                  name="mauticform[timezone]" 
                  className="mauticform-textarea"
                  defaultValue=""
                ></textarea>
              </div>
              
              <div id="mauticform_appwebstories_clickid" className="mauticform-row mauticform-text">
                <input 
                  id="mauticform_input_appwebstories_clickid" 
                  name="mauticform[clickid]" 
                  defaultValue="" 
                  className="mauticform-input" 
                  type="text" 
                />
              </div>
              
              <div id="mauticform_appwebstories_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-18">
                <button 
                  type="submit" 
                  name="mauticform[submit]" 
                  id="mauticform_input_appwebstories_submit" 
                  defaultValue="" 
                  className="mauticform-button btn btn-default"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
          
          <input type="hidden" name="mauticform[formId]" id="mauticform_appwebstories_id" value="15" />
          <input type="hidden" name="mauticform[return]" id="mauticform_appwebstories_return" value="" />
          <input type="hidden" name="mauticform[formName]" id="mauticform_appwebstories_name" value="appwebstories" />
        </form>
      </div>
    </div>
  );
};
