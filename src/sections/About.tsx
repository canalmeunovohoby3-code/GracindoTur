import { FOUNDING_YEAR } from '../data/site'
import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import { IconArrowRight, IconConcierge, IconRoute, IconSparkle, IconUsers } from '../components/Icons'
import './About.css'

const PILLARS = [
  {
    icon: IconRoute,
    title: 'Experiência no mercado',
    text: 'Presença consolidada no setor de transporte de passageiros.',
  },
  {
    icon: IconConcierge,
    title: 'Atendimento personalizado',
    text: 'Cada serviço é pensado conforme a necessidade do cliente.',
  },
  {
    icon: IconUsers,
    title: 'Equipe qualificada',
    text: 'Profissionais preparados para cada etapa do atendimento.',
  },
  {
    icon: IconSparkle,
    title: 'Frota em renovação',
    text: 'Investimento contínuo em modernização e tecnologia.',
  },
]

export function About() {
  return (
    <section className="section about" id="empresa">
      <div className="container about__grid">
        <Reveal className="about__text" variant="left">
          <span className="eyebrow">A empresa</span>
          <h2 className="section-title">
            Transporte pensado para ir além do destino.
          </h2>
          <p className="about__lead">
            Fundada em fevereiro de {FOUNDING_YEAR}, a Gracindo Tur consolidou sua presença no
            mercado mato-grossense por meio da excelência nos serviços prestados, atendimento
            personalizado e compromisso com a satisfação de clientes e parceiros.
          </p>
          <p className="about__paragraph">
            A empresa conta com equipe qualificada e preparada para oferecer uma experiência de
            transporte baseada em segurança, conforto, pontualidade, tranquilidade e atendimento
            personalizado. Investimos continuamente em modernização, tecnologia e renovação da
            frota, acompanhando as tendências e exigências do setor de transporte de passageiros.
          </p>

          <ul className="about__pillars">
            {PILLARS.map(({ icon: Icon, title, text }, index) => (
              <Reveal as="li" key={title} delay={index * 70}>
                <span className="about__pillar-icon">
                  <Icon size={22} />
                </span>
                <span className="about__pillar-text">
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </Reveal>
            ))}
          </ul>

          <a className="about__link" href="#frota">
            Ver nossa frota
            <IconArrowRight size={18} />
          </a>
        </Reveal>

        <Reveal className="about__visual" variant="right" delay={120}>
          <div className="about__year">
            <span className="about__year-number">{FOUNDING_YEAR}</span>
            <span className="about__year-caption">Início da trajetória da Gracindo Tur</span>
          </div>

          <div className="about__media parallax" data-parallax="0.06">
            <Media
              image={{
                src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/2.png',
                alt: 'Ônibus executivo da frota Gracindo Tur',
              }}
              kind="onibus"
            />
          </div>

          <span className="about__badge">
            <span className="about__badge-dot" />
            Transporte executivo em Cuiabá — MT
          </span>
        </Reveal>
      </div>
    </section>
  )
}
