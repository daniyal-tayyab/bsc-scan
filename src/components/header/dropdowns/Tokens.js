import React from "react";
import { Container, ListItem } from "./Blockchain";
import { Link } from "react-router-dom";

const Tokens = ({ title }) => {
  return (
    <div className={`dropdown ${title === "tokens" ? "" : "none"}`}>
      <Container>
        <ul>
          <ListItem>
            <Link to="/">
              Top Tokens <span>(BEP-20)</span>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/">
              Token Transfer <span>(BEP-20)</span>
            </Link>
          </ListItem>
        </ul>
      </Container>
    </div>
  );
};

export default Tokens;
