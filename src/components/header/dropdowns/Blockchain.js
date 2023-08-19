import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  border-top: 2px solid #0784c3;
  padding: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const Seperator = styled.ul`
  height: 1px;
  background-color: #e9ecef;
  margin: 5px 0;
`;

export const ListItem = styled.li`
  padding: 0.8rem;
  color: #26263a;
  border-radius: 7px;

  &:hover {
    background-color: #e9ecef;
  }

  a {
    font-size: 1.2rem;
    span {
      font-size: 1.1rem;
      color: #727173;
    }
  }
`;

const Blockchain = ({ title }) => {
  return (
    <>
      <div className={`dropdown ${title === "blockchain" ? "" : "none"}`}>
        <Container>
          <ul>
            <ListItem>
              <Link to="/">Transactions</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Pending Transactions</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Contract Internal Transactions</Link>
            </ListItem>
          </ul>
          <Seperator />
          <ul>
            <ListItem>
              <Link to="/">View Blocks</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Forked Block (Reorgs)</Link>
            </ListItem>
          </ul>
          <Seperator />
          <ul>
            <ListItem>
              <Link to="/">Top Accounts</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Verified Contracts</Link>
            </ListItem>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Blockchain;
