import { useRef } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { Petals, TempleArt } from './Ornaments';
import { BotanicalSpray, TempleFrieze } from './SceneDecorations';
import useSceneScroll from '../hooks/useSceneScroll';
import { weddingDetails as d } from '../data/weddingDetails';
function animateHero(section) {
  const timeline = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: .8 } });
  timeline.to('.temple-sky-art', { yPercent: 13, scale: 1.12, ease: 'none' }, 0)
    .to('.sky-names', { y: -80, opacity: 0, ease: 'none', duration: .4 }, 0)
    .to('.hero-leaves.left', { xPercent: -17, yPercent: 8, rotation: -5, ease: 'none' }, 0)
    .to('.hero-leaves.right', { xPercent: 17, yPercent: 8, rotation: 5, ease: 'none' }, 0);
}
export default function HeroSection() {
  const ref = useRef(null); const reduced = useReducedMotion();
  useSceneScroll(ref, animateHero);
  const reveal = delay => ({ initial: reduced ? false : { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.2, delay } });
  return <section ref={ref} className="hero temple-sky-scene" id="home" aria-label="Wedding invitation"><div className="temple-sky-art">{d.artwork.temple ? <picture><source media="(min-width: 768px)" srcSet={d.artwork.templeWide || d.artwork.temple}/><img src={d.artwork.temple} srcSet={d.artwork.templeSmall ? d.artwork.templeSmall + " 640w, " + d.artwork.temple + " 1024w" : undefined} sizes="(max-width: 767px) 100vw, 750px" alt="An original illustration of a colorful Tamil temple among flowering trees" fetchPriority="high"/></picture> : <TempleArt/>}</div><div className="sky-shade"/><Petals/><div className="sky-names"><Motion.p {...reveal(.1)} className="eyebrow">A love blessed. A forever beginning.</Motion.p><h1><Motion.span {...reveal(.35)}>{d.groom}</Motion.span><Motion.em {...reveal(.6)}>&</Motion.em><Motion.span {...reveal(.8)}>{d.bride}</Motion.span></h1><Motion.p {...reveal(1)} className="sky-date">{d.date}</Motion.p></div><BotanicalSpray className="hero-leaves left"/><BotanicalSpray className="hero-leaves right"/><Motion.a {...reveal(1.2)} className="sky-scroll" href="#date"><span>SCROLL TO UNFOLD OUR STORY</span><ArrowDown size={18}/></Motion.a><TempleFrieze className="hero-frieze"/></section>;
}
