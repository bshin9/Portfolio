import React, { Component } from "react";
import About from "./Components/AboutMe/About";
import Projects from "./Components/Projects/Projects";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: "64px" }}>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
