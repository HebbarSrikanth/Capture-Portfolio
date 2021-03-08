import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import { Route, Switch } from "react-router-dom";
import OurWork from "./pages/OurWork";
const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact component={AboutUs} />
                <Route path="/work" component={OurWork} />
            </Switch>
        </div>
    );
};

export default App;
