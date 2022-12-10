import React from 'react';
import Navigation from './Navigation/Navigation';
import { About, Banner, Contact, Projects } from './index';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <>
      {/* navigation */}
      <Navigation />
      <Banner />
      <About />
      <Projects />
      <Contact />
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
