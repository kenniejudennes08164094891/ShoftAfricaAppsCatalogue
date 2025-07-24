import React from 'react';
import logo from './logo.svg';
import './App.css';
import Oniduuru from './softwares/oniduuru';
import { Route, Routes } from 'react-router-dom';
import Index from './catalogue-grid';

function App() {
  return (
    <div className="App">
         <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/landing-pages/oniduuru-marketplace" element={<Oniduuru />} />
        </Routes>
    </div>
  );
}

export default App;
