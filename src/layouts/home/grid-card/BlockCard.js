import React from "react";

import { Card, CardHeader, CardBody, CardFooter } from "./Card.styles";

import RowBlock from "./RowBlock";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const GridCard = ({ heading }) => {
  return (
    <Card>
      <CardHeader>
        <h2>{heading}</h2>
      </CardHeader>
      <CardBody>
        <RowBlock />
        <RowBlock />
        <RowBlock />
        <RowBlock />
        <RowBlock />
        <RowBlock />
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

export default GridCard;
