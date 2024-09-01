import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { CartProvider } from "./Context/cart-context";
import { FilterProvider } from "./Context/filter-context.jsx";
import { ProductProvider } from "./Context/products-context.jsx";
import { UserProvider } from "./Context/user-context";
import { WishListProvider } from "./Context/wishlist-context";
import { AddressProvider } from "./Context/address-context";
import { ToastProvider } from "./Context/toast-context.jsx";
import { CheckoutProvider } from "./Context/checkout-context";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CheckoutProvider>
        <ToastProvider>
          <UserProvider>
            <ProductProvider>
              <FilterProvider>
                <WishListProvider>
                  <AddressProvider>
                    <CartProvider>
                      <App />
                    </CartProvider>
                  </AddressProvider>
                </WishListProvider>
              </FilterProvider>
            </ProductProvider>
          </UserProvider>
        </ToastProvider>
      </CheckoutProvider>
    </Router>
  </React.StrictMode>
);
