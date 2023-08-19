import React from "react";
import { Container, ListItem } from "./Blockchain";
import { Link } from "react-router-dom";

const Nfts = ({ title }) => {
  return (
    <div className={`dropdown ${title === "NFTs" ? "" : "none"}`}>
      <Container>
        <ul>
          <ListItem>
            <Link to="/">Top NFTs</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Top Mints</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Latest Trades</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Latest Transfer</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Latest Mint</Link>
          </ListItem>
        </ul>
      </Container>
    </div>
  );
};

export default Nfts;
