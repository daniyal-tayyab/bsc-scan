import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { BiSearch } from "react-icons/bi";

const Hero = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="hero">
      <div className="hero__search-container">
        <h1>BNB Smart Chain Explorer</h1>
        <div className="search-bar">
          <div>
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
          </div>
          <input placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" />
          <div className="search-btn">
            <BiSearch />
          </div>
        </div>
      </div>
      <div className="hero__stats-container"></div>
    </div>
  );
};

export default Hero;
