import styled, { css } from "styled-components";

const common = css`
  display: grid;
  grid-template-columns: auto auto auto;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 2rem;
  padding-top: 2rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 400px) {
    grid-template-columns: auto;
    position: relative;
  }
`;

const rowCommon = css`
  display: flex;
  flex-direction: column;
  padding-top: 6px;

  @media (max-width: 400px) {
    margin-bottom: 3px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #e9ecef;

  h2 {
    font-weight: 500;
  }
`;

export const CardBody = styled.div`
  padding: 2rem;
  overflow: auto;
  padding-bottom: 0;
`;

export const BlockRow = styled.div`
  ${common};
`;

export const TransactionRow = styled.div`
  ${common};
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #000;

  .image {
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 5px;

    svg {
      font-size: 2.5rem;
    }

    @media (max-width: 400px) {
      display: none;
    }
  }

  .info {
    h3 {
      font-weight: 500;
      font-size: 1.3rem;
      color: #0784c3;
      margin-bottom: 5px;

      @media (max-width: 400px) {
        margin-right: 3px;
      }
    }

    p {
      font-size: 1.2rem;
      color: #727173;
    }

    @media (max-width: 400px) {
      display: flex;
    }
  }
`;

export const RewardContainer = styled.div`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #e9ecef;
  height: fit-content;
  width: fit-content;
  align-self: center;
  font-size: 1.1rem;
  font-weight: 500;

  @media (max-width: 400px) {
    padding: 3px;
    font-size: 1rem;
    position: absolute;
    top: 38px;
    right: 6px;
  }
`;

export const ByContainer = styled.div`
  ${rowCommon};

  .validate {
    font-size: 1.4rem;
    margin-bottom: 3px;

    span {
      color: #0784c3;
      font-size: 1.4rem;
    }
  }

  .desc {
    .txns {
      color: #0784c3;
      font-size: 1.4rem;
    }

    .time {
      color: #727173;
      font-size: 1.2rem;
    }
  }
`;

export const FromContainer = styled.div`
  ${rowCommon};

  .from {
    p {
      font-size: 1.4rem;
    }

    span {
      color: #0784c3;
      font-size: 1.4rem;
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f8f9fa;
  height: 5rem;
  overflow: hidden;

  p {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      margin-top: 2px;
    }
  }

  &:hover > p {
    color: #0784c3;
  }
`;
