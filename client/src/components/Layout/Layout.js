import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../styles/layout.css"; // Path to your CSS file

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
