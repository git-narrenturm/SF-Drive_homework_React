import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../css/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import FormRegister from "./FormRegister/FormRegister";
import RegisterSuccess from "./FormRegister/RegisterSuccess";

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/faq" component={Faq} exact />
        <Route path="/about" component={About} exact />
        <Route path="/success" component={RegisterSuccess} exact />
        <Route path="/register" component={FormRegister} exact />
        <Route path="/api/users" exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
