import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const NavigationRoutes = ({ routes, match = "", cart, addToCart, deleteFromCart, sendOrder }) => {
  const renderProps = (item, data) => {
    const { path, component: MyComponent } = item;
    switch (path) {
      case "/cart":
        return <MyComponent
              {...data}
              cart={cart}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
          sendOrder={sendOrder} />
      case "/allproducts":
        return <MyComponent
              {...data}
          addToCart={addToCart}
        />
      default:
        return <MyComponent {...data}/>
    }
  }
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {routes.map((item) => (
          <Route
            exact={item.exact}
            path={`${match}${item.path}`}
            render={(data) => renderProps(item, data)}
            key={item.path}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
