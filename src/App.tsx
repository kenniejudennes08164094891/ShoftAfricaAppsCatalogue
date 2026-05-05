import React from 'react';
import logo from './logo.svg';
import './App.css';
import Oniduuru from './softwares/oniduuru';
import { Route, Routes } from 'react-router-dom';
import Index from './catalogue-grid';
import OniduuruTermsPage from './pages/OniduuruTermsPage';
import InvestigativeJournalism from './pages/InvestigativeJournalism';
import Blog1 from './components/InvestigativeBlogs/blog1';
import Blog2 from './components/InvestigativeBlogs/blog2';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/landing-pages/oniduuru-marketplace" element={<Oniduuru />} />
        <Route path="/landing-pages/oniduuru-terms-and-conditions" element={<OniduuruTermsPage />} />
        <Route path="/investigative-journalism/creative-blog" element={<InvestigativeJournalism />} />
        {/* Blogs Below Here*/}
        <Route path="/investigative-journalism/creative-blog/:topic" element={<Blog1 />} />
        <Route path="/investigative-journalism/creative-blog/fuel/:topic" element={<Blog2 />} />

         {/* Blogs Above Here*/}
      </Routes>
    </div>
  );
}

export default App;
