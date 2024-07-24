import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen space-y-5">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
