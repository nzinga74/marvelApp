import styled from "styled-components";

export const DetailSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  max-width: 1280px;
  width: 100%;

  background: white;
  margin: 0 auto;
  background-color: #35343b;
  box-shadow: rgb(18 30 52 / 7%) 0px 1px 1px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const LeftSide = styled.div`
  width: 40%;
  img {
    width: 100%;
    height: 400px;
    aspect-ratio: 1;
    border-radius: 10px;
  }
  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  width: 60%;
  padding: 80px;
  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
`;
export const Title = styled.h2`
  color: #aaa;
  font-size: 20px;
  font-weight: normal;
`;
export const Description = styled.p`
  font-size: 15px;
  color: #aaa;
  margin-top: 20px;
  text-align: justify;
`;
export const Series = styled.ul`
  list-style: none;
  margin-top: 20px;
`;
export const SerieItem = styled.li`
  margin-top: 10px;
`;

export const SerieContext = styled.span`
  margin-left: 10px;
  color: #aaa;
`;
