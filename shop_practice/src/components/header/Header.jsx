import React from "react";
import logo from "../../images/ebay.png";
import { HeaderContainer } from "./HeaderStyled";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationList from "../navigation/NavigationList";

const Header = () => {
  return (
    <HeaderContainer>
      <img className="logo" src={logo} alt="Logo" width="120" height="120" />

      <NavigationList routes={mainRoutes} />
    </HeaderContainer>
  );
};

export default Header;
