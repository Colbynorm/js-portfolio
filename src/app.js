import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./app.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Header from "./components/Header";
import Contact from "./pages/Contact"
import ProjectsPage from "./pages/ProjectsPage"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/">
              <h1>home page</h1>
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={ProjectsPage} />
          {/* <Route exact path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
        {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
