import { Outlet } from "react-router-dom";
import Modal from "../components/Modals/Modals";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="relative">
          <div className="z-50 absolute w-full">
          <Navbar/>
          </div>
           <Outlet/>
           <Footer/>
           <Modal/>
        </div>
    );
};

export default Main;