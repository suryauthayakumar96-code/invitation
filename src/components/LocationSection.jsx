import { ArrowUpRight, MapPin } from 'lucide-react';
import { weddingDetails as d } from '../data/weddingDetails';
import { TempleArt } from './Ornaments';
import Reveal from './Reveal';
export default function LocationSection() {
  return <section id="venue" className="location-section section-pad"><div className="section-wrap location-layout"><Reveal className="location-art">{(d.photos.temple || d.artwork.temple) ? <img src={d.photos.temple || d.artwork.temple} alt={d.photos.temple ? d.venue : "Illustrated Tamil temple garden"} loading="lazy"/> : <TempleArt/>}<span><MapPin size={14}/> {d.location}</span></Reveal><Reveal className="location-copy" delay={.15}><p className="eyebrow">The place we say forever</p><h2>Join <em>us.</em></h2><h3>{d.venue}</h3><p className="body-copy">{d.location}</p><div className="venue-date"><p>{d.day}, {d.date}</p><p>{d.muhurtham}</p></div><a className="button maroon-button" href={d.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={17}/></a></Reveal></div></section>;
}
