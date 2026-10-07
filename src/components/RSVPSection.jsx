import { Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { weddingDetails as d } from '../data/weddingDetails';
import { whatsappUrl } from '../lib/events';
import { Lotus, Mandala } from './Ornaments';
import Reveal from './Reveal';
import AnimatedHeading from './AnimatedHeading';

export default function RSVPSection() {
  return <section id="rsvp" className="rsvp-section wishes-section section-pad">
    <Mandala className="rsvp-mandala"/>
    <Reveal className="wishes-content"><Lotus className="wishes-lotus"/><p className="eyebrow">A little love, a lifetime of happiness</p><AnimatedHeading text="Your wishes mean the world to us."/><p className="body-copy">Send your love and blessings as we begin our forever.</p><a className="button whatsapp-button" href={whatsappUrl(d, true)} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Send wishes via WhatsApp <ArrowUpRight size={16}/></a><p className="wishes-signoff"><Heart size={14}/> With love, {d.groom} & {d.bride}</p></Reveal>
  </section>;
}
