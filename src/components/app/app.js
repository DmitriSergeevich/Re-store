import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CartPage from '../pages/cart-page';



import { HomePage } from '../pages/home-page';
import ShopHeader from '../shop-header/shop-header';
const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
          exact
          />
      </Switch>
    </main>
  );
};

export default  App;