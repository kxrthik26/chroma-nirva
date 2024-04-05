import React from "react";
import Navigation from "./Navigation";
import AppLogo from "../styles/resources/images/logos/ChromaNirva.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={AppLogo} alt="chroma_nirva_logo" />
      <Navigation />
    </div>
  );
};

export default Header;
