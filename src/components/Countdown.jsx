import { useEffect, useState } from 'react';
import { weddingDetails as d } from '../data/weddingDetails';
import { getCountdown } from '../lib/events';
export default function Countdown() {
  const [time, setTime] = useState(() => getCountdown(d.startAt));
  useEffect(() => { const timer = setInterval(() => setTime(getCountdown(d.startAt)), 1000); return () => clearInterval(timer); }, []);
  return <div className="countdown"><p className="eyebrow">{time.finished ? 'Our forever has begun' : 'The celebration begins in'}</p><div className="countdown-digits" role="timer" aria-label="Time until the wedding">{['days','hours','mins','secs'].map(label => <div key={label}><span key={time[label]}>{String(time[label]).padStart(2,'0')}</span><small>{label}</small></div>)}</div></div>;
}
