import React from 'react';
import { useRef } from 'react';
import { Check, FileKey2, UploadCloud, X } from 'lucide-react';

function CertificateInput({ file, onChange }) {
  const ref = useRef();
  return <button className={`dropzone ${file ? 'is-file' : ''}`} onClick={() => ref.current.click()}>
    <input ref={ref} hidden type="file" accept=".pem,.crt,.cer" onChange={event => onChange(event.target.files?.[0] || null)} />
    {file ? <><Check/><span><b>{file.name}</b><small>{(file.size / 1024).toFixed(1)} KB · PEM certificate ready</small></span><X onClick={event => { event.stopPropagation(); onChange(null); }}/></> : <><i><FileKey2/></i><span><b>Client certificate (optional)</b><small>.pem, .crt, .cer · sent securely as PEM text</small></span><UploadCloud/></>}
  </button>;
}

export default function UploadPanel({ cert, setCert, target, setTarget, onLaunch, loading, error }) {
  return <section className="panel intake"><div className="panel-title"><div><p>01</p><h2>New assessment</h2><small>Start a controlled API security test.</small></div><b>SWAGGER URL REQUIRED</b></div><label>Swagger / OpenAPI URL<input type="url" placeholder="https://api.example.com/openapi.json" value={target} onChange={event => setTarget(event.target.value)} required/></label><div className="uploads single-upload"><CertificateInput file={cert} onChange={setCert}/></div><p className="input-hint">The assessment service reads the OpenAPI document from this URL. A client certificate is optional.</p>{error&&<div className="error">{error}</div>}<button className="primary" disabled={loading} onClick={onLaunch}>{loading ? 'Assessment in progress…' : 'Launch security assessment'} <UploadCloud size={17}/></button></section>;
}
