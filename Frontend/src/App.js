import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";
import Carrousel from "./components/Carrousel/Carrousel";



//React Router Imports
import { router } from "./router/index";
import { RouterProvider } from "react-router-dom";

//Context Imports
import CartContextProvider from "./context/CartContext";

//Firebase Initialization

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

function App() {
  return (
    <div className="App">
      <router>
        <Navbar />
        <Carrousel />
        {/* WhatsApp icon */}
      <a
        href="https://wa.me/593987309734"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
        <Footer />
      </router>
    </div>
  );
}



export default App;
