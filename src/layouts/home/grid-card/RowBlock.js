import React from "react";

import {
  BlockRow,
  InfoContainer,
  RewardContainer,
  ByContainer,
} from "./Card.styles";

import { GrCube } from "react-icons/gr";

const RowBlock = () => {
  return (
    <BlockRow>
      <InfoContainer>
        <div className="image">
          <GrCube />
        </div>
        <div className="info">
          <h3>30995902</h3>
          <p>11 secs ago</p>
        </div>
      </InfoContainer>
      <ByContainer>
        <p className="validate">
          Validated By <span>Blockorus</span>
        </p>
        <p className="desc">
          <span className="txns">74 txns</span>
          <span className="time"> in 3 secs</span>
        </p>
      </ByContainer>
      <RewardContainer>0.0366 BNB</RewardContainer>
    </BlockRow>
  );
};

export default RowBlock;
