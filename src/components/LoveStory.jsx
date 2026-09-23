import { useRef } from 'react';
import gsap from 'gsap';
import { Heart } from 'lucide-react';
import { weddingDetails as d } from '../data/weddingDetails';
import useSceneScroll from '../hooks/useSceneScroll';
import AnimatedHeading from './AnimatedHeading';
import Reveal from './Reveal';
import { Ornament, Mandala } from './Ornaments';
import { Fireflies } from './CinematicDetails';

function animateStory(section) {
  gsap.fromTo('.story-photo', { y: 35, rotate: -5 }, { y: -25, rotate: 2, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: .8 } });
  gsap.to('.story-mandala', { rotation: 35, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1 } });
}

export default function LoveStory() {
  const ref = useRef(null); useSceneScroll(ref, animateStory);
  if (!d.photos.couple) return null;
  return <section className="love-story section-pad" id="our-moments" ref={ref}>
    <Mandala className="story-mandala"/><Fireflies/>
    <div className="story-layout section-wrap"><div className="story-photo"><img src={d.photos.couple} alt={`${d.groom} and ${d.bride}, illustrated together`} loading="lazy"/><div className="story-photo-label"><Heart size={14}/><span>My person. My always.</span></div><span className="story-seal" aria-hidden="true">{d.groom[0]}<span>♥</span>{d.bride[0]}</span></div>
      <div className="story-copy"><Reveal><p className="eyebrow">The little things. The lasting love.</p></Reveal><AnimatedHeading text={d.copy.storyHeading}/><Reveal delay={.2}><Ornament/><p>{d.copy.story}</p><span className="story-signature">{d.groom} & {d.bride}</span></Reveal></div>
    </div><div className="love-ribbon" aria-hidden="true"><div>{Array.from({ length: 4 }, (_, i) => <span key={i}>{d.groom} <i>&</i> {d.bride}<b>✦</b>A beautiful beginning<b>✦</b></span>)}</div></div>
  </section>;
}
