import { motion as Motion, useReducedMotion } from 'framer-motion';

export default function AnimatedHeading({ text, className = '' }) {
  const reduced = useReducedMotion();
  return <Motion.h2 className={`animated-heading ${className}`} aria-label={text} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .5 }} transition={{ staggerChildren: .09 }}>
    {text.split(' ').map((word, i) => <span className="word-mask" aria-hidden="true" key={`${word}-${i}`}><Motion.span variants={{ hidden: { y: reduced ? 0 : '110%', opacity: reduced ? 1 : 0 }, visible: { y: 0, opacity: 1 } }} transition={{ duration: reduced ? 0 : .8, ease: [.22, 1, .36, 1] }}>{word}</Motion.span></span>)}
  </Motion.h2>;
}
