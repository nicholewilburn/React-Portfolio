// App.jsx
import React from 'react';
import './App.css'; 
import { Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout'; // Import your layout component
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={(
            <Layout>
              {/* Render content for the root path */}
              <Outlet /> {/* Use Outlet to render child routes */}
            </Layout>
          )}
        >
          {/* Define child routes */}
          <Route index element={<AboutMe />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;