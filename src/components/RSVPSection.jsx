import { CalendarPlus, Heart, MessageCircle } from 'lucide-react';
import { weddingDetails as d } from '../data/weddingDetails';
import { whatsappUrl, downloadCalendar } from '../lib/events';
import { Lotus } from './Ornaments';
import Reveal from './Reveal';
export default function RSVPSection() {
  return <section id="rsvp" className="rsvp-section section-pad"><Reveal><Lotus/><p className="eyebrow">Our day is complete with you</p><h2>Be part of our <em>forever.</em></h2><p className="body-copy">{d.copy.rsvp}</p>{d.whatsappNumber ? <><p className="rsvp-question">Will you join us?</p><div className="rsvp-buttons"><a className="button maroon-button" target="_blank" rel="noreferrer" href={whatsappUrl(d)}><Heart size={16}/> Yes, I’ll be there</a><a className="button outline-button" target="_blank" rel="noreferrer" href={whatsappUrl(d,true)}><MessageCircle size={16}/> Send wishes</a></div></> : <button className="button maroon-button" onClick={() => downloadCalendar(d)}><CalendarPlus size={17}/> Save our special day</button>}</Reveal></section>;
}
