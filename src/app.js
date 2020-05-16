import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Col, Row, Container, Navbar, Nav } from "react-bootstrap";
import "./app.css";
import Header from "./components/Header";
import Contact from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomeworkPage from "./pages/HomeworkPage";
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
          <Route path="/homework" component={HomeworkPage} /> */}
        </Switch>
        {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
