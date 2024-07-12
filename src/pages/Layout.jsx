import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="font-lufga">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
