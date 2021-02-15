import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Col, Row, Container, Navbar, Nav } from "react-bootstrap";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomeworkPage from "./pages/HomeworkPage";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "./components/profilePic.jpg";
import background from "./components/newBackground.jpg";

function App() {
  return (
    <Router>
      <div className="body" style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1 className="header">Welcome To My React Portfolio!</h1>

            <img className="profilePic" src={profilePic} alt="Profile Pic"></img>

            <h4 class="intro">
              Hi! My name is Colby Norman. I am a new up and coming full-stack
              web developer. I am currently enrolled in a course at SMU in
              Dallas, TX, learning front-end and back-end web development.
              Outside of class my hobbies include working out, reading, and
              enjoying Rock n Roll music.
            </h4>
            <h4 class="intro">
              I currently work with Javascript in my coding and also incorporate
              libraries like React, Express and Handlebars. In my homeworks and
              projects I have learned to use databases such as MYSQL and
              MongoDB. In other applications I have learned to use AJAX and
              JSON, HTML and CSS, NodeJS and much more in my learning to become
              a fullstack web developer.
            </h4>
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route path="/homework" component={HomeworkPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
