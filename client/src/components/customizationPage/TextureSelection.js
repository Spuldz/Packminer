function TextureSelection(props) {
  return (
    <>
      <div className="tSelection-container">
        <div>
          <div
            className="tSelection-ImageContainer"
            id={props.id1}
            onClick={props.click1}
          ></div>
          <div className="tSelection-textureName">{props.title1}</div>
        </div>
        <div>
          <div
            className="tSelection-ImageContainer"
            id={props.id2}
            onClick={props.click2}
          ></div>
          <div className="tSelection-textureName">{props.title2}</div>
        </div>
        <div>
          <div
            className="tSelection-ImageContainer"
            id={props.id3}
            onClick={props.click3}
          ></div>
          <div className="tSelection-textureName">{props.title3}</div>
        </div>
      </div>
    </>
  );
}

export default TextureSelection;
