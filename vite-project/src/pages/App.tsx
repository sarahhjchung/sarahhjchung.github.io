import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Page } from "@/pages/Page";
import { Home } from "@/pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
