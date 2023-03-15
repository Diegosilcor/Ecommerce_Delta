import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//React Router Imports
import { router } from './router/Index';
import { RouterProvider } from 'react-router-dom';

//Importo context
import CartContextProvider from './context/CartContext';

//Firebase inicio

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey:process.env.API_KEY, 
  authDomain: process.env.PROJECT_ID,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);


reportWebVitals();
