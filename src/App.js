import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

const App = () => {
  return (
    <>
      {/* home */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
