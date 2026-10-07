import { MapPin, MessageCircle, Volume2, VolumeX } from 'lucide-react';
import { weddingDetails as d } from '../data/weddingDetails';
import { whatsappUrl } from '../lib/events';
export default function MusicControl({ music }) {
  return <aside className="floating-actions" aria-label="Invitation quick actions"><a href={d.mapUrl} target="_blank" rel="noreferrer" aria-label="Get directions" title="Get directions"><MapPin size={18}/></a>{d.whatsappNumber && <a className="whatsapp-float" href={whatsappUrl(d, true)} target="_blank" rel="noreferrer" aria-label="Send wishes on WhatsApp"><MessageCircle size={18}/></a>}<button className={music.playing ? 'music-playing' : ''} onClick={music.toggle} aria-label={music.playing ? 'Pause music' : 'Play music'} aria-pressed={music.playing} title={music.playing ? 'Pause music' : 'Play music'}>{music.playing ? <Volume2 size={18}/> : <VolumeX size={18}/>}</button>{music.error && <span role="status" className="music-error">{music.error}</span>}</aside>;
}
