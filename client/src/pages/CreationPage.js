import { Link } from "react-router-dom";
import "../cssFiles/creationPageStyle.css";
function CreationPage() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/creation/blocks"}>blocks</Link>
        </li>
      </ul>
    </div>
  );
}

export default CreationPage;
