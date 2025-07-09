import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import SummaryPage from './components/SummaryPage';

const App = () => {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 formData={formData} setFormData={setFormData} />} />
        <Route path="/page2" element={<Page2 formData={formData} setFormData={setFormData} />} />
        <Route path="/page3" element={<Page3 formData={formData} setFormData={setFormData} />} />
        <Route path="/summary" element={<SummaryPage formData={formData} />} />
      </Routes>
    </Router>
  );
};

export default App;
