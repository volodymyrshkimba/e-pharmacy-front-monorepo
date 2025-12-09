import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const HomePageLayout = () => {
  return (
    <>
      <Header theme={"light"} />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePageLayout;
