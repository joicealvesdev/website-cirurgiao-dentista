import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Achievement } from '../types';

interface CarrosselConquistasProps { items: Achievement[] }

export function CarrosselConquistas({ items }: CarrosselConquistasProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const nextIndex = (index + items.length) % items.length;
    setActiveIndex(nextIndex);
    const nextCard = trackRef.current?.children[nextIndex] as HTMLElement | undefined;
    if (trackRef.current && nextCard) {
      trackRef.current.scrollTo({ left: nextCard.offsetLeft - trackRef.current.offsetLeft, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-toolbar">
        <p className="carousel-status" aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} <span>/ {String(items.length).padStart(2, '0')}</span></p>
        <div className="carousel-arrows">
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Conquista anterior"><ArrowLeft size={18} /></button>
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Próxima conquista"><ArrowRight size={18} /></button>
        </div>
      </div>
      <div className="carousel-track" ref={trackRef} tabIndex={0} aria-label="Conquistas profissionais" onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') goTo(activeIndex - 1);
        if (event.key === 'ArrowRight') goTo(activeIndex + 1);
      }}>
        {items.map((item) => (
          <article className="achievement" key={`${item.title}-${item.year}`}>
            <div className="achievement-image"><img src={item.image} alt="" /></div>
            <div className="achievement-copy">
              <p className="achievement-year">{item.year} <span>{item.institution}</span></p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-dots" role="tablist" aria-label="Selecionar conquista">
        {items.map((item, index) => <button key={item.title} className={index === activeIndex ? 'is-active' : ''} type="button" role="tab" aria-selected={index === activeIndex} aria-label={`Ir para conquista ${index + 1}`} onClick={() => goTo(index)} />)}
      </div>
    </div>
  );
}
