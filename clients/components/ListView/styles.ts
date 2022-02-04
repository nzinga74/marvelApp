import styled, { css } from "styled-components";
export const size = {
  tablet: "768px",
};
export const devices = {
  tablet: `(min-width: ${size.tablet})`,
};
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const Item = styled.li`
  width: calc(96% / 4);
  height: 340px;
  background-color: white;
  border-radius: 8px;
  background-color: #35343b;
  box-shadow: rgb(18 30 52 / 7%) 0px 1px 1px;
  margin-left: 10px;
  margin-bottom: 20px;

  @media only screen and (max-width: 1300px) {
    width: 48%;
  }
  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;
export const Header = styled.div`
  padding: 0px;
  height: 200px;
  border-radius: 8px;
  img {
    width: 100%;
    height: 200px;
  }
`;
export const Body = styled.div`
  height: 140px;
  padding: 16px;
`;
export const Title = styled.h3`
  color: #aaa;
  margin-top: 18px !important;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`;

export const Date = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-top: 8px;
  text-align: center;
`;
