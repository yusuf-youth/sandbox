import React, { createContext, useEffect, useState } from "react";
import { spendings } from "../data/spendings";
import { debts } from "../data/debts";
import DocumentPage from "../components/Document/DocumentPage";

export const AppContext = createContext({
  selectedDocumentStorageId: null,
  setSelectedDocumentStorageId: () => null,
  documents: null,
  setDocuments: () => null,
});

function AppContextProvider({ children }) {
  const [selectedDocumentStorageId, setSelectedDocumentStorageId] = useState(
    () => {
      const savedId = localStorage.getItem("ACTIVE DOCUMENT ID");

      return JSON.parse(savedId) || "MONTHLY SPENDINGS";
    },
  );

  // const [documents, setDocuments] = useState([
  //   {
  //     storageId: "MONTHLY SPENDINGS",
  //     documentName: "Monthly Spendings",
  //     element: (
  //       <DocumentPage
  //         key="MONTHLY SPENDINGS"
  //         storageId="MONTHLY SPENDINGS"
  //         name="Monthly Spendings"
  //         hasInitialData={spendings}
  //       />
  //     ),
  //   },
  //   {
  //     storageId: "DEBTS",
  //     documentName: "Debts",
  //     element: (
  //       <DocumentPage
  //         key="DEBTS"
  //         storageId="DEBTS"
  //         name="Debts"
  //         hasInitialData={debts}
  //       />
  //     ),
  //   },
  //   {
  //     storageId: "CREDITS",
  //     documentName: "Credits",
  //     element: (
  //       <DocumentPage
  //         key="CREDITS"
  //         storageId="CREDITS"
  //         name="Credits"
  //         hasInitialData={false}
  //       />
  //     ),
  //   },
  // ]);

  // const [documents, setDocuments] = useState([
  //   {
  //     storageId: "MONTHLY SPENDINGS",
  //     documentName: "Monthly Spendings",
  //     hasInitialData: spendings,
  //   },
  //   {
  //     storageId: "DEBTS",
  //     documentName: "Debts",
  //     hasInitialData: debts,
  //   },
  //   {
  //     storageId: "CREDITS",
  //     documentName: "Credits",
  //   },
  // ]);


  const [documents, setDocuments] = useState(() => {
  // Define your default structure
  const defaultDocs = [
    { storageId: "MONTHLY SPENDINGS", documentName: "Monthly Spendings", initialData: spendings },
    { storageId: "DEBTS", documentName: "Debts", initialData: debts },
    { storageId: "CREDITS", documentName: "Credits", initialData: false }
  ];

  // Try to find saved versions of these specific documents in localStorage
  return defaultDocs.map(doc => {
    const savedData = localStorage.getItem(doc.storageId);
    if (savedData) {
      const parsed = JSON.parse(savedData);
      return { ...doc, documentName: parsed.title }; // Sync with the saved 'title'
    }
    return doc;
  });
});

  useEffect(() => {
    localStorage.setItem(
      "ACTIVE DOCUMENT ID",
      JSON.stringify(selectedDocumentStorageId),
    );
  }, [selectedDocumentStorageId]);

  return (
    <AppContext
      value={{
        selectedDocumentStorageId,
        setSelectedDocumentStorageId,
        documents,
        setDocuments,
      }}
    >
      {children}
    </AppContext>
  );
}

export default AppContextProvider;
