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

  const [documents, setDocuments] = useState([
    {
      storageId: "MONTHLY SPENDINGS",
      documentName: "Monthly Spendings",
      element: (
        <DocumentPage
          key="MONTHLY SPENDINGS"
          storageId="MONTHLY SPENDINGS"
          name="Monthly Spendings"
          hasInitialData={spendings}
        />
      ),
    },
    {
      storageId: "DEBTS",
      documentName: "Debts",
      element: (
        <DocumentPage
          key="DEBTS"
          storageId="DEBTS"
          name="Debts"
          hasInitialData={debts}
        />
      ),
    },
    {
      storageId: "CREDITS",
      documentName: "Credits",
      element: (
        <DocumentPage
          key="CREDITS"
          storageId="CREDITS"
          name="Credits"
          hasInitialData={false}
        />
      ),
    },
  ]);

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
