import React from "react";
import { Container, ListItem } from "./Blockchain";
import { Link } from "react-router-dom";

const Resources = ({ title }) => {
  return (
    <div className={`dropdown ${title === "resources" ? "" : "none"}`}>
      <Container>
        <ListItem>
          <Link to="/">Charts & Stats</Link>
        </ListItem>
      </Container>
    </div>
  );
};

export default Resources;
