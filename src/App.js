import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Mengimpor BrowserRouter, Routes, dan Route dari react-router-dom
import './App.css';

import NotFoundPage from './pages/404';

// Pages Admin
import LoginAdminPage from './pages/admin/login';
import ProductPage from './pages/admin/product';
import DashboardPage from './pages/admin/dashboard';
import CustomerPage from './pages/admin/customer';

// Pages User
import LoginPage from './pages/user/login';
import RegisterPage from './pages/user/register';
import HomePage from './pages/user/home';
import ProfilePage from './pages/user/profile';
import CartPage from './pages/user/cart';
import ShopPage from './pages/user/shop';
import DetailProductPage from './pages/user/detailProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />

          {/* Admin */}
          <Route path="/admin/login" element={<LoginAdminPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/product" element={<ProductPage />} />
          <Route path="/admin/customer" element={<CustomerPage />} />

          {/* User */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/detail-product" element={<DetailProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
