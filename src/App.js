import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import { Route, Switch } from "react-router-dom";
import OurWork from "./pages/OurWork";
import MovieDetail from "./components/MovieDetail";
const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact component={AboutUs} />
                <Route path="/work" exact component={OurWork} />
                <Route path="/work/:id" component={MovieDetail} />
            </Switch>
        </div>
    );
};

export default App;
