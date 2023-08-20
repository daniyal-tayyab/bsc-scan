import React from "react";

import {
  TransactionRow,
  InfoContainer,
  RewardContainer,
  FromContainer,
} from "./Card.styles";

import { GrCube } from "react-icons/gr";

const RowTransaction = () => {
  return (
    <TransactionRow>
      <InfoContainer>
        <div className="image">
          <GrCube />
        </div>
        <div className="info">
          <h3>30995902</h3>
          <p>11 secs ago</p>
        </div>
      </InfoContainer>
      <FromContainer>
        <p className="from">
          From <span>0x69C77a...A8DDaBfA</span>
        </p>
        <p className="from">
          To <span>0x000000...00001000</span>
        </p>
      </FromContainer>
      <RewardContainer>0.0366 BNB</RewardContainer>
    </TransactionRow>
  );
};

export default RowTransaction;
