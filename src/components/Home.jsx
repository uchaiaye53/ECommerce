import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";

import Checkout from "./Checkout";
import Context from "../contextAPI/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartContext from "../contextAPI/CartContext";
import About from "./pages/About";
import OrderSuccess from "./pages/OrderSuccess";
import Contact from "./pages/Contact";


function Home() {
  return (
    <Context>
      <CartContext>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/success" component={OrderSuccess} />
          </Switch>
        </Router>
      </CartContext>
    </Context>
  );
}

export default Home;
