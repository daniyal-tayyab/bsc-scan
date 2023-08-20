import React from "react";

import { AiOutlineTwitter } from "react-icons/ai";
import { BiArrowToTop } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

import logo from "../assets/logo_small.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__social">
          <AiOutlineTwitter /> Twitter
        </div>
        <div
          className="footer__top__back-to-top"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <BiArrowToTop /> Back to top
        </div>
      </div>
      <div className="footer__main">
        <div className="footer__main__company-info">
          <p className="power-by">
            <img src={logo} alt="logo" /> Powered by BNB Beacon Chain
          </p>
          <p className="desc">
            BscScan is a Block Explorer and Analytics Platform for BNB Smart
            Chain.
          </p>
          <div className="add-network">
            <img
              src="https://bscscan.com/images/svg/brands/metamask.svg"
              alt="network"
            />{" "}
            Add BSC Network
          </div>
        </div>
        <div className="footer__main__useful-links">
          <div className="column">
            <p>Company</p>
            <span>Delegate to BscScan</span>
            <span>Brand Assets</span>
            <span>Contact Us</span>
            <span>Terms of Service</span>
            <span>Bug Bounty</span>
          </div>
          <div className="column">
            <p>Community</p>
            <span>API Documentation</span>
            <span>Knowledge Base</span>
            <span>Network Status</span>
            <span>Learn BSC</span>
          </div>
          <div className="column">
            <p>Products & Services</p>
            <span>Advertise</span>
            <span>Explorer-as-a-Service (EaaS)</span>
            <span>API Plans</span>
            <span>Priority Support</span>
            <span>Blockscan</span>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>BscScan © 2023 (BSC-D)</p>
        <p>
          Donations: 0x71c765...d8976f <AiFillHeart />
        </p>
      </div>
    </div>
  );
};

export default Footer;
