import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white px-6 py-4 flex justify-between items-center sticky top-0">
      <h1 className="font-bold">Grampanchayat Portal</h1>
      <div className="space-x-4 hidden md:block">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/schemes">Schemes</Link>
        <Link to="/complaints">Complaints</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
