import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BlockCustomizationPage from "./pages/BlockCustomizationPage";
import CreationPage from "./pages/CreationPage";
import EntityCustomizationPage from "./pages/EntityCustomizationPage";
import EnvironmentCustomizationPage from "./pages/EnvironmentCustomizationPage";
import GuiCustomizationPage from "./pages/GuiCustomizationPage";
import HomePage from "./pages/HomePage";
import ItemCustomizationPage from "./pages/ItemCustomizationPage";
import LandingPage from "./pages/LandingPage";
import OtherCustomizationPage from "./pages/OtherCustomizationPage";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/creation" element={<CreationPage />} />
        <Route
          path="/creation/blocks"
          element={<BlockCustomizationPage data={backendData} />}
        />
        <Route path="/creation/items" element={<ItemCustomizationPage />} />
        <Route path="/creation/entity" element={<EntityCustomizationPage />} />
        <Route
          path="/creation/environment"
          element={<EnvironmentCustomizationPage />}
        />
        <Route path="/creation/gui" element={<GuiCustomizationPage />} />
        <Route path="/creation/other" element={<OtherCustomizationPage />} />
      </Routes>
    </>
  );
}

export default App;
