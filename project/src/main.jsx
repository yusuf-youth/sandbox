import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import DocumentContextProvider from "./store/DocumentContext.jsx";

createRoot(document.getElementById("root")).render(
  <DocumentContextProvider>
    <App />
  </DocumentContextProvider>,
);
