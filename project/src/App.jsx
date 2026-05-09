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
import DocumentPage from "./components/Document/DocumentPage";

function App() {
  const { selectedDocumentStorageId, setSelectedDocumentStorageId, documents } =
    useAppContext();
  const [openModal, setOpenModal] = useState(false);

  // let selectedData = documents.find(
  //   (document) => document.storageId === selectedDocumentStorageId,
  // );
  let selectedDocument = documents.find(
    (document) => document.storageId === selectedDocumentStorageId,
  );

  console.log(selectedDocument.documentName);

  let activeDocument;

  if (selectedDocument.storageId === selectedDocumentStorageId) {
    activeDocument = (
      <DocumentPage
        key={selectedDocument.storageId}
        storageId={selectedDocument.storageId}
        name={selectedDocument.documentName}
        hasInitialData={selectedDocument.initialData}
      />
    );
  }

  return (
    <>
      <main className="dashboard">
        <nav className="dashboard__nav">
          <ul className="dashboard__nav-list">
            {documents.map((document) => {
              return (
                <li key={document.storageId} className="dashboard__nav-item">
                  <button
                    className={`dashboard__nav-button reset-button ${selectedDocumentStorageId === document.storageId ? "is-active" : ""}`}
                    onClick={() => {
                      setSelectedDocumentStorageId(document.storageId);
                    }}
                  >
                    <DocumentIcon className="dashboard__nav-icon" />
                    <span className="dashboard__nav-label">
                      {document.documentName}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <section className="dashboard__content">
          {activeDocument}

          <button
            className="dashboard__switch-document-button reset-button"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <DocumentIcon className="dashboard__nav-icon" />
            Documents
          </button>
        </section>

        <div className={`modal visible-mobile ${openModal ? "show" : ""}`}>
          <header className="modal__header">
            <button
              className="modal__close-button reset-button"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              &times;
            </button>
          </header>

          <div className="modal__body">
            <ul className="modal__list">
              {documents.map((document) => {
                return (
                  <li key={document.storageId} className="modal__item">
                    <button
                      className={`modal__button reset-button ${selectedDocumentStorageId === document.storageId ? "is-active" : ""}`}
                      onClick={() => {
                        setSelectedDocumentStorageId(document.storageId);
                        setOpenModal(false);
                      }}
                    >
                      <DocumentIcon className="modal__icon dashboard__nav-icon" />
                      <span className="modal__label dashboard__nav-label">
                        {document.documentName}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
