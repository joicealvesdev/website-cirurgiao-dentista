import { ArrowDown, ArrowUpRight, Camera, MapPin, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { BotaoWhatsApp } from "./components/BotaoWhatsApp";
import { Cabecalho } from "./components/Cabecalho";
import { CarrosselConquistas } from "./components/CarrosselConquistas";
import { TituloSecao } from "./components/TituloSecao";
import type { Achievement, Specialty, Testimonial } from "./types";

const siteConfig = {
  professionalName: "José Artur Cirurgião Dentista",
  shortName: "José Artur Cirurgião Dentista",
  profession: "Cirurgião-Dentista",
  specialty: "Cirurgia e Traumatologia Bucomaxilofacial",
  registration: "CRO/PE 22700",
  whatsappNumber: "5581994633645",
  whatsappMessage:
    "Olá, Dr. Artur! Gostaria de agendar uma consulta ou obter mais informações.",
  phone: "(81) 9 9463-3645",
  email: "josearturr@gmail.com",
  instagram: "@arturalvzz",
  address: "Belo Jardim - PE",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Belo+Jardim%2C+PE",
  instagramLink: "https://www.instagram.com/arturalvzz/",
  hours: "Seg a Sex, 8h às 18h",
  heroImage: "/foto-artur-alves.jpeg",
  portraitImage: "/artur-alves-cirurgia.png",
};

const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
const specialties: Specialty[] = [
  {
    number: "01",
    title: "Cirurgias Odontológicas",
    description: "Atuação em procedimentos cirúrgicos ambulatoriais, incluindo extrações simples e complexas, sempre priorizando segurança e bem-estar.",
  },
  {
    number: "02",
    title: "Atendimento Clínico Geral",
    description: "Diagnóstico, planejamento e acompanhamento de tratamentos odontológicos com foco em excelência e cuidado individualizado.",
  },

];
const achievements: Achievement[] = [
  {
    title: "Iniciação Científica",
    institution: "Universidade de Pernambuco",
    year: "2023-2024",
    description: "Avaliação da atividade antimicrobiana do extrato da casca de Cenostigma nordestinum frente a biofilmes orais",
    image: "/laboratorio-jose-artur.jpg",
  },
  {
    title: "OdontoAção",
    institution: "Universidade de Pernambuco",
    year: "2023-2024",
    description: "OdontoAção: prevenção, diagnóstico e tratamento das lesões bucais na população do sertão pernambucano",
    image: "/odontoacao.png",
  },
 
];
const testimonials: Testimonial[] = [
  { quote: "Desde a primeira consulta fui atendida com atenção e muito profissionalismo. Recebi todas as orientações necessárias e me senti segura durante todo o atendimento", author: "Maria de Fatima" },
  { quote: "A dedicação, o cuidado nos detalhes e a forma clara de explicar cada procedimento fizeram toda a diferença na minha experiência.", author: "Antonio Carlos" },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="site-shell" data-theme={isDarkMode ? "dark" : "light"}>
      <Cabecalho nomeCurto={siteConfig.shortName} linkWhatsApp={whatsappLink} />
      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              {siteConfig.profession} <span>•</span> {siteConfig.specialty}
            </p>
            <h1>
              Cuidado preciso para o seu <em>sorriso.</em>
            </h1>
            <p className="hero-lede">
              Um atendimento construído com escuta, planejamento e atenção
              genuína a cada etapa do seu tratamento.
            </p>
            <div className="hero-actions">
              <a
                className="button button--dark"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Agendar avaliação <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#sobre">
                Conhecer o profissional <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-frame">
              <img
                src={siteConfig.heroImage}
                alt="Profissional da área odontológica em seu consultório"
              />
            </div>
            <p className="vertical-note">
              Atendimento individualizado
              <br />
              {siteConfig.address}
            </p>
            <div className="hero-stamp" aria-hidden="true">
              <span>Cuidado</span>
              <strong>com</strong>
              <span>atenção em cada detalhe</span>
            </div>
          </div>
          <div className="scroll-cue">
            <span>Role para explorar</span>
            <ArrowDown size={17} />
          </div>
        </section>

        <section className="intro-band" aria-label="Resumo profissional">
          <div className="section-wrap intro-grid">
            <p className="eyebrow">Uma prática baseada em confiança</p>
            <p>
              Mais do que um procedimento, cada consulta é uma conversa clara
              sobre possibilidades, escolhas e o cuidado que faz sentido para
              você.
            </p>
            <span className="intro-line" />
          </div>
        </section>

        <section className="section-wrap about section-pad" id="sobre">
          <div className="about-image">
            <img
              src={siteConfig.portraitImage}
              alt="Retrato profissional do cirurgião-dentista"
            />
            <span className="image-caption"></span>
          </div>
          <div className="about-copy">
            <TituloSecao
              eyebrow="Sobre o profissional"
              title="Técnica apurada. Presença humana."
              description=""
            />
            <p className="lead-copy">
              Atendimento humanizado, com atenção às necessidades de cada
              paciente e cuidado em todas as etapas. O objetivo é proporcionar
              uma experiência tranquila, segura e acolhedora.
            </p>
            <dl className="credentials">
              <div>
                <dt>Formação</dt>
                <dd>Cirurgião Dentista - Universidade de Pernambuco </dd>
              </div>

              <div>
                <dt>Registro</dt>
                <dd>{siteConfig.registration}</dd>
              </div>
            </dl>
            <a className="text-link" href="#contato">
              Fale com o consultório <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <section className="section-pad specialties" id="especialidades">
          <div className="section-wrap">
            <TituloSecao
              eyebrow="Áreas de atuação"
              title="Tratamentos pensados para a sua história."
            />
            <div className="specialty-list">
              {specialties.map((item) => (
                <article className="specialty-row" key={item.number}>
                  <span className="specialty-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    href="#contato"
                    aria-label={`Conhecer mais sobre ${item.title}`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="achievements section-pad" id="conquistas">
          <div className="section-wrap">
            <div className="achievement-header">
              <TituloSecao
                eyebrow="Trajetória em movimento"
                title="Aprender também é cuidar."
                description="Uma seleção de formações, encontros e experiências que ampliam o olhar sobre a odontologia."
              />
              <span className="section-index"></span>
            </div>
            <CarrosselConquistas items={achievements} />
          </div>
        </section>

        <section
          className="section-wrap section-pad differences"
          id="diferenciais"
        >
          <TituloSecao
            eyebrow="O jeito de atender"
            title="O cuidado aparece nos detalhes."
          />
          <div className="difference-grid">
            <article>
              <span className="difference-index">01</span>
              <h3>Escuta antes de tudo</h3>
              <p>
                Tempo para entender suas expectativas e traduzir cada etapa de
                forma simples.
              </p>
            </article>
            <article>
              <span className="difference-index">02</span>
              <h3>Planejamento individual</h3>
              <p>
                Decisões clínicas construídas para a sua necessidade, com
                transparência.
              </p>
            </article>
            <article>
              <span className="difference-index">03</span>
              <h3>Acompanhamento próximo</h3>
              <p>
                Você sabe o que acontece antes, durante e depois de cada
                atendimento.
              </p>
            </article>
          </div>
        </section>

        <section className="testimonials section-pad">
          <div className="section-wrap testimonials-inner">
            <TituloSecao
              eyebrow="Experiências compartilhadas"
              title="A confiança também se constrói em cada relato."
              align="center"
            />
            <div className="testimonial-list">
              {testimonials.map((item) => (
                <blockquote key={item.author}>
                  <span>“</span>
                  <p>{item.quote}</p>
                  <cite>{item.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" id="contato">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2>
              Vamos conversar sobre
              <br />
              <em>o seu tratamento?</em>
            </h2>
          </div>
          <a
            className="button button--light"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Agendar atendimento <ArrowUpRight size={17} />
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <div className="section-wrap footer-grid">
          <div>
            <a className="brand brand--footer" href="#inicio">
              <img className="brand-mark" src="/dente.svg" alt="" />
              <span>{siteConfig.shortName}</span>
            </a>
            <p className="footer-note">
              {siteConfig.profession}
              <br />
              {siteConfig.specialty}
            </p>
          </div>
          <div>
            <p className="footer-label">Consultório</p>
            <a
              className="footer-address"
              href={siteConfig.mapLink}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={15} /> {siteConfig.address}
            </a>
            <p>{siteConfig.hours}</p>
          </div>
          <div>
            <p className="footer-label">Contato</p>
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <div>
            <p className="footer-label">Acompanhe</p>
            <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer">
              <Camera size={15} /> {siteConfig.instagram}
            </a>
            <a
              href="https://www.linkedin.com/search/results/people/?keywords=Jos%C3%A9%20Artur%20Alves"
              target="_blank"
              rel="noreferrer"
              aria-label="Buscar José Artur Alves no LinkedIn"
            >
              LinkedIn — José Artur
            </a>
          </div>
        </div>
        <div className="section-wrap footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.professionalName}. Todos os
            direitos reservados.
          </span>
          <span>{siteConfig.registration}</span>
        </div>
      </footer>
      <BotaoWhatsApp
        nomeProfissional={siteConfig.professionalName}
        linkWhatsApp={whatsappLink}
      />
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setIsDarkMode((current) => !current)}
        aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
        title={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}

export default App;
