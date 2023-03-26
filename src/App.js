import React from 'react';
// import react-router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/home';
import ProductDetails from './pages/product-details';
// import components
import Sidebar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
