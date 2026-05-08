import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";

function useAppContext() {
  return useContext(AppContext);
}

export default useAppContext;
