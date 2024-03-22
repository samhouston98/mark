// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Quotes from './components/Quotes';
import Hobbies from './components/Hobbies';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
