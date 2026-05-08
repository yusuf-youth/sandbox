import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import AppContextProvider from "./store/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
);
