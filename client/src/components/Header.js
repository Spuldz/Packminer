import homePageStyle from "../cssFiles/homePageStyle.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function toCreation() {
    navigate("/creation");
  }

  return (
    <header className="Home-Header">
      <p className="home-options" onClick={toCreation}>
        Create TexturePack
      </p>
      <p className="home-options">Browse TexturePacks</p>
      <p className="home-options">Contact Us</p>
      <p className="home-options">Help</p>
    </header>
  );
}

export default Header;
