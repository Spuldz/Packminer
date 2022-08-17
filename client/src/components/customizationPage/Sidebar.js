import { useState } from "react";

export default function Sidebar(props) {
  return (
    <div className="tSelection-sidebar">
      <div id="chest2"></div>
      <div id="chest"></div>
      <div>
        {typeof props.data.entityDir === "undefined" ? (
          <p>loading...</p>
        ) : (
          <form onChange={(e) => props.test(e.target.value)}>
            <select>
              {props.data.entityDir.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </form>
        )}
      </div>
    </div>
  );
}
