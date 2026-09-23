import { useState } from 'react';
import { CalendarPlus, Heart, MessageCircle, ArrowUpRight, Check } from 'lucide-react';
import { weddingDetails as d } from '../data/weddingDetails';
import { whatsappUrl, downloadCalendar } from '../lib/events';
import { Lotus, Mandala } from './Ornaments';
import Reveal from './Reveal';
import AnimatedHeading from './AnimatedHeading';

export default function RSVPSection() {
  const [name, setName] = useState('');
  const [count, setCount] = useState('1');
  const [note, setNote] = useState('');
  const [prepared, setPrepared] = useState(false);
  const reply = new URL(whatsappUrl(d, false, { name, count, note }));
  return <section id="rsvp" className="rsvp-section section-pad">
    <Mandala className="rsvp-mandala"/>
    <div className="rsvp-layout section-wrap"><Reveal className="rsvp-intro"><Lotus/><p className="eyebrow">The only thing missing is you</p><AnimatedHeading text="A seat at our celebration. A place in our hearts."/><p className="body-copy">{d.copy.rsvp}</p><p className="rsvp-personal"><Heart size={15}/> Your presence means the world to us.</p><button className="text-button" onClick={() => downloadCalendar(d)}><CalendarPlus size={16}/> Save our special day</button></Reveal>
      <Reveal className="rsvp-paper" direction="right" delay={.15}><span className="rsvp-paper-number" aria-hidden="true">♥</span><p className="eyebrow">With love, a little reply</p><h3>Will you join us?</h3><p className="rsvp-card-copy">We’d love to know you’re coming.</p><form action={`${reply.origin}${reply.pathname}`} method="get" target="_blank" rel="noopener noreferrer" onSubmit={() => setPrepared(true)}>
        <input type="hidden" name="text" value={reply.searchParams.get('text')}/>
        <div className="rsvp-fields"><label>Your name<input required autoComplete="name" maxLength={100} value={name} onChange={e => { setName(e.target.value); e.target.setCustomValidity(e.target.value.trim() ? "" : "Please enter your name."); setPrepared(false); }} placeholder="Your name"/></label><label>Number attending<select value={count} onChange={e => setCount(e.target.value)}>{Array.from({ length: 10 }, (_, i) => <option key={i} value={i + 1}>{i + 1} {i ? 'guests' : 'guest'}</option>)}</select></label></div>
        <label>A little note <span>(optional)</span><textarea maxLength={500} rows={2} value={note} onChange={e => setNote(e.target.value)} placeholder="Send a little love our way…"/></label>
        <button className="button whatsapp-button" type="submit"><MessageCircle size={17}/> RSVP on WhatsApp <ArrowUpRight size={16}/></button>
        <p className="rsvp-privacy">Your reply opens in WhatsApp. Tap Send there to confirm.</p>
        {prepared && <p className="rsvp-prepared" role="status"><Check size={15}/> Your reply is prepared. Finish by tapping Send in WhatsApp.</p>}
      </form><a className="wishes-link" href={whatsappUrl(d, true)} target="_blank" rel="noreferrer"><Heart size={14}/> Just sending wishes? <span>Send some love ↗</span></a></Reveal>
    </div>
  </section>;
}
