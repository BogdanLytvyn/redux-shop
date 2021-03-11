import styled from "styled-components";

export const NavigationListContainer = styled.nav`
  .navLink {
    text-decoration: none;
    margin: 0 30px;
    text-transform: uppercase;
  }

  .activeNavLink {
    color: red;
  }
  .navList {
    list-style: none;
    display: flex;
    align-items: center;
  }
`;
