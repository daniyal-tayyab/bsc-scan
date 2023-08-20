import React from "react";

import { Container, ListItem } from "./Blockchain";

import blockscan from "../../../assets/blockscan-logo-dark.svg";
import { Link } from "react-router-dom";

const More = ({ title }) => {
  return (
    <div className={`more-dropdown ${title === "more" ? "" : "none"}`}>
      <Container>
        <div className="more-container">
          <div className="more-container__column">
            <h3>Tools & Services</h3>
            <p>Discover more of Tollcahain's tools and services in one place.</p>
            <div className="sponsor">
              <p>Sponsored</p>
              <img src={blockscan} alt="blockscan" />
            </div>
          </div>
          <div className="more-container__column">
            <h3>Tools</h3>
            <ListItem>
              <Link to="/">Unit Converter</Link>
            </ListItem>
            <ListItem>
              <Link to="/">CSV Export</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Account Balance Checker</Link>
            </ListItem>
          </div>
          <div className="more-container__column">
            <h3>Explore</h3>
            <ListItem>
              <Link to="/">Gas Tracker</Link>
            </ListItem>
            <ListItem>
              <Link to="/">DEX Tracker</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Node Tracker</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Label Cloud</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Domain Name Lookup</Link>
            </ListItem>
          </div>
          <div className="more-container__column">
            <h3>Services</h3>
            <ListItem>
              <Link to="/">Token Approvals</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Verified Signature</Link>
            </ListItem>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default More;
