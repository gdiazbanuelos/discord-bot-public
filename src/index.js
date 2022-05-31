import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js';
import Docs from './pages/Docs.js';
import Examples from './pages/Examples.js';
import Install from './pages/Install.js';
import FAQ from './pages/FAQ.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/install" element={<Install />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
