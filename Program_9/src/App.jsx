import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div className="h-dvh relative">
            <NavBar />
            <div className="justify-center items-center flex text-6xl font-extrabold h-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    );
}
