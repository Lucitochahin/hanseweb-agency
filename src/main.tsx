import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Fehler: Das Element #root wurde im HTML nicht gefunden.");
}
createRoot(rootElement).render(<App />);
