import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Schemes from "./pages/Schemes";
import Complaints from "./pages/Complaints";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
