import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { BiSearch } from "react-icons/bi";

import ApexChart from "../../components/ApexChart";

import bnbMarketIcon from "../../assets/bnb-token.svg";
import transactionIcon from "../../assets/transaction_icon.svg";
import marketCapIcon from "../../assets/market_cap_icon.svg";
import latestIcon from "../../assets/latest_block_icon.svg";
import useWindowDimensions from "../../hooks/WindowDimension";

const Hero = () => {
  const [age, setAge] = useState("");
  const { width } = useWindowDimensions();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="hero">
      <div className="hero__search-container">
        <h1>BNB Smart Chain Explorer</h1>
        <div className="search-bar">
          <div>
            {width > 600 && (
              <FormControl sx={{ minWidth: 110 }}>
                <Select
                  style={{
                    height: "3.5rem",
                    fontSize: "1.3rem",
                  }}
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">All Filters</MenuItem>
                  <MenuItem value="addresses">Addresses</MenuItem>
                  <MenuItem value="tokens">Tokens</MenuItem>
                  <MenuItem value="name tags">Name Tags</MenuItem>
                  <MenuItem value="labels">Lables</MenuItem>
                  <MenuItem value="websites">Websites</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
          <input placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" />
          <div className="search-btn">
            <BiSearch />
          </div>
        </div>
      </div>
      <div className="hero__stats-container">
        <div className="stats-grid">
          <div className="bnb-price common">
            <img className="icon" src={bnbMarketIcon} alt="market" />
            <div className="right">
              <h2>BNB Price</h2>
              <p>
                <span>$217.29 </span>
                <span className="col-grey">@ 0.008343 BTC</span>
                <span className="col-green"> (+0.19%)</span>
              </p>
            </div>
          </div>
          <div className={`transactions common ${width > 500 ? "pl-10" : ""}`}>
            <img className="icon" src={transactionIcon} alt="transactionIcon" />
            <div className="right">
              <h2>TRANSACTIONS</h2>
              <p>
                <span>4,635.32 M </span>
                <span className="col-grey" style={{ fontSize: "1.4rem" }}>
                  (31.3 TPS)
                </span>
              </p>
            </div>
          </div>
          <div className="bnb-market common pt-20 pb-0">
            <img className="icon" src={marketCapIcon} alt="marketCapIcon" />
            <div className="right">
              <h2>BNB MARKET CAP ON BSC</h2>
              <p>
                <span>$5,247,178,344.00 </span>
                <span className="col-grey">(24,148,466 BNB)</span>
              </p>
            </div>
          </div>
          <div
            className={`latest-block common ${
              width > 500 ? "pl-20 pt-20 pb-0" : "pt-20"
            }`}
          >
            <img className="icon" src={latestIcon} alt="latestIcon" />
            <div className="right">
              <h2>LATEST BLOCK</h2>
              <p>
                <span>30995902 </span>
                <span> </span>
                <span className="col-grey">(3.0s)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="chart-container">
          <h2>BSC TRANSACTION HISTORY IN 14 DAYS</h2>
          <ApexChart />
        </div>
      </div>
    </div>
  );
};

export default Hero;
