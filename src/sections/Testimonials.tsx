import type { Testimonial } from '../types'
import { GOOGLE_RATING, TESTIMONIALS } from '../data/testimonials'
import { IconArrowUpRight } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import './Testimonials.css'

/** Estrelas da nota do depoimento. */
function Stars({ rating }: { rating: number }) {
  return (
    <span className="testimonial__stars" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width={15}
          height={15}
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={1.4}
          aria-hidden
          className={i < rating ? 'is-on' : ''}
        >
          <path d="M12 3.6l2.5 5.1 5.6.8-4 4 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-4 5.6-.8L12 3.6Z" />
        </svg>
      ))}
    </span>
  )
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function TestimonialBody({ item }: { item: Testimonial }) {
  return (
    <>
      <span className="testimonial__mark" aria-hidden>
        &ldquo;
      </span>
      <Stars rating={item.rating} />
      <p className="testimonial__quote">{item.quote}</p>
      <footer className="testimonial__foot">
        <span className="testimonial__avatar" aria-hidden>
          {initials(item.author)}
        </span>
        <span className="testimonial__who">
          <strong>{item.author}</strong>
          <small>{item.meta}</small>
        </span>
        <span className="testimonial__source" aria-hidden>
          <GoogleMark size={16} />
        </span>
      </footer>
    </>
  )
}

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS

  return (
    <section className="section section--fog testimonials" id="depoimentos">
      <div className="container">
        <div className="testimonials__head">
          <Reveal className="testimonials__head-text">
            <span className="eyebrow">Depoimentos</span>
            <h2 className="section-title">Quem viaja com a Gracindo Tur recomenda.</h2>
          </Reveal>

          <Reveal className="testimonials__head-aside" variant="right" delay={80}>
            <a
              className="testimonials__rating"
              href={GOOGLE_RATING.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="testimonials__rating-score">{GOOGLE_RATING.score}</span>
              <span className="testimonials__rating-body">
                <Stars rating={5} />
                <span className="testimonials__rating-text">
                  {GOOGLE_RATING.count} avaliações no Google
                </span>
              </span>
              <span className="testimonials__rating-icon" aria-hidden>
                <IconArrowUpRight size={18} />
              </span>
            </a>
          </Reveal>
        </div>

        <ul className="testimonials__grid">
          <Reveal as="li" className="testimonial testimonial--featured">
            <TestimonialBody item={featured} />
          </Reveal>

          {rest.map((item, index) => (
            <Reveal as="li" key={item.id} className="testimonial" delay={(index + 1) * 80}>
              <TestimonialBody item={item} />
            </Reveal>
          ))}

          <Reveal as="li" className="testimonial testimonial--cta" delay={rest.length * 80}>
            <span className="testimonial__cta-eyebrow">
              <GoogleMark size={18} />
              Google
            </span>
            <h3 className="testimonial__cta-title">Veja todas as avaliações</h3>
            <p className="testimonial__cta-text">
              Nossa reputação é construída viagem após viagem. Leia cada depoimento direto no
              perfil da Gracindo Tur no Google.
            </p>
            <a
              className="btn btn--navy testimonial__cta-btn"
              href={GOOGLE_RATING.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google
              <IconArrowUpRight size={17} />
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}

/** Marca do Google em uma cor só, alinhada ao tom discreto do rodapé do card. */
function GoogleMark({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden>
      <path
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.98-4.33 2.98-7.35Z"
        fill="currentColor"
      />
      <path
        d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.58-4.12H3.06v2.58A10 10 0 0 0 12 22Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path
        d="M6.42 13.92a6 6 0 0 1 0-3.84V7.5H3.06a10 10 0 0 0 0 9l3.36-2.58Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M12 5.96c1.47 0 2.79.5 3.83 1.5l2.87-2.87A10 10 0 0 0 3.06 7.5l3.36 2.58C7.2 7.72 9.4 5.96 12 5.96Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  )
}
