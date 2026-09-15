import { Mandala, Ornament, Petals } from './Ornaments';
import { weddingDetails as d } from '../data/weddingDetails';
import Reveal from './Reveal';
import { BotanicalSpray } from './SceneDecorations';
export default function BlessingsSection() {
  return <section className="blessings"><BotanicalSpray className="left"/><BotanicalSpray className="right"/><Mandala/><Petals/><Reveal><p className="eyebrow">Love brings us together</p><h2>Two hearts.<br/>Two families.<br/><em>One beautiful beginning.</em></h2><Ornament/><p>{d.copy.blessing}</p></Reveal></section>;
}
