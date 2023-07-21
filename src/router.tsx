import React from 'react';
import { BrowserRouter,Routes,  Route } from 'react-router-dom';

import { FormPage1 } from './pages/FormPage1';
import { FormPage2 } from './pages/FormPage2';
import { FormPage3 } from './pages/FormPage3';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ FormPage1 } />
        <Route path="/page2" Component={ FormPage2 } />
        <Route path="/page3" Component={ FormPage3 } />
      </Routes>
    </BrowserRouter>
  )
}
