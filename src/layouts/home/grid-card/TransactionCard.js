import React from "react";

import { Card, CardHeader, CardBody, CardFooter } from "./Card.styles";
import RowTransaction from "./RowTransaction";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const TransactionCard = ({ heading }) => {
  return (
    <Card>
      <CardHeader>
        <h2>{heading}</h2>
      </CardHeader>
      <CardBody>
        <RowTransaction />
        <RowTransaction />
        <RowTransaction />
        <RowTransaction />
        <RowTransaction />
        <RowTransaction />
      </CardBody>
      <CardFooter>
        <Link to="/">
          <p>
            View All Transactions <AiOutlineArrowRight />
          </p>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TransactionCard;
