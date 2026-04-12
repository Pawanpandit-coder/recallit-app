import React from "react";
import App from "../App";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
