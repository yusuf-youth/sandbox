import { useState } from "react";
import Document from "./components/Document/DocumentPage";
import Title from "./components/Title/Title";
import TitleField from "./components/TitleField/TitleField";
import Description from "./components/Description/Description";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import { DocumentIcon, PenIcon } from "./assets/Icons";
import EditDocumentButton from "./components/EditDocumentButton/EditDocumentButton";
import { debts } from "./data/debts";
import { spendings } from "./data/spendings";
import useAppContext from "./hooks/useAppContext";

function App() {
  const { selectedDocumentStorageId, setSelectedDocumentStorageId, documents } =
    useAppContext();

  let selectedData = documents.find(
    (document) => document.storageId === selectedDocumentStorageId,
  );

  let activeDocument = selectedData.element;

  return (
    <>
      <main className="dashboard">
        <nav className="dashboard__nav">
          <ul className="dashboard__nav-list">
            {documents.map((document) => {
              return (
                <li key={document.storageId} className="dashboard__nav-item">
                  <button
                    className="dashboard__nav-button reset-button"
                    onClick={() => {
                      setSelectedDocumentStorageId(document.storageId);
                    }}
                  >
                    <DocumentIcon className="dashboard__nav-icon" />
                    {document.documentName}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <section className="dashboard__content">
          {activeDocument}
          
          <button className="dashboard__switch-document-button reset-button">
            <DocumentIcon className="dashboard__nav-icon" />
            Documents
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
