import React from "react";

import BlockCard from "./grid-card/BlockCard";
import TransactionCard from "./grid-card/TransactionCard";

const TableGrid = () => {
  return (
    <div className="table-grid">
      <div className="table-grid__left">
        <BlockCard heading="Latest Blocks" />
      </div>
      <div className="table-grid__right">
        <TransactionCard heading="Latest Transactions" />
      </div>
    </div>
  );
};

export default TableGrid;
