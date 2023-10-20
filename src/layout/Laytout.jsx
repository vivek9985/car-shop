import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../pages/footer/Footer";

const Laytout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Laytout;
