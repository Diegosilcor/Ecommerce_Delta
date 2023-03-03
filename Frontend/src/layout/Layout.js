import React from 'react';
import { Outlet } from 'react-router-dom';

//Importo componentes
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const Layout = () => {
  return (
    <section className="mainContainer">
      <NavBar />
      {}
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
