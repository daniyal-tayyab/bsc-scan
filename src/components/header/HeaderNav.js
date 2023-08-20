import React, { useState } from "react";

import styled from "styled-components";

import logo from "../../assets/logo.svg";
import navList from "../../utils/nav";
import { Link, NavLink } from "react-router-dom";

import { BiChevronDown } from "react-icons/bi";
import { FcMenu } from "react-icons/fc";

import Blockchain from "./dropdowns/Blockchain";
import Validator from "./dropdowns/Validator";
import Tokens from "./dropdowns/Tokens";
import Nfts from "./dropdowns/Nfts";
import Resources from "./dropdowns/Resources";
import Developers from "./dropdowns/Developers";
import More from "./dropdowns/More";
import DrawerNav from "../DrawerNav";

const Container = styled.div`
  margin-bottom: ${(props) => (props.open ? "45rem" : "0")};
  transition: all 0.2s;

  @media (max-width: 1000px) {
    margin-bottom: ${(props) => (props.open ? "43rem" : "0")};
  }
`;

const HeaderNav = () => {
  const [hover, setHover] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleHover = (hover) => setHover(hover);
  const toogleDrawer = () => setShowDrawer((prevState) => !prevState);

  return (
    <Container className="header-nav" open={showDrawer}>
      <div className="header-nav__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="header-nav__navigation">
        <ul className="header-nav__navigation__list">
          {navList.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleHover(item.title)}
              onMouseLeave={() => handleHover("")}
            >
              <NavLink to={item.path}>
                {item.title}
                <BiChevronDown style={index === 0 && { opacity: 0 }} />
                {item.title === "blockchain" ? (
                  <Blockchain
                    title={hover}
                    onMouseEnter={() => handleHover(item.title)}
                  />
                ) : item.title === "validators" ? (
                  <Validator title={hover} />
                ) : item.title === "tokens" ? (
                  <Tokens title={hover} />
                ) : item.title === "NFTs" ? (
                  <Nfts title={hover} />
                ) : item.title === "resources" ? (
                  <Resources title={hover} />
                ) : item.title === "developers" ? (
                  <Developers title={hover} />
                ) : item.title === "more" ? (
                  <More title={hover} />
                ) : (
                  <> </>
                )}
              </NavLink>
            </li>
          ))}
          <li>
            <span style={{ fontSize: "1.5rem" }}>|</span>
            <NavLink to="sign-in" style={{ marginLeft: "2rem" }}>
              Sign In
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-nav__mobile-menu">
        <NavLink to="sign-in" style={{ marginLeft: "2rem" }}>
          Sign In
        </NavLink>
        <div className="hamburger" onClick={toogleDrawer}>
          <FcMenu />
        </div>
      </div>
      <DrawerNav open={showDrawer} />
    </Container>
  );
};

export default HeaderNav;
