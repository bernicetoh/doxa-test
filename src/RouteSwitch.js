import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ThreadPage from "./pages/ThreadPage";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/thread" element={<ThreadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
