import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Update the import path for Layout component
import Dashboard from './pages/Dashboard';
import ItemDetails from './pages/ItemDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ // Wrap Dashboard component with Layout
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/item/:id"
          element={ // Wrap ItemDetails component with Layout
            <Layout>
              <ItemDetails />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={ // Wrap About component with Layout
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="*"
          element={<NotFound />} // No need to wrap NotFound component with Layout
        />
      </Routes>
    </Router>
  );
};

export default App;
