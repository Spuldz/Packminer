import homePageStyle from "../../cssFiles/homePageStyle.css";

function Header(props) {
  return (
    <header className="Home-Header">
      <p className="home-options" onClick={props.toCreationPage}>
        Create TexturePack
      </p>
      <p className="home-options">Browse TexturePacks</p>
      <p className="home-options">Contact Us</p>
      <p className="home-options">Help</p>
    </header>
  );
}

export default Header;
