import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './App/Components/Layout/Layout';
import Home from './App/Pages/Home/Home';
import { AppProvider } from './App/Context/AppContext';
import BlogDetails from './App/Pages/Details/WorkDetails';
import CeoDetails from './App/Pages/Details/CeoDetail';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workDetails" element={<BlogDetails />} />
            <Route path="/ceoDetail" element={<CeoDetails />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
};

export default App;
