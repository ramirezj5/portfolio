import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
