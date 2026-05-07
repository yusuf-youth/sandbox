import { useState } from "react";
import Document from "./components/Document/Document";
import Title from "./components/Title/Title";
import TitleField from "./components/TitleField/TitleField";
import Description from "./components/Description/Description";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import { PenIcon } from "./assets/Icons";
import EditDocumentButton from "./components/EditDocumentButton/EditDocumentButton";
import { debtsDocument } from "./data/debts";

function App() {
  return (
    <>
      <Document
        id={0}
        name=""
        hasInitialData={debtsDocument}
        isEditMode={false}
      />
    </>
  );
}

export default App;
