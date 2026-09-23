import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Heart } from 'lucide-react';
import WelcomeScreen from './components/WelcomeScreen';
import HeroSection from './components/HeroSection';
import SaveTheDate from './components/SaveTheDate';
import CoupleSection from './components/CoupleSection';
import LoveStory from './components/LoveStory';
import { ReadingProgress } from './components/CinematicDetails';
import TempleSection from './components/TempleSection';
import WeddingDetails from './components/WeddingDetails';
import Gallery from './components/Gallery';
import BlessingsSection from './components/BlessingsSection';
import LocationSection from './components/LocationSection';
import RSVPSection from './components/RSVPSection';
import Footer from './components/Footer';
import MusicControl from './components/MusicControl';
import LoadingScreen from './components/LoadingScreen';
import useWeddingMusic from './hooks/useWeddingMusic';
import { weddingDetails as d } from './data/weddingDetails';
export default function App() {
  const [opened, setOpened] = useState(false); const music = useWeddingMusic();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let live = true;
    const timer = setTimeout(() => { if (live) setReady(true); }, 1200);
    document.fonts.ready.then(() => { if (live) { setReady(true); clearTimeout(timer); } });
    return () => { live = false; clearTimeout(timer); };
  }, []);
  useEffect(() => { document.title = `${d.groom} & ${d.bride} — Our Wedding`; }, []);
  const open = () => { music.play(); setOpened(true); window.scrollTo(0, 0); };
  if (!ready) return <LoadingScreen/>;
  return <MotionConfig reducedMotion="user"><AnimatePresence>{!opened && <WelcomeScreen key="welcome" onOpen={open}/>}</AnimatePresence>{opened && <><ReadingProgress/><a href="#main" className="skip-link">Skip to invitation</a><header className="site-header"><a className="monogram" href="#home" aria-label="Back to top">{d.groom[0]}<span>&</span>{d.bride[0]}<i/></a><nav aria-label="Main navigation"><a href="#couple">Our story</a><a href="#celebration">The celebration</a><a href="#venue">The venue</a></nav><a className="header-date" href="#date"><Heart size={12}/><span>{d.date}</span></a></header><main id="main" tabIndex={-1}><HeroSection/><SaveTheDate/><CoupleSection/><LoveStory/><TempleSection/><WeddingDetails/><Gallery/><BlessingsSection/><LocationSection/><RSVPSection/><Footer/></main><MusicControl music={music}/></>}</MotionConfig>;
}
