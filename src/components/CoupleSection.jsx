import { weddingDetails as d } from '../data/weddingDetails';
import { Lotus, Mandala, Ornament } from './Ornaments';
import Reveal from './Reveal';
import TiltFrame from './TiltFrame';
import { LoveThread } from './CinematicDetails';
import AnimatedHeading from './AnimatedHeading';
export function PhotoPlaceholder({ src, alt, kind = 'lotus', className = '', aspectRatio }) {
  return <TiltFrame><div className={`photo-placeholder ${kind} ${className}`} style={aspectRatio ? { aspectRatio } : undefined}>{src ? <img src={src} alt={alt} loading="lazy" onError={e => { e.currentTarget.hidden = true; e.currentTarget.parentElement.classList.add('image-unavailable'); }}/> : null}<div className="photo-fallback" aria-hidden={src ? 'true' : undefined}>{kind === 'mandala' ? <Mandala/> : <Lotus/>}<span>{src ? 'A memory to treasure' : 'A beautiful memory awaits'}</span></div></div></TiltFrame>;
}
export default function CoupleSection() {
  return <section id="couple" className="couple-section section-pad"><div className="section-heading"><Reveal><p className="eyebrow">Written in the stars</p><AnimatedHeading text="Two hearts. One forever."/><Ornament/></Reveal></div><div className="couple-portraits"><LoveThread/><Reveal className="portrait groom" direction="right"><PhotoPlaceholder src={d.photos.groom} alt={`Portrait of ${d.groom}`} kind="mandala"/><p className="eyebrow">The groom</p><h3>{d.groom}</h3></Reveal><span className="couple-amp">&</span><Reveal className="portrait bride" direction="left" delay={.15}><PhotoPlaceholder src={d.photos.bride} alt={`Portrait of ${d.bride}`}/><p className="eyebrow">The bride</p><h3>{d.bride}</h3></Reveal></div><Reveal><p className="couple-copy body-copy">{d.copy.couple}</p></Reveal></section>;
}
