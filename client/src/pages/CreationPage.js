import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextureSelection from "../components/customizationPage/TextureSelection";
import Header from "../components/Header";
import "../cssFiles/creationPageStyle.css";
function CreationPage() {
  const navigate = useNavigate();

  function toBlocks() {
    navigate("/creation/blocks");
  }

  function toItems() {
    navigate("/creation/items");
  }

  function toEntity() {
    navigate("/creation/entity");
  }

  function toEnvironment() {
    navigate("/creation/environment");
  }

  function toGui() {
    navigate("/creation/gui");
  }

  function toOther() {
    navigate("/creation/other");
  }
  return (
    <>
      <Header />
      <TextureSelection
        id1="tSelection-blocks"
        id2="tSelection-items"
        id3="tSelection-entity"
        title1="Blocks"
        title2="Items"
        title3="Entity"
        click1={toBlocks}
        click2={toItems}
        click3={toEntity}
      />

      <TextureSelection
        id1="tSelection-environment"
        id2="tSelection-gui"
        id3="tSelection-others"
        title1="Environment"
        title2="GUI"
        title3="Others"
        click1={toEnvironment}
        click2={toGui}
        click3={toOther}
      />
    </>
  );
}

export default CreationPage;
