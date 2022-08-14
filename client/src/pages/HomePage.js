import Header from "../components/HomePage/Header";
import Home from "../components/HomePage/Home";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function toCreationPage() {
    navigate("/creation");
  }
  return (
    <>
      <Header toCreationPage={toCreationPage} />
      <Home />
    </>
  );
}

export default HomePage;
