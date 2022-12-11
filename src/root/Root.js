import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navigation } from '../components/shared';

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
