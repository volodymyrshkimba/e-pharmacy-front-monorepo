import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      footer
    </>
  );
};

export default SharedLayout;
