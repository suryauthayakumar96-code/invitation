import { weddingDetails as d } from '../data/weddingDetails';
import { Lotus, Mandala, Ornament } from './Ornaments';
import Reveal from './Reveal';
import TiltFrame from './TiltFrame';
import AnimatedHeading from './AnimatedHeading';
export function PhotoPlaceholder({ src, alt, kind = 'lotus', className = '', aspectRatio }) {
  return <TiltFrame><div className={`photo-placeholder ${kind} ${className}`} style={aspectRatio ? { aspectRatio } : undefined}>{src ? <img src={src} alt={alt} loading="lazy" onError={e => { e.currentTarget.hidden = true; e.currentTarget.parentElement.classList.add('image-unavailable'); }}/> : null}<div className="photo-fallback" aria-hidden={src ? 'true' : undefined}>{kind === 'mandala' ? <Mandala/> : <Lotus/>}<span>{src ? 'A memory to treasure' : 'A beautiful memory awaits'}</span></div></div></TiltFrame>;
}
export default function CoupleSection() {
  return <section id="couple" className="couple-section section-pad"><div className="section-heading"><Reveal><p className="eyebrow">Written in the stars</p><AnimatedHeading text="Two hearts. One forever."/><Ornament/></Reveal></div><Reveal className="couple-feature-photo"><PhotoPlaceholder src={d.photos.portrait || d.photos.couple} alt={`${d.groom} and ${d.bride} together at the temple`} aspectRatio={d.photos.portraitAspectRatio}/></Reveal><Reveal className="couple-feature-names"><h3>{d.groom}</h3><span>&</span><h3>{d.bride}</h3></Reveal><Reveal><p className="couple-copy body-copy">{d.copy.couple}</p></Reveal></section>;
}
