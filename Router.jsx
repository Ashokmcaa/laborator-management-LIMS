import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Laboratory from "./src/home/Laboratory";
import NewLaboratory from "./src/home/NewLaboratory";
import DetailsLaboratory from "./src/home/DetailsLaboratory";

export default function Router() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<Laboratory />} />
        <Route path="/createlaboratory/:id" element={<NewLaboratory />} />
        <Route path="/labs/:id" element={<DetailsLaboratory />} />
      </Routes>
    </BrowserRouter>
  );
}
