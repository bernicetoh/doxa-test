import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ThreadPage from "./pages/ThreadPage";

function RouteSwitch() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/thread" element={<ThreadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteSwitch;
