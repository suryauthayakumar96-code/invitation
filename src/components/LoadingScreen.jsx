import { weddingDetails as d } from '../data/weddingDetails';
export default function LoadingScreen() {
  return <div className="loading-screen" role="status"><span>✦</span><p>{d.groom} & {d.bride}</p><small>Our story is about to begin…</small></div>;
}
