import React from 'react';
import { LockKeyhole } from 'lucide-react';
export default function Header({eyebrow='AI SECURITY COMMAND',title,children}){return <header className="page-header"><div><p className="eyebrow"><i/>{eyebrow}</p><h1>{title}</h1></div>{children||<div className="secure"><LockKeyhole size={14}/>Authorized testing only</div>}</header>}
