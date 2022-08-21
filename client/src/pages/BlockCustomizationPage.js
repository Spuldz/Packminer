import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/customizationPage/Sidebar";
import BlockPreview from "../components/customizationPage/BlockPreview";

function BlockCustomizationPage(props) {
  const [selected, setSelected] = useState("armorstand");
  function test(val) {
    setSelected(val);
  }

  return (
    <>
      <Header />
      <Sidebar data={props.data} test={test} dir={props.data.entityDir} />
      <BlockPreview text={selected} />
    </>
  );
}

export default BlockCustomizationPage;
