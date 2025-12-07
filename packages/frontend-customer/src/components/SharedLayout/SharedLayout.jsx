import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      header
      <Outlet />
      footer
    </>
  );
};

export default SharedLayout;
