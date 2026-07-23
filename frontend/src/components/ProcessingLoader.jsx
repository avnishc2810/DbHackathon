import { ShieldCheck } from 'lucide-react';

export default function ProcessingLoader({jobId,phrase}) {
  return <section className="panel processing-loader" aria-live="polite">
    <div className="scanner"><i/><i/><i/><ShieldCheck size={25}/></div>
    <div>
      <p>LIVE SECURITY ORCHESTRATION</p>
      <h2>{phrase}</h2>
      <small>Job ID <b>{jobId}</b> · polling the assessment engine every 1.5 seconds</small>
    </div>
  </section>;
}
