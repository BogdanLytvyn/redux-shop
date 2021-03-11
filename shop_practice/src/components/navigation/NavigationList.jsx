import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationListContainer } from "./NavigationStyled";

const NavigationList = ({ routes, match = "" }) => {
  return (
    <NavigationListContainer>
      <ul className="navList">
        {routes.map(({ path, name, exact }) => (
          <li key={path}>
            <NavLink
              exact={exact}
              to={`${match}${path}`}
              className="navLink"
              activeClassName="activeNavLink"
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationListContainer>
  );
};

export default NavigationList;
