import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Assess from './pages/Assess';
import Reports from './pages/Reports';
import './styles.css';

function App() { return <div className="app-shell"><Sidebar/><main className="app-main"><Routes><Route path="/" element={<Navigate to="/assess" replace/>}/><Route path="/assess" element={<Assess/>}/><Route path="/reports" element={<Reports/>}/><Route path="*" element={<Navigate to="/assess" replace/>}/></Routes></main></div> }
createRoot(document.getElementById('root')).render(<BrowserRouter future={{v7_startTransition:true,v7_relativeSplatPath:true}}><App/></BrowserRouter>);
