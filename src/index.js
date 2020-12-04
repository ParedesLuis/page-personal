import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Menu from "./components/menu";
import Home from "./components/home";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Menu/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/about" exact component={About} />
        <Route path="*" >
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
