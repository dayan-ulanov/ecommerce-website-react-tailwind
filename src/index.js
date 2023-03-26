import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// product provider
import ProductProvider from './contexts/product-context';
// sidebar provider
import SidebarProvider from './contexts/sidebar-context';
// cart provider
import CartProvider from './contexts/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <SidebarProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </SidebarProvider>
  </CartProvider>
);