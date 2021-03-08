import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import { Route, Switch, useLocation } from "react-router-dom";
import OurWork from "./pages/OurWork";
import MovieDetail from "./components/MovieDetail";
import { AnimatePresence } from "framer-motion";
const App = () => {
    const location = useLocation();
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={AboutUs} />
                    <Route path="/work" exact component={OurWork} />
                    <Route path="/work/:id" component={MovieDetail} />
                </Switch>
            </AnimatePresence>
        </div>
    );
};

export default App;
