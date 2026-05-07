import React, { useContext } from "react";
import { DocumentContext } from "../store/DocumentContext";

function useDocumentContext() {
  return useContext(DocumentContext);
}

export default useDocumentContext;
