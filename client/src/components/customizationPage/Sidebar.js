import { useState } from "react";

export default function Sidebar(props) {
  const [chestOpened, setChestOpened] = useState(true);
  const [dirOpened, setDirOpened] = useState(false);

  function toggleChest() {
    let chest = document.getElementById("chest");
    chest.classList.toggle("chest-open");

    if (!chestOpened) {
      setChestOpened(true);
    } else {
      setChestOpened(false);
      setDirOpened(false);
    }
  }

  function onDirClickHandler(event) {
    console.log(event.target.textContent);

    setDirOpened(true);

    if (dirOpened) {
      setDirOpened(false);
    }
  }

  return (
    <div className="tSelection-sidebar">
      <div className="chest" id="chest" onClick={toggleChest}></div>
      <div className="custom-selection">
        {!chestOpened
          ? props.dir.map((e, i) => (
              <div className="custom-item" key={i}>
                <p
                  key={i}
                  className="custom-dir"
                  onClick={(event) => onDirClickHandler(event)}
                >
                  {e}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
