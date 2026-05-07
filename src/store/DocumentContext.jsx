import React, { createContext, useState } from "react";

export const DocumentContext = createContext({
  isModifyingDocument: null,
  isPlaceholderVisible: null,
  toggleDocumentState: () => {},
  togglePlaceholderState: () => {},
  hidePlaceholder: () => {},
  showPlaceholder: () => {},
});

function DocumentContextProvider({ children }) {
  const [isModifyingDocument, setIsModifyingDocument] = useState(false);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(false);

  function toggleDocumentState() {
    setIsModifyingDocument((isModifyingDocument) => !isModifyingDocument);
  }

  function showPlaceholder() {
    setIsPlaceholderVisible(true);
  }

  function hidePlaceholder() {
    setIsPlaceholderVisible(false);
  }

  function togglePlaceholderState() {
    setIsPlaceholderVisible((isPlaceholderVisible) => !isPlaceholderVisible);
  }

  return (
    <DocumentContext
      value={{
        isModifyingDocument,
        isPlaceholderVisible,
        toggleDocumentState,
        togglePlaceholderState,
        hidePlaceholder,
        showPlaceholder,
      }}
    >
      {children}
    </DocumentContext>
  );
}

export default DocumentContextProvider;
