import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { About } from '../components/About'
import {Products} from '../components/Products'
const MainRoutes = () => {
  return (
    <>
      {/* Navbar and all the routes */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};
export { MainRoutes };
