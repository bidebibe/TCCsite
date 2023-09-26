import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App';
import Work from '../../src/pages/structure/UsuarioCriarConta';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/UsuarioCriarConta' element={<Work />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

