import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BlockCustomizationPage from "./pages/BlockCustomizationPage";
import CreationPage from "./pages/CreationPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/creation" element={<CreationPage />} />
        <Route path="/creation/blocks" element={<BlockCustomizationPage />} />
      </Routes>
    </>
  );
}

export default App;
