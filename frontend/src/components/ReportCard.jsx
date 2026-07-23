import React from 'react';
import { Download, FileJson, Search } from 'lucide-react';

export default function ReportCard({ report, lookup, setLookup, onLookup }) {
  const download = () => {
    const blob = new Blob([JSON.stringify(report.report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob); const link = document.createElement('a');
    link.href = url; link.download = `CID-${report.test_id}-security-report.json`; link.click(); URL.revokeObjectURL(url);
  };
  return <section className="panel report-card"><div className="panel-title"><div><p>03</p><h2>Report vault</h2><small>View the completed assessment result.</small></div><FileJson className="accent"/></div><form className="lookup" onSubmit={onLookup}><Search size={16}/><input placeholder="Enter Job ID" value={lookup} onChange={event => setLookup(event.target.value)}/><button><Search size={15}/></button></form>{report ? <div className="report-summary"><p>FINAL ASSESSMENT REPORT</p><h3>{report.test_id}</h3><small>{report.created_at}</small><pre className="json-report">{JSON.stringify(report.report, null, 2)}</pre><button className="primary" onClick={download}><Download size={16}/>Download JSON report</button></div> : <div className="empty-mini"><FileJson size={28}/><b>Your report will appear here</b><small>Complete a new assessment to retrieve its final report.</small></div>}</section>;
}
