import React from 'react';
import Header from './components/Header';
import Dest from './components/Dest';
import FeaturedProducts from './components/Products';
import Info from './components/Info';
import Describe from './components/Descr';
import Footer from './components/Ftr';
function App() {
  return (
    <div className=''>
      <Header />
     <FeaturedProducts />
     <Dest />
     <Info />
     <Describe />
     <Footer />
    </div>
  );
}

export default App;
