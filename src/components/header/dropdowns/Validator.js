import React from "react";
import { Container, ListItem } from "./Blockchain";
import { Link } from "react-router-dom";

const Validator = ({ title }) => {
  return (
    <div className={`dropdown ${title === "validators" ? "" : "none"}`}>
      <Container>
        <ul>
          <ListItem>
            <Link to="/">Validators Leaderboard</Link>
          </ListItem>
          <ListItem>
            <Link to="/">View Validators Set Info</Link>
          </ListItem>
        </ul>
      </Container>
    </div>
  );
};

export default Validator;
