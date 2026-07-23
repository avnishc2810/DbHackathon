import React from 'react';
import { FileSearch, Radar } from 'lucide-react'; import { Link } from 'react-router-dom';
export default function EmptyState(){return <div className="empty-state"><FileSearch size={38}/><h2>No Security Reports Found</h2><p>Complete a new assessment to generate your first report.</p><Link className="primary" to="/assess"><Radar size={17}/>Go to Assessment</Link></div>}
