import React from 'react';
import ReactDOM from 'react-dom/client';
import Seller from './components/seller';
import NewProduct from './components/new_product';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Seller />}></Route>
        <Route exact path='/add' element={<NewProduct />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode> 
)
