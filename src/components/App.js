import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Work from './work/Work';
import Header from './header/Header';
import Footer from './footer/Footer';
import NotFound from './notFound/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/404" component={NotFound} />
            <Redirect path="*" to="/404" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
