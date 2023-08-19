import React from "react";
import { Container, ListItem, Seperator } from "./Blockchain";
import { Link } from "react-router-dom";

const Developers = ({ title }) => {
  return (
    <div className={`dropdown ${title === "developers" ? "" : "none"}`}>
      <Container>
        <ul>
          <ListItem>
            <Link to="/">API Plans</Link>
          </ListItem>
          <ListItem>
            <Link to="/">API Documentation</Link>
          </ListItem>
        </ul>
        <Seperator />
        <ul>
          <ListItem>
            <Link to="/">Code Reader</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Verify Contract</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Similar Contract Search</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Contract Diff Checker</Link>
          </ListItem>
        </ul>
        <Seperator />
        <ul>
          <ListItem>
            <Link to="/">Vyper Online Compiler</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Bytecode to Opcode</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Broadcast Transaction</Link>
          </ListItem>
        </ul>
      </Container>
    </div>
  );
};

export default Developers;
