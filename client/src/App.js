import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
      </Routes>
    </>
  );
}

export default App;
