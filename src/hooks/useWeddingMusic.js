import { useCallback, useEffect, useRef, useState } from 'react';
import { weddingDetails as d } from '../data/weddingDetails';
export default function useWeddingMusic() {
  const engine = useRef(null); const [playing, setPlaying] = useState(false); const [error, setError] = useState('');
  const play = useCallback(async () => {
    try {
      if (!engine.current) {
        if (d.music.src) { const audio = new Audio(d.music.src); audio.loop = true; audio.volume = Math.max(0, Math.min(1, d.music.volume)); engine.current = { audio }; }
        else {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          const context = new AudioContext(); const gain = context.createGain(); gain.gain.value = d.music.volume * .2; gain.connect(context.destination);
          engine.current = { context, gain, timer: null, note: 0 };
        }
      }
      const music = engine.current;
      if (music.audio) await music.audio.play();
      else {
        await music.context.resume();
        if (!music.timer) {
          // An original, quiet pentatonic soundscape, requiring no remote audio file.
          const notes = [261.63, 329.63, 392, 440, 392, 329.63, 293.66, 261.63];
          const chime = () => { const time = music.context.currentTime; const oscillator = music.context.createOscillator(); const envelope = music.context.createGain(); oscillator.type = 'sine'; oscillator.frequency.value = notes[music.note++ % notes.length]; envelope.gain.setValueAtTime(0, time); envelope.gain.linearRampToValueAtTime(.35, time + .12); envelope.gain.exponentialRampToValueAtTime(.001, time + 3.8); oscillator.connect(envelope); envelope.connect(music.gain); oscillator.start(time); oscillator.stop(time + 4); oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); }; };
          chime(); music.timer = setInterval(chime, 1700);
        }
      }
      setPlaying(true); setError('');
    } catch { setPlaying(false); setError('Music couldn’t play. Tap to try again.'); }
  }, []);
  const pause = useCallback(() => { const music = engine.current; if (music?.audio) music.audio.pause(); if (music?.context) { clearInterval(music.timer); music.timer = null; music.context.suspend(); } setPlaying(false); }, []);
  useEffect(() => () => { const music = engine.current; music?.audio?.pause(); if (music?.timer) clearInterval(music.timer); if (music?.context) music.context.close(); }, []);
  return { playing, error, play, pause, toggle: playing ? pause : play };
}
