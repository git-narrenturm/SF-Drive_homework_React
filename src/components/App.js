import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../css/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Faq from "./Faq";

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/faq" component={Faq} exact />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;