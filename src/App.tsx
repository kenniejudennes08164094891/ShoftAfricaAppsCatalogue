import React from 'react';
import logo from './logo.svg';
import './App.css';
import Oniduuru from './softwares/oniduuru';
import { Route, Routes } from 'react-router-dom';
import Index from './catalogue-grid';
import OniduuruTermsPage from './pages/OniduuruTermsPage';

function App() {
  return (
    <div className="App">
         <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/landing-pages/oniduuru-marketplace" element={<Oniduuru />} />
           <Route path="/landing-pages/oniduuru-terms-and-conditions" element={<OniduuruTermsPage />} />
        </Routes>
    </div>
  );
}

export default App;
