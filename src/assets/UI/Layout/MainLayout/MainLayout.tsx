import { Outlet } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { useAppSelector } from "../../../../redux/hooks/hooks";
const MainLayout = () => {
  const { theme } = useAppSelector((state) => state.news);
  return (
    <div data-theme={theme ? "light" : "dark"}>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
