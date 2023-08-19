import React from "react";

import HeaderStatusBar from "../../components/header/HeaderStatusBar";
import HeaderNav from "../../components/header/HeaderNav";

const HeaderHome = () => {
  return (
    <header className="header-home">
      <HeaderStatusBar />
      <HeaderNav />
    </header>
  );
};

export default HeaderHome;
