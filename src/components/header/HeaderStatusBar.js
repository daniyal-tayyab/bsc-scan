import React, { useState } from "react";

import gasIcon from "../../assets/gas-icon.png";
import bngLogo from "../../assets/Logo.png";

import { ListItem, Seperator } from "./dropdowns/Blockchain";
import { NavLink } from "react-router-dom";

const bnbPrice = 215.53;
const change = -1.69;
const gas = 3;

const HeaderStatusBar = () => {
  const [isNetwork, setIsNetwork] = useState(false);
  const handleIsNetWork = () => setIsNetwork((prevState) => !prevState);

  return (
    <div className="status-bar">
      <div className="status-bar__bar">
        <div className="status-bar__bar--left">
          <div>
            <span className="col-grey">BNB Price:</span>{" "}
            <span className="col-navy-blue">${bnbPrice}</span>{" "}
            <span className="col-red">({change}%)</span>
          </div>
        </div>
        <div className="status-bar__bar--right">
          <img src={gasIcon} alt="gas" />
          <span className="col-grey">
            Gas: <span className="col-navy-blue">{gas} Gwei</span>
          </span>
        </div>
      </div>
      <div className="status-bar__network-tab">
        <div
          className={`status-bar__network-tab--tab ${
            isNetwork && "activeNetwork"
          }`}
          onClick={handleIsNetWork}
        >
          <img src={bngLogo} alt="bnb" />
          {isNetwork && (
            <div className="network-dropdown">
              <ul>
                <ListItem>
                  <NavLink to="/">Tolchain Mainnet</NavLink>
                </ListItem>
              </ul>
              <Seperator />
              <ul>
                <ListItem>
                  <NavLink to="/testnet">Tolchain Testnet</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/bnb-test-net">opBNB Testnet</NavLink>
                </ListItem>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderStatusBar;
