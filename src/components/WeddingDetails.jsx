import { CalendarDays, Clock3, MapPin } from 'lucide-react';
import { weddingDetails as d } from '../data/weddingDetails';
import { Lamp, Ornament, Lotus } from './Ornaments';
import Countdown from './Countdown';
import Reveal from './Reveal';
import { OrnateFrame, BotanicalSpray } from './SceneDecorations';
export default function WeddingDetails() {
  return <section id="celebration" className="wedding-section section-pad"><BotanicalSpray className="left"/><BotanicalSpray className="right"/><Reveal className="invitation-card"><OrnateFrame/><Lotus className="card-lotus"/><p className="eyebrow">With love, we invite you to</p><h2>The <em>Wedding</em></h2><Ornament/><div className="ceremony-grid"><div><CalendarDays/><span className="eyebrow">The auspicious day</span><h3>{d.day}</h3><p>{d.date}</p></div><div><Clock3/><span className="eyebrow">Muhurtham</span><h3>{d.muhurtham}</h3><p>{d.timezoneLabel}</p></div><div><MapPin/><span className="eyebrow">The sacred venue</span><h3>{d.venue}</h3><p>{d.location}</p></div></div>{d.reception && <p className="reception">Reception · {d.reception}</p>}<p className="card-note">Your presence is our most treasured gift.</p><Lamp className="card-lamp left"/><Lamp className="card-lamp right"/></Reveal><Reveal><Countdown/></Reveal></section>;
}
