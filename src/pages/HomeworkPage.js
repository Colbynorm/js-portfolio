import React from "react";
import { Container } from "react-bootstrap";
import Homework from "../components/Homework";
import homeworkArr from "../homework.json";

function HomeworkPage(props) {
  return (
        <Container>
          {homeworkArr.map((item) => (
            <Homework
              key={item.id}
              title={item.title}
              link={item.link}
              id="homework"
            />
          ))}
        </Container>
      );
    }

export default HomeworkPage;
