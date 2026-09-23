import { motion as Motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Lamp, Mandala, Ornament, Petals } from './Ornaments';
import { weddingDetails as d } from '../data/weddingDetails';
import { BotanicalSpray, TempleFrieze } from './SceneDecorations';
import { Fireflies } from './CinematicDetails';
export default function WelcomeScreen({ onOpen }) {
  const reduced = useReducedMotion();
  return <Motion.div className="welcome" exit={{ opacity: 0, y: reduced ? 0 : -35 }} transition={{ duration: reduced ? 0 : 0.8 }}><BotanicalSpray className="left"/><BotanicalSpray className="right"/><TempleFrieze/><div className="welcome-border"/><Fireflies/><Petals/><Mandala className="welcome-mandala"/><Motion.div className="welcome-content" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1 }}><p lang="ta" className="tamil">{d.tamilHeading}</p><Lamp className="welcome-lamp"/><p className="eyebrow">A celebration of love & tradition</p><p className="welcome-intro">You are invited to celebrate<br/>the wedding of</p><h1 className="welcome-names">{d.groom}<span>&</span>{d.bride}</h1><Ornament/><p className="welcome-date">{d.date} <span>•</span> {d.location}</p><button autoFocus className="button gold-button" onClick={onOpen}>Open Invitation <ArrowRight size={17}/></button><p className="sound-note">An invitation best experienced with sound</p></Motion.div><span className="welcome-edition">WITH LOVE, ALWAYS</span></Motion.div>;
}
