import React from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import { ListItem, Seperator } from "./header/dropdowns/Blockchain";

import blockscan from "../assets/blockscan-logo-dark.svg";

const Drawer = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  height: ${(props) => (props.open ? "45rem" : "0")};
  opacity: ${(props) => (props.open ? "1" : "0")};

  transition: all 0.2s;
`;
const CustomAccordion = styled(Accordion)`
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  margin: 0 !important;
`;

const CustomDetails = styled(AccordionDetails)`
  border: 1px solid #e9ecef !important;
  margin: 0 1rem;
  border-radius: 8px;
  margin-bottom: 1rem !important;

  a {
    font-size: 1.4rem;
  }

  .more-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .three-cols {
    display: grid;
    grid-template-columns: auto auto auto;

    div {
      background-color: #fff;
      flex: 1;
    }

    @media (max-width: 600px) {
      grid-template-columns: auto;
    }
  }
`;

const DrawerNav = ({ open }) => {
  return (
    <Drawer className="drawer" open={open}>
      <NavLink to="/" style={{ padding: "2rem" }}>
        Home
      </NavLink>
      <Seperator style={{ marginTop: "2rem" }} />
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<BiChevronDown style={{ fontSize: "1.8rem" }} />}
        >
          <p>Blockchain</p>
        </AccordionSummary>
        <CustomDetails>
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
        </CustomDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<BiChevronDown style={{ fontSize: "1.8rem" }} />}
        >
          <p>Validators</p>
        </AccordionSummary>
        <CustomDetails>
          <ul>
            <ListItem>
              <Link to="/">Validators Leaderboard</Link>
            </ListItem>
            <ListItem>
              <Link to="/">View Validators Set Info</Link>
            </ListItem>
          </ul>
        </CustomDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<BiChevronDown style={{ fontSize: "1.8rem" }} />}
        >
          <p>Tokens</p>
        </AccordionSummary>
        <CustomDetails>
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
        </CustomDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<BiChevronDown style={{ fontSize: "1.8rem" }} />}
        >
          <p>NFTs</p>
        </AccordionSummary>
        <CustomDetails>
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
        </CustomDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<BiChevronDown style={{ fontSize: "1.8rem" }} />}
        >
          <p>Resources</p>
        </AccordionSummary>
        <CustomDetails>
          <ListItem>
            <Link to="/">Charts & Stats</Link>
          </ListItem>
        </CustomDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<BiChevronDown style={{ fontSize: "1.8rem" }} />}
        >
          <p>Developers</p>
        </AccordionSummary>
        <CustomDetails>
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
        </CustomDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<BiChevronDown style={{ fontSize: "1.8rem" }} />}
        >
          <p>More</p>
        </AccordionSummary>
        <CustomDetails>
          <div>
            <div className="more-container">
              <div>
                <div className="more-container__column">
                  <h3>Tools & Services</h3>
                  <p>
                    Discover more of BscScan's tools and services in one place.
                  </p>
                  <div className="sponsor">
                    <p>Sponsored</p>
                    <img src={blockscan} alt="blockscan" />
                  </div>
                </div>
              </div>
              <div className="three-cols">
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
            </div>
          </div>
        </CustomDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<BiChevronDown style={{ fontSize: "1.8rem" }} />}
        >
          <p>Explorers</p>
        </AccordionSummary>
        <CustomDetails>
          <ul>
            <ListItem>
              <Link to="/">Bsc Mainnet</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Bsc Testnet</Link>
            </ListItem>
          </ul>
        </CustomDetails>
      </CustomAccordion>
    </Drawer>
  );
};

export default DrawerNav;
