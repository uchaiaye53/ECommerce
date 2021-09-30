import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import About from "./About";
import Contact from "./Contact";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";
import Context from "../contextAPI/Context";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Home() {
    return (
        <Context>
            <Router>
            <Navbar/>
                <Switch>
                    <Route exact path = "/" component={Product} />
                    <Route path = "/about" component={About} />
                    <Route path = "/contact" component={Contact} />
                    <Route exact path = "/cart" component={CartPage} />
                    <Route exact path = "/checkout" component={Checkout} />
                    <Route exact path = "/success" component={OrderSuccess} />
                </Switch>
            </Router>
        </Context>
    );
}

export default Home;