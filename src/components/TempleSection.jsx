import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TempleArt, Vel, Ornament } from './Ornaments';
import { weddingDetails as d } from '../data/weddingDetails';
import Reveal from './Reveal';
export default function TempleSection() {
  const scene = useRef(null); const art = useRef(null);
  useEffect(() => { const media = gsap.matchMedia(); media.add('(prefers-reduced-motion: no-preference)', () => { gsap.fromTo(art.current, { scale: 1.16, yPercent: -5 }, { scale: 1, yPercent: 5, ease: 'none', scrollTrigger: { trigger: scene.current, start: 'top bottom', end: 'bottom top', scrub: 1 } }); }); return () => media.revert(); }, []);
  return <section id="temple" className="temple-section" ref={scene}><div className="temple-image" ref={art}>{(d.photos.temple || d.artwork.temple) ? <img src={d.photos.temple || d.artwork.temple} alt={d.photos.temple ? d.venue : "Illustrated Tamil temple garden"} loading="lazy"/> : <TempleArt/>}</div><div className="temple-shade"/><div className="temple-border"/><Reveal className="temple-content"><Vel/><p className="eyebrow">With the blessings of Lord Murugan</p><h2>A sacred place.<br/><em>A beautiful beginning.</em></h2><Ornament/><h3>{d.venue}</h3><p className="eyebrow">{d.location}</p><p className="temple-copy">{d.copy.temple}</p></Reveal></section>;
}
