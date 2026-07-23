import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, Radar } from 'lucide-react';
import logo from '../assets/cid-logo.svg';
export default function Sidebar(){return <aside className="sidebar"><img className="cid-logo" src={logo} alt="CID Sentinel"/><nav><NavLink to="/assess"><Radar/><span>Assess</span></NavLink><NavLink to="/reports"><FileText/><span>Reports</span></NavLink></nav><div className="profile"><div>AJ</div><span><b>Alex Johnson</b><small>Security engineer</small></span></div></aside>}
