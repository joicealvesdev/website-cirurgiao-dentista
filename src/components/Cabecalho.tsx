import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface CabecalhoProps {
  nomeCurto: string;
  linkWhatsApp: string;
}

const links = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Especialidades', '#especialidades'],
  ['Conquistas', '#conquistas'],
  ['Diferenciais', '#diferenciais'],
  ['Contato', '#contato'],
];

export function Cabecalho({ nomeCurto, linkWhatsApp }: CabecalhoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Voltar ao início">
        <img className="brand-mark" src={`${import.meta.env.BASE_URL}dente.svg`} alt="" />
        <span>{nomeCurto}</span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="main-navigation" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={22} /> : <Menu size={22} />}
        <span className="sr-only">{isOpen ? 'Fechar menu' : 'Abrir menu'}</span>
      </button>
      <nav id="main-navigation" className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}
        <a className="header-cta" href={linkWhatsApp} target="_blank" rel="noreferrer">Agendar <ArrowUpRight size={16} /></a>
      </nav>
    </header>
  );
}
