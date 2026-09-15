import { weddingDetails as d } from '../data/weddingDetails';
import { TempleArt, Lamp, Ornament } from './Ornaments';
import Reveal from './Reveal';
export default function Footer() {
  const numericDate = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(d.startAt)).replaceAll('/', ' · ');
  return <><section className="closing">{d.artwork.temple ? <img className="closing-art" src={d.artwork.temple} alt="" loading="lazy"/> : <TempleArt/>}<div className="closing-shade"/><Reveal className="closing-content"><p className="eyebrow">{d.copy.closing}</p><h2>{d.groom}<span>&</span>{d.bride}</h2><Ornament/><p className="closing-date">{numericDate}</p><p lang="ta" className="tamil">{d.tamilHeading}</p></Reveal><Lamp className="closing-lamp left"/><Lamp className="closing-lamp right"/></section><footer><p>Made with <span>♥</span> for our special day</p><a href="#home">Back to the beginning ↑</a></footer></>;
}
