import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./app.css";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomeworkPage from "./pages/HomeworkPage";
import 'bootstrap/dist/css/bootstrap.min.css';
//import profilePic from "./components/profilePic.jpg";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Col xs={6} md={4}>
              <img scr = "../components/profilePic.jpg" alt="Profile Pic"></img>
            </Col>
              <h1>Welcom To My Portfolio</h1>
          </Route>
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/homework" component={HomeworkPage} />
        </Switch>
        {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
