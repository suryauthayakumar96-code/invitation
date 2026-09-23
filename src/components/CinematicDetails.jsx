import { motion as Motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const reduced = useReducedMotion();
  return <Motion.div className="reading-progress" style={{ scaleX: reduced ? scrollYProgress : smooth }} aria-hidden="true"/>;
}

export function Fireflies() {
  return <div className="fireflies" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <i key={i} style={{ left: `${(i * 29 + 8) % 100}%`, top: `${(i * 37 + 12) % 100}%`, '--delay': `${-i * 1.4}s`, '--duration': `${5 + i % 4}s` }}/>)}</div>;
}

export function LoveThread() {
  const reduced = useReducedMotion();
  return <svg className="love-thread" viewBox="0 0 800 150" fill="none" aria-hidden="true"><Motion.path d="M0 110C130 140 190 16 290 80S410 140 425 72C440 14 380 8 400 82C421 12 365 13 373 58C391 138 545 107 608 64S724 18 800 55" stroke="currentColor" strokeWidth="1.4" initial={reduced ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.8, ease: 'easeInOut' }}/></svg>;
}
