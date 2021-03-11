import React from "react";

import { MainContainer } from "./MainStyles";

// import Aboutpage from "../../pages/Aboutpage";
// import Productpage from "../../pages/Productpage";
// import Homepage from "../../pages/Homepage";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationRoutes from "../navigation/NavigationRoutes";

const Main = ({cart, addToCart, deleteFromCart, sendOrder}) => {
  return (
    <MainContainer>
      {/* <Product /> */}
      <NavigationRoutes routes={mainRoutes} cart={cart} addToCart={addToCart} deleteFromCart={deleteFromCart} sendOrder={ sendOrder} />
    </MainContainer>
  );
};

export default Main;
