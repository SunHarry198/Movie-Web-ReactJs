import React from "react";
import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Home from "../pages/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/:category/search/:keyword" element={<Catalog />}></Route>
      <Route path="/:category/:id" element={<Detail />}></Route>
      <Route path="/:category/" element={<Catalog />}></Route>
    </Routes>
  );
};

export default RoutesComponent;
