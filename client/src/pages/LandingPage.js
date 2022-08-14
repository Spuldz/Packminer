import Landing from "../components/landingPage/Landing";
import landingPageStyle from "../cssFiles/landingPageStyle.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  function toSite() {
    navigate("/home");
  }
  return (
    <>
      <Landing continue={toSite} />
    </>
  );
}

export default LandingPage;
