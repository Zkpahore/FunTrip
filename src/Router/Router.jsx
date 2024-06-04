import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Ftr';
import { Outlet } from 'react-router-dom';
function Router() {
  return (
    <div className=''>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Router;
