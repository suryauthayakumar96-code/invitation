import { motion as Motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export default function TiltFrame({ children, className = '' }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 170, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 170, damping: 24 });
  function move(event) {
    if (reduced || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientY - bounds.top) / bounds.height - .5) * -7);
    y.set(((event.clientX - bounds.left) / bounds.width - .5) * 7);
  }
  return <Motion.div className={`tilt-frame ${className}`} style={reduced ? {} : { rotateX, rotateY, transformPerspective: 1000 }} onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0); }} onPointerCancel={() => { x.set(0); y.set(0); }}>{children}<span className="photo-sheen" aria-hidden="true"/></Motion.div>;
}
