import React from "react";

import {
  // BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Content from "./Content";
import Product from "./Product";

const MyRoutes = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/costumes/" element={<Content />} />
        <Route path="/costumes/product/:id" element={<Product />} />
      </Routes>
    /* </BrowserRouter> */
  );
};

export default MyRoutes;
