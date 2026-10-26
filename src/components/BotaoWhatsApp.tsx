interface BotaoWhatsAppProps {
  nomeProfissional: string;
  linkWhatsApp: string;
}

export function BotaoWhatsApp({ nomeProfissional, linkWhatsApp }: BotaoWhatsAppProps) {
  return (
    <a className="whatsapp-button" href={linkWhatsApp} target="_blank" rel="noreferrer" aria-label={`Conversar com ${nomeProfissional} pelo WhatsApp`} title="Conversar pelo WhatsApp">
      <img className="whatsapp-icon" src={`${import.meta.env.BASE_URL}whatsapp.svg`} alt="" />
    </a>
  );
}
