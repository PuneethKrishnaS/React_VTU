import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
    <div style={{ backgroundColor: "#fafafa", height: "100vh" }}>
        <App />
    </div>
);
