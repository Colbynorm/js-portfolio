import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Col, Row, Container, Navbar, Nav } from "react-bootstrap";
import "./app.css";
import Footer from "./components/Footer";
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
              <h1>Welcome To My React Portfolio!</h1>
              <h4>Hi! My name is Colby Norman. I am a new up and coming full-stack web developer.
                  I am currently enrolled in a course at SMU in Dallas, TX, learning front-end and back-end web development.
                  Outside of class my hobbies include working out, reading, and enjoying Rock n Roll music.
              </h4>
            </Route>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route path="/homework" component={HomeworkPage} /> */}
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
