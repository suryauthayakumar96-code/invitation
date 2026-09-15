import { useRef } from 'react';
import gsap from 'gsap';
import { CalendarPlus } from 'lucide-react';
import { weddingDetails as d } from '../data/weddingDetails';
import { downloadCalendar } from '../lib/events';
import { Vel, Ornament } from './Ornaments';
import { OrnateFrame, BotanicalSpray, TempleFrieze } from './SceneDecorations';
import useSceneScroll from '../hooks/useSceneScroll';
function animateInvitation(section) {
  gsap.from('.reel-invitation-card', { y: 90, scale: .92, scrollTrigger: { trigger: section, start: 'top bottom', end: 'top 15%', scrub: .7 } });
  gsap.from('.invitation-name', { y: 25, opacity: 0, stagger: .2, duration: 1, scrollTrigger: { trigger: '.invitation-name', start: 'top 90%', once: true } });
}
export default function SaveTheDate() {
  const ref = useRef(null); useSceneScroll(ref, animateInvitation);
  return <section ref={ref} id="date" className="save-date blue-courtyard"><BotanicalSpray className="courtyard-leaves left"/><BotanicalSpray className="courtyard-leaves right"/><div className="reel-invitation-card"><OrnateFrame/><div className="reel-invitation-content"><Vel className="invite-vel"/><p className="tamil" lang="ta">{d.tamilHeading}</p><p className="invitation-script">The Invitation</p><p className="invitation-family">{d.copy.invitation}<br/>{d.copy.invitationSecond}</p><h2 className="invitation-couple"><span className="invitation-name">{d.groom}</span><em>&</em><span className="invitation-name">{d.bride}</span></h2><Ornament/><p className="eyebrow">Save the date · {d.day}</p><p className="invitation-date">{d.date}</p><h3>{d.venue}</h3><p className="invitation-location">{d.location}</p><button className="text-button" onClick={() => downloadCalendar(d)}><CalendarPlus size={16}/> Add Wedding to Calendar</button></div></div><TempleFrieze/></section>;
}
