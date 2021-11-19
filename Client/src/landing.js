import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup.js";
import Menu from "./pages/menu";
import Admin from "./pages/admin"
import Error from "./pages/404.js"

const Frontend = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/login" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/register" component={SignupPage} exact />
        <Route path="/store/" component={Menu} />
        <Route path="/admin/" component={Admin} />
        <Route path="/404" component={Error} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default Frontend;
